import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceService } from './experience.service';

const createExperienceIntoDB = catchAsync(async (req, res) => {
  const result = await ExperienceService.createExperienceIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience created successfully',
    data: result,
  });
});

const updateExperienceIntoDB = catchAsync(async (req, res) => {
  const result = await ExperienceService.updateExperienceIntoDB(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  });
});

const deleteExperienceFromDB = catchAsync(async (req, res) => {
  const result = await ExperienceService.deleteExperienceFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience deleted successfully',
    data: result,
  });
});

const getAllExperiencesFromDB = catchAsync(async (req, res) => {
  const result = await ExperienceService.getAllExperiencesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Experiences fetched successfully',
    data: result,
  });
});

const getSingleExperiencesFromDB = catchAsync(async (req, res) => {
  const result = await ExperienceService.getSingleExperiencesFromDB(
    req.params.id
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Experience fetched successfully',
    data: result,
  });
});

export const ExperienceControllers = {
  createExperienceIntoDB,
  updateExperienceIntoDB,
  deleteExperienceFromDB,
  getAllExperiencesFromDB,
  getSingleExperiencesFromDB,
};
