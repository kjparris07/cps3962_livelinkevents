import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { email, fullName, username, phoneNumber, favoriteGenre } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Customer account updated.',
      updatedUser: {
        email,
        fullName,
        username,
        phoneNumber,
        favoriteGenre,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Server error updating customer account.' },
      { status: 500 }
    );
  }
}