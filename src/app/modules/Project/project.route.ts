import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { ProjectValidation } from './project.validation';
import { ProjectControllers } from './project.conroller';

const router = express.Router();

router.post(
  '/create',
  validateRequest(ProjectValidation.projectValidationSchema),
  ProjectControllers.createProjectIntoDB
);

router.put(
  '/:id',
  validateRequest(ProjectValidation.projectUpdateValidationSchema),
  ProjectControllers.updateProjectIntoDB
);

router.delete('/:id', ProjectControllers.deleteProjectFromDB);

router.get('/all', ProjectControllers.getAllProjectsFromDB);

router.get('/:id', ProjectControllers.getSingleProjectFromDB);

export const ProjectRoutes = router;
