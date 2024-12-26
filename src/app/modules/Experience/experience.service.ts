import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

const createExperienceIntoDB = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const updateExperienceIntoDB = async (_id: string, payload: TExperience) => {
  const result = await Experience.updateOne({ _id }, { $set: payload });
  return result;
};

const deleteExperienceFromDB = async (_id: string) => {
  const result = await Experience.deleteOne({ _id });
  return result;
};

const getAllExperiencesFromDB = async () => {
  const result = await Experience.find();
  return result;
};

const getSingleExperiencesFromDB = async (_id: string) => {
  const result = await Experience.findOne({ _id });
  return result;
};

export const ExperienceService = {
  createExperienceIntoDB,
  updateExperienceIntoDB,
  deleteExperienceFromDB,
  getAllExperiencesFromDB,
  getSingleExperiencesFromDB,
};
