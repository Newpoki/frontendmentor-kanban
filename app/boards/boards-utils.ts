import { z } from 'zod';

const boardDialogFormColumnSchema = z.object({
    name: z.string().min(1, "Can't be empty").max(10, '10 chars max'),
    color: z
        .string()
        .min(1, "Can't be empty")
        .regex(/^#(?:[0-9a-f]{3}){1,2}$/i),
});

export const boardDialogFormSchema = z.object({
    name: z.string().min(1, "Can't be empty"),
    columns: z.array(boardDialogFormColumnSchema),
});

export type BoardDialogFormValues = z.infer<typeof boardDialogFormSchema>;
