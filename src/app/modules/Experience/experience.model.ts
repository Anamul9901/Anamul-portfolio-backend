import { model, Schema } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema = new Schema<TExperience>({
  companyName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  companyInfo: {
    type: String,
    required: true,
  },
  companyLink: {
    type: String,
    required: false,
  },
});

export const Experience = model<TExperience>('Experience', experienceSchema);
