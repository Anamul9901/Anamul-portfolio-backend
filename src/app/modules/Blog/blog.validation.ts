import { z } from 'zod';

const blogValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    title: z.string().optional(),
    description: z.string(),
    image: z.string(),
    readingTime: z.number(),
  }),
});

const blogUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

export const BlogValidation = {
  blogValidationSchema,
  blogUpdateValidationSchema,
};
