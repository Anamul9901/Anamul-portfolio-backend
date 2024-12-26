import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { ProjectValidation } from './project.validation';
import { ProjectControllers } from './project.conroller';
import auth from '../../middlwares/auth';

const router = express.Router();

router.post(
  '/create',
  auth('admin'),
  validateRequest(ProjectValidation.projectValidationSchema),
  ProjectControllers.createProjectIntoDB
);

router.put(
  '/:id',
  auth('admin'),
  validateRequest(ProjectValidation.projectUpdateValidationSchema),
  ProjectControllers.updateProjectIntoDB
);

router.delete('/:id', auth('admin'), ProjectControllers.deleteProjectFromDB);

router.get('/all', ProjectControllers.getAllProjectsFromDB);

router.get('/:id', ProjectControllers.getSingleProjectFromDB);

export const ProjectRoutes = router;
