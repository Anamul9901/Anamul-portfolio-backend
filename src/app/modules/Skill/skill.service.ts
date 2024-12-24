import { TSkill } from './skill.interface';
import { Skill } from './skill.model';

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const updateSkillIntoDB = async (_id: string, payload: TSkill) => {
  const result = await Skill.updateOne({ _id }, { $set: payload });
  return result;
};

const deleteSkillFromDB = async (_id: string) => {
  const result = await Skill.deleteOne({ _id });
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skill.find();
  return result;
};

const getSingleSkillFromDB = async (_id: string) => {
  const result = await Skill.findOne({ _id });
  return result;
};

export const SkillService = {
  createSkillIntoDB,
  updateSkillIntoDB,
  deleteSkillFromDB,
  getAllSkillsFromDB,
  getSingleSkillFromDB,
};