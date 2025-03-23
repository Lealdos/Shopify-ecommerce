import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
export async function POST(request: NextRequest) {
    const cookieStore = await cookies();
    cookieStore.delete('accessToken');

    return Response.json({ success: true });
}
