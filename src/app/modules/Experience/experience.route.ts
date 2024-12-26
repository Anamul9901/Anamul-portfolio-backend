import express from 'express';
import auth from '../../middlwares/auth';
import validateRequest from '../../middlwares/validateRequest';
import { ExperienceValidation } from './experience.validation';
import { ExperienceControllers } from './experience.controller';

const router = express.Router();

router.post(
  '/create',
  auth('admin'),
  validateRequest(ExperienceValidation.experienceValidationSchema),
  ExperienceControllers.createExperienceIntoDB
);

router.put(
  '/:id',
  auth('admin'),
  validateRequest(ExperienceValidation.experienceUpdateValidationSchema),
  ExperienceControllers.updateExperienceIntoDB
);

router.delete('/:id', auth('admin'), ExperienceControllers.deleteExperienceFromDB);

router.get('/all', ExperienceControllers.getAllExperiencesFromDB);

router.get('/:id', ExperienceControllers.getSingleExperiencesFromDB);

export const ExperienceRoutes = router;