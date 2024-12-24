import { z } from 'zod';

const skillValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    title: z.string().optional(),
    image: z.string(),
    link: z.string().optional(),
  }),
});

const skillUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    title: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const SkillValidation = {
  skillValidationSchema,
  skillUpdateValidationSchema,
};
