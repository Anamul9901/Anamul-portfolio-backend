/* eslint-disable @typescript-eslint/no-var-requires */
import { model, Schema } from 'mongoose';
import { TUser } from './auth.interface';
import config from '../../config';
const bcrypt = require('bcrypt');

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
