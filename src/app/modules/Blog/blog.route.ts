import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { BlogValidation } from './blog.validation';
import { BlogControllers } from './blog.controller';
import auth from '../../middlwares/auth';

const router = express.Router();

router.post(
  '/create',
  auth('admin'),
  validateRequest(BlogValidation.blogValidationSchema),
  BlogControllers.createBlogIntoDB
);

router.put(
  '/:id',
  auth('admin'),
  validateRequest(BlogValidation.blogUpdateValidationSchema),
  BlogControllers.updateBlogIntoDB
);

router.delete('/:id', auth('admin'), BlogControllers.deleteBlogFromDB);

router.get('/all', BlogControllers.getAllBlogsFromDB);

router.get('/:id', BlogControllers.getSingleBlogFromDB);

export const BlogRoutes = router;
