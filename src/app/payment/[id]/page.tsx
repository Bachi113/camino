import { Card, CardHeader } from '@/components/ui/card';
import PaymentDetails from '@/components/payment/PaymentDetails';
import Image from 'next/image';
import { supabaseAdmin } from '@/utils/supabase/admin';
import { redirect } from 'next/navigation';

export default async function PaymentPage({ params }: { params: { id: string } }) {
  const { data } = await supabaseAdmin
    .from('orders')
    .select('*, products (stripe_id, product_name), customers (customer_name, email)')
    .eq('id', params.id)
    .single();

  if (data && data.status !== 'pending') {
    redirect(`/payment/${data.id}/created`);
  }

  return (
    <div className='w-11/12 md:w-[30%]'>
      {data == null ? (
        <div className='text-center space-y-2'>
          <p className='text-xl font-medium'>Invalid Payment Link!</p>
          <p className='text-sm'>Please contact support</p>
        </div>
      ) : (
        <Card className='w-full shadow-xl'>
          <CardHeader className='bg-[#F9F9F9] p-4 border-b rounded-t-lg'>
            <Image src='/logo.png' width={164} height={72} alt='logo' className='w-24 mx-auto' />
          </CardHeader>

          <PaymentDetails data={data} />
        </Card>
      )}
    </div>
  );
}
