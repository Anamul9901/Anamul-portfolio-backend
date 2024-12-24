import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    frLive: {
      type: String,
      required: true,
    },
    bcLive: {
      type: String,
      required: false,
    },
    frRepo: {
      type: String,
      required: false,
    },
    bcRepo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


export const Project = model<TProject>('Project', projectSchema);
