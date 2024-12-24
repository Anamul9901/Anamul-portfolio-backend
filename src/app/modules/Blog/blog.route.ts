import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { BlogValidation } from './blog.validation';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post(
  '/create',
  validateRequest(BlogValidation.blogValidationSchema),
  BlogControllers.createBlogIntoDB
);

router.put(
  '/:id',
  validateRequest(BlogValidation.blogUpdateValidationSchema),
  BlogControllers.updateBlogIntoDB
);

router.delete('/:id', BlogControllers.deleteBlogFromDB);

router.get('/all', BlogControllers.getAllBlogsFromDB);

router.get('/:id', BlogControllers.getSingleBlogFromDB);

export const BlogRoutes = router;
