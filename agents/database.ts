import { Response } from "./master";
import { codeChain } from "@/helpers/agents";

export const generateCode = async (response: Response, toastId: string | number, codeId: string, prompt: string) => {
  const steps = [
    "Create a **database schema** for a Next.js 15 project.",
    "Generate the **necessary models** for the **database schema**.",
    "Set up a **database connection** using a **Prisma ORM** in the Next.js 15 project.",
    "Write the **configuration** for the **database connection** in the Next.js 15 project.",
    "**Ensure the database connection** is properly **integrated** with the Next.js 15 project.",
  ];
  response = await codeChain(response, steps, toastId, codeId, prompt)
  return response;
}