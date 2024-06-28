'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import InputWrapper from '@/components/InputWrapper';
import GoogleAuth from '@/components/auth/GoogleAuth';
import { SubmitButton } from '../SubmitButton';
import { errorToast } from '@/utils/utils';
import { signInWithEmail } from '@/app/actions/login.actions';
import { Button } from '../ui/button';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

const MagicLinkLogin = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [isMagicLinkSent, setIsMagicLinkSent] = useState(false);

  const router = useRouter();

  // Handle form submission
  const handleFormAction = async (formData: FormData) => {
    const email = formData.get('email') as string;
    if (!email) {
      errorToast('Email is required');
      return;
    }

    setEmailAddress(email);
    const response = await signInWithEmail(email);

    if (typeof response === 'string') {
      errorToast(response);
      return;
    }
    setIsMagicLinkSent(true);
  };

  return (
    <div className='w-full space-y-8'>
      <p className='text-sm text-subtle text-center'>
        {isMagicLinkSent ? (
          <span>
            We have sent a magic link to <br /> <span className='font-medium'>{emailAddress}</span>
          </span>
        ) : (
          'Please enter your below details to login'
        )}
      </p>
      {isMagicLinkSent ? (
        <div className='flex flex-col justify-center gap-1'>
          <Link href='https://mail.google.com' target='_blank' className='block'>
            <Button size='xl'>Go To mail</Button>
          </Link>
          <Button variant='link' onClick={() => router.back()} className='font-normal'>
            <MdOutlineKeyboardBackspace className='mr-2' />
            Go back
          </Button>
        </div>
      ) : (
        <div className='w-full space-y-6'>
          <GoogleAuth />

          <div className='flex items-center gap-2'>
            <hr className='w-full' />
            <span>or</span>
            <hr className='w-full' />
          </div>

          <form className='space-y-7'>
            <InputWrapper label='Email address' required>
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='john@gmail.com'
                className='h-11 bg-secondary mt-2'
              />
            </InputWrapper>

            <SubmitButton formAction={handleFormAction}>Continue</SubmitButton>
          </form>
        </div>
      )}
    </div>
  );
};

export default MagicLinkLogin;