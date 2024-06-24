import React from 'react';
import NavTitle from '@/components/merchant-dashboard/NavTitle';
import SignOutButton from '@/components/merchant-dashboard/SignOutButton';
import AccountSettings from '@/components/merchant-dashboard/account-settings/AccountSettings';

const Page = () => {
  return (
    <div className='p-8 w-full bg-slate-50'>
      <NavTitle />
      <div className='flex justify-between mt-9'>
        <div>
          <h2 className='text-lg text-slate-800 font-semibold'>Account details</h2>
          <p className='text-slate-500 font-medium mt-2 text-sm'>Access and Manage Details of your account</p>
        </div>
        <SignOutButton />
      </div>
      <AccountSettings />
    </div>
  );
};

export default Page;
