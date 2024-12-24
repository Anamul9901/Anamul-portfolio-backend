import { model, Schema } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
});

export const Skill = model<TSkill>('Skill', skillSchema);
