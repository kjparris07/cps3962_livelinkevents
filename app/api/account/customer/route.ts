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
        fullName: 'Test Customer',
        email,
        username: 'testcustomer',
        phoneNumber: '123-456-7890',
        membershipPlan: 'Basic',
        favoriteGenre: 'Hip-Hop',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Server error loading customer account.' },
      { status: 500 }
    );
  }
}