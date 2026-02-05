import z from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(6),
});

export const authSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});
