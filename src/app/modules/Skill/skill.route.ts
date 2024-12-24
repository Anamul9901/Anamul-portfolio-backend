import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { SkillValidation } from './skill.validation';
import { SkillControllers } from './skill.controller';

const router = express.Router();

router.post(
  '/create',
  validateRequest(SkillValidation.skillValidationSchema),
  SkillControllers.createSkillIntoDB
);


router.put(
  '/:id',
  validateRequest(SkillValidation.skillUpdateValidationSchema),
  SkillControllers.updateSkillIntoDB
);

router.delete('/:id', SkillControllers.deleteSkillFromDB);

router.get('/all', SkillControllers.getAllSkillsFromDB);

router.get('/:id', SkillControllers.getSingleSkillFromDB);

export const SkillRoutes = router;