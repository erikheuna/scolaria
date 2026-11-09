import { z } from 'zod';

export const roleSchema = z.enum([
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER",
    "PARENT",
]);

export type Role = z.infer<typeof roleSchema>