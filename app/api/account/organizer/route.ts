import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        companyName: 'Test Organizer',
        contactName: 'Jane Smith',
        email,
        phoneNumber: '999-888-7777',
        organizationType: 'Artist',
        musicCategory: 'Afrobeats',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Server error loading organizer account.' },
      { status: 500 }
    );
  }
}