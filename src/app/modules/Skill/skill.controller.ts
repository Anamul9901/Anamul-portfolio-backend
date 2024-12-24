import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skill.service';
import catchAsync from '../../utils/catchAsync';

const createSkillIntoDB = catchAsync(async (req, res) => {
  const result = await SkillService.createSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

const updateSkillIntoDB = catchAsync(async (req, res) => {
  const result = await SkillService.updateSkillIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkillFromDB = catchAsync(async (req, res) => {
  const result = await SkillService.deleteSkillFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
});

const getAllSkillsFromDB = catchAsync(async (req, res) => {
  const result = await SkillService.getAllSkillsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Skills fetched successfully',
    data: result,
  });
});

const getSingleSkillFromDB = catchAsync(async (req, res) => {
  const result = await SkillService.getSingleSkillFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Skill fetched successfully',
    data: result,
  });
});

export const SkillControllers = {
  createSkillIntoDB,
  updateSkillIntoDB,
  deleteSkillFromDB,
  getAllSkillsFromDB,
  getSingleSkillFromDB,
};


