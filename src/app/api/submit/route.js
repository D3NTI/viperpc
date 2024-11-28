import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function POST(request) {
  const session = await getServerSession(authOptions);

  // Check if the user is authenticated
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;
  console.log(session);

  const body = await request.json();
  console.log(body.data);
  let { selectedOption, num, date, tel } = body.data;

  num = Number(num);
  const reservation = await prisma.reservation.create({
    data: {
      date,
      tel,
      num,
      selectedOption,
      userId,
    },
  });
  return NextResponse.json(reservation);
}
