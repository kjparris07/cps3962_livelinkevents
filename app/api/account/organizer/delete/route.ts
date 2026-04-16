import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
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
      message: 'Organizer account deleted.',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: 'Server error deleting organizer account.' },
      { status: 500 }
    );
  }
}