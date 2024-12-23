'use client';

import { useEffect, useState } from 'react';
import InputWrapper from '@/components/InputWrapper';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorToast } from '@/utils/utils';
import { useGetBankDetails, useGetBanksList, useGetVerificationDocuments } from '@/hooks/query';
import NavigationButton from '@/components/onboarding/NavigationButton';
import { bankFields } from '@/utils/form-fields';
import { BankDetailsSchema, IBankDetails } from '@/types/validations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import BankIcon from '@/assets/icons/BankIcon';
import { saveData, updateData } from '@/app/actions/onboarding.actions';
import { queryClient } from '@/app/providers';
import Heading from '@/components/onboarding/Heading';
import { SubmitButton } from '@/components/SubmitButton';
import { currencyOptions } from '@/utils/contsants/currencies';
import ModalOnboardingSummary from './ModalOnboardingSummary';

const BankDetails = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<IBankDetails>({
    resolver: yupResolver(BankDetailsSchema),
  });

  const { data: bankOptions } = useGetBanksList();
  const { data } = useGetBankDetails();
  const { data: documentsData } = useGetVerificationDocuments();

  useEffect(() => {
    if (data) {
      setValue('bankName', data.bank_name);
      setValue('bankAccountNumber', parseInt(data.account_number, 10));
      setValue('sortCode', data.sort_code ?? undefined);
      setValue('ibanNumber', data.iban_code);
      setValue('swiftCode', data.swift_code ?? undefined);
      setValue('purchasingCurrency', data.purchasing_currency);
    }
  }, [setValue, data]);

  const handleFormSubmit = async (formData: IBankDetails) => {
    setLoading(true);

    const dataToUpdate = {
      bank_name: formData.bankName || data?.bank_name,
      account_number: formData.bankAccountNumber,
      sort_code: formData.sortCode,
      iban_code: formData.ibanNumber,
      swift_code: formData.swiftCode,
      purchasing_currency: formData.purchasingCurrency || data?.purchasing_currency,
    };

    try {
      if (data) {
        const res = await updateData({ ...dataToUpdate, id: data.id }, 'bank_details');
        if (res?.error) throw res.error;
      } else {
        const res = await saveData(JSON.stringify(dataToUpdate), 'bank_details');
        if (res?.error) throw res.error;
      }

      queryClient.invalidateQueries({ queryKey: ['getBankDetails'] });
      router.push('/onboarding/document-verification');
    } catch (error: any) {
      errorToast(error || 'An unknown error occurred.');
      setLoading(false);
    }
  };

  return (
    <>
      <NavigationButton showNext={!!data} />
      <div className='flex flex-col items-center justify-center mt-6 animate-fade-in-left'>
        <div className='max-w-[350px] mr-20 w-full space-y-10'>
          <Heading
            title='Bank Details'
            description='Please provide your banking details to verify'
            icon={<BankIcon />}
          />
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className='space-y-4'>
              {((data && watch('bankName')) || !data) && (
                <InputWrapper id='bankName' label='Bank Name' required error={errors.bankName?.message}>
                  <Select onValueChange={(val) => setValue('bankName', val)} value={watch('bankName')}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select the bank' />
                    </SelectTrigger>

                    <SelectContent>
                      {bankOptions
                        ?.map((b) => b.bank_name)
                        .map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </InputWrapper>
              )}
              {bankFields.map((field) => (
                <InputWrapper
                  key={field.id}
                  label={field.label}
                  required={field.required}
                  error={errors[field.id]?.message}>
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    id={field.id}
                    {...register(field.id)}
                    disabled={loading}
                  />
                </InputWrapper>
              ))}

              {((data && watch('purchasingCurrency')) || !data) && (
                <InputWrapper
                  id='purchasingCurrency'
                  label='Purchasing Currency'
                  required
                  error={errors.purchasingCurrency?.message}>
                  <Select
                    onValueChange={(val) => setValue('purchasingCurrency', val)}
                    value={watch('purchasingCurrency')}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select currency' />
                    </SelectTrigger>
                    <SelectContent>
                      {currencyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </InputWrapper>
              )}

              <div className='flex gap-2'>
                <SubmitButton isLoading={loading}>{data ? 'Update' : 'Continue'}</SubmitButton>
                {documentsData && <ModalOnboardingSummary />}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
