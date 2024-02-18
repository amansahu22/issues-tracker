import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

const createIssueSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const createdIssue = await prisma.issue.create({
    data: {
      name: body.name,
      description: body.description,
    },
  });

  return NextResponse.json(createdIssue, { status: 201 });
}
