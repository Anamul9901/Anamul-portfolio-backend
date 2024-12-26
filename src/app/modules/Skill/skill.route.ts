import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { SkillValidation } from './skill.validation';
import { SkillControllers } from './skill.controller';
import auth from '../../middlwares/auth';

const router = express.Router();

router.post(
  '/create',
  auth('admin'),
  validateRequest(SkillValidation.skillValidationSchema),
  SkillControllers.createSkillIntoDB
);

router.put(
  '/:id',
  auth('admin'),
  validateRequest(SkillValidation.skillUpdateValidationSchema),
  SkillControllers.updateSkillIntoDB
);

router.delete('/:id', auth('admin'), SkillControllers.deleteSkillFromDB);

router.get('/all', SkillControllers.getAllSkillsFromDB);

router.get('/:id', SkillControllers.getSingleSkillFromDB);

export const SkillRoutes = router;
