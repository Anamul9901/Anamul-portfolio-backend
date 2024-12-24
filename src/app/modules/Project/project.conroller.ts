import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectService } from './project.service';

const createProjectIntoDB = catchAsync(async (req, res) => {
  const result = await ProjectService.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

const updateProjectIntoDB = catchAsync(async (req, res) => {
  const result = await ProjectService.updateProjectIntoDB(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});

const deleteProjectFromDB = catchAsync(async (req, res) => {
  const result = await ProjectService.deleteProjectFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project deleted successfully',
    data: result,
  });
});

const getAllProjectsFromDB = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjectsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Projects fetched successfully',
    data: result,
  });
});

const getSingleProjectFromDB = catchAsync(async (req, res) => {
  const result = await ProjectService.getSingleProjectFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Project fetched successfully',
    data: result,
  });
});

export const ProjectControllers = {
  createProjectIntoDB,
  updateProjectIntoDB,
  deleteProjectFromDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
};
