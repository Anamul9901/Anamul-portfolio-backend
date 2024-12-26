import { z } from 'zod';

const experienceValidationSchema = z.object({
  body: z.object({
    companyName: z.string(),
    title: z.string().optional(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string().optional(),
    companyInfo: z.string(),
    companyLink: z.string().optional(),
  }),
});

const experienceUpdateValidationSchema = z.object({
  body: z.object({
    companyName: z.string().optional(),
    title: z.string().optional(),
    position: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    description: z.string().optional(),
    companyInfo: z.string().optional(),
    companyLink: z.string().optional(),
  }),
});


export const ExperienceValidation = {
  experienceValidationSchema,
  experienceUpdateValidationSchema,
};