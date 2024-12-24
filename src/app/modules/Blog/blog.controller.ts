import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';

const createBlogIntoDB = catchAsync(async (req, res) => {
  const result = await BlogService.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const updateBlogIntoDB = catchAsync(async (req, res) => {
  const result = await BlogService.updateBlogIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteBlogFromDB = catchAsync(async (req, res) => {
  const result = await BlogService.deleteBlogFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});

const getAllBlogsFromDB = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlogsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Blogs fetched successfully',
    data: result,
  });
});

const getSingleBlogFromDB = catchAsync(async (req, res) => {
  const result = await BlogService.getSingleBlogFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Blog fetched successfully',
    data: result,
  });
});

export const BlogControllers = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
};
