import { z } from 'zod';

const projectValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string().optional(),
    image: z.string(),
    frLive: z.string(),
    bcLive: z.string().optional(),
    frRepo: z.string().optional(),
    bcRepo: z.string().optional(),
  }),
});

const projectUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    frLive: z.string().optional(),
    bcLive: z.string().optional(),
    frRepo: z.string().optional(),
    bcRepo: z.string().optional(),
  }),
});

export const ProjectValidation = {
  projectValidationSchema,
  projectUpdateValidationSchema,
};
