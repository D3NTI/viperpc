import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { name, email, password } = body.data;
  console.log(body.data);

  if (!name || !email || !password) {
    return new NextResponse('Missing Fields', { status: 400 });
  }

  console.log(
    await prisma.user.client.findUnique({
      where: { email: 'bobzorin@gmail.com' },
    })
  );

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (exist) {
    return new NextResponse('User Already Exist', { status: 409 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
  return NextResponse.json(user);
}
