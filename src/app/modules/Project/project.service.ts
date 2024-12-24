import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const updateProjectIntoDB = async (_id: string, payload: TProject) => {
  const result = await Project.updateOne({ _id }, { $set: payload });
  return result;
};

const deleteProjectFromDB = async (_id: string) => {
  const result = await Project.deleteOne({ _id });
  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Project.find();
  return result;
};

const getSingleProjectFromDB = async (_id: string) => {
  const result = await Project.findOne({ _id });
  return result;
};

export const ProjectService = {
  createProjectIntoDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
};
