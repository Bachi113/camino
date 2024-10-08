import { NextResponse } from 'next/server';
import { handleAdminLogin, handleCustomerLogin, handleMerchantLogin } from '../utils';

export async function GET(request: Request, { params }: { params: { user: string } }) {
  const requestUrl = new URL(request.url);
  const token_hash = requestUrl.searchParams.get('token_hash');
  const code = requestUrl.searchParams.get('code');
  const origin = requestUrl.origin;

  try {
    if (params.user === 'merchant') {
      await handleMerchantLogin(token_hash, code);
      return NextResponse.redirect(`${origin}/onboarding`);
    } else if (params.user === 'customer') {
      await handleCustomerLogin(token_hash);
    } else if (params.user === 'admin') {
      await handleAdminLogin(token_hash);
    }

    return NextResponse.redirect(`${origin}/dashboard`);
  } catch (error: any) {
    console.error(error);

    // Set cookie with error message and redirect
    const response = NextResponse.redirect(`${origin}/error`);
    response.cookies.set('auth_error', error || 'An unexpected error occurred.', {
      path: '/',
      httpOnly: false,
    });
    return response;
  }
}
