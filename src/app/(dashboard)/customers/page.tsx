import NavTitle from '@/components/dashboard/NavTitle';
import CustomersTable from '@/components/dashboard/customers/Table';
import { getUserRoleFromCookie } from '@/utils/user-role';
import React from 'react';

const Page = async () => {
  const userType = await getUserRoleFromCookie();

  return (
    <div className='w-full p-6'>
      <NavTitle userType='customer' />
      <CustomersTable isMerchant={userType === 'merchant'} />
    </div>
  );
};

export default Page;
