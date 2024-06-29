import { supabaseBrowserClient } from '@/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { getOrdersByMerchant } from './actions/supabase.actions';

const useGetPersonalInfo = () => {
  const supabase = supabaseBrowserClient();
  return useQuery({
    queryKey: ['getPersonalInfo'],
    queryFn: async () => {
      const { data, error } = await supabase.from('personal_informations').select('*').single();
      if (error) {
        throw error;
      }
      return data;
    },
  });
};

const useGetBuinessDetail = () => {
  const supabase = supabaseBrowserClient();
  return useQuery({
    queryKey: ['getBusinessDetail'],
    queryFn: async () => {
      const { data, error } = await supabase.from('business_details').select('*').single();

      if (error) {
        throw error;
      }
      return data;
    },
  });
};

const useGetBusinessAddress = () => {
  const supabase = supabaseBrowserClient();
  return useQuery({
    queryKey: ['getBusinessAddress'],
    queryFn: async () => {
      const { data, error } = await supabase.from('business_addresses').select('*').single();

      if (error) {
        throw error;
      }
      return data;
    },
  });
};

const useGetBankDetails = () => {
  const supabase = supabaseBrowserClient();
  return useQuery({
    queryKey: ['getBankDetails'],
    queryFn: async () => {
      const { data, error } = await supabase.from('bank_details').select('*').single();

      if (error) {
        throw error;
      }
      return data;
    },
  });
};

const useGetVerificationDocuments = () => {
  const supabase = supabaseBrowserClient();
  return useQuery({
    queryKey: ['getDocumentes'],
    queryFn: async () => {
      const { data, error } = await supabase.from('documents').select('*').single();

      if (error) {
        throw error;
      }
      return data;
    },
  });
};

const useGetOnboardingData = () => {
  const supabase = supabaseBrowserClient();
  return useQuery({
    queryKey: ['getOnboardingData'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('onboarding')
        .select(
          `id,
          personal_informations (*),
          business_details (*),
          business_addresses (*),
          bank_details (*),
          documents (*)
        `
        )
        .single();

      if (error) {
        throw error;
      }
      return data;
    },
  });
};

const useGetOrders = (page: number, pageSize: number, searchQuery?: string) => {
  return useQuery({
    queryKey: ['getOrders', page, pageSize, searchQuery],
    queryFn: () => getOrdersByMerchant(page, pageSize, searchQuery),
  });
};

const useGetCustomers = () => {
  const supabase = supabaseBrowserClient();
  return useQuery({
    queryKey: ['getCustomers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('merchants_customers')
        .select('*, customers (stripe_id, customer_name)')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }
      return data;
    },
  });
};

const useGetProducts = () => {
  const supabase = supabaseBrowserClient();
  return useQuery({
    queryKey: ['getProducts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select()
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }
      return data;
    },
  });
};
interface UseGetMerchantCustomersParams {
  page: number;
  pageSize: number;
  nameFilter?: string;
  idFilter?: string;
  searchQuery?: string;
}
const useGetMerchantCustomers = ({ page, pageSize, searchQuery }: UseGetMerchantCustomersParams) => {
  const supabase = supabaseBrowserClient();

  return useQuery({
    queryKey: ['getMerchantCustomers', page, pageSize, searchQuery],
    queryFn: async () => {
      // Build the base query
      let query = supabase
        .from('merchants_customers')
        .select('*, customers (customer_name, email, phone, address)')
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (searchQuery) {
        query = query.ilike('customers.customer_name', `%${searchQuery}%`);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching merchant customers:', error);
        throw new Error(`Error fetching merchant customers: ${error.message}`);
      }

      return data;
    },
    staleTime: 60000, // 1 minute
  });
};

const useGetMerchantCustomerIdAndNames = () => {
  const supabase = supabaseBrowserClient();
  return useQuery({
    queryKey: ['getMerchantCustomerIdAndNames'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('merchants_customers')
        .select('customer_id, customers (customer_name)');

      if (error) {
        throw error;
      }

      return data;
    },
  });
};

interface UseGetMerchantProductsParams {
  page: number;
  pageSize: number;
  searchQuery?: string;
}

const useGetMerchantProducts = ({ page, pageSize, searchQuery }: UseGetMerchantProductsParams) => {
  const supabase = supabaseBrowserClient();

  return useQuery({
    queryKey: ['getMerchantProducts', page, pageSize, searchQuery],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (searchQuery) {
        query = query.ilike('product_name', `%${searchQuery}%`);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching products:', error);
        throw new Error(`Error fetching products: ${error.message}`);
      }

      return data;
    },
  });
};

export {
  useGetPersonalInfo,
  useGetBuinessDetail,
  useGetBusinessAddress,
  useGetBankDetails,
  useGetVerificationDocuments,
  useGetOnboardingData,
  useGetOrders,
  useGetMerchantCustomers,
  useGetProducts,
  useGetCustomers,
  useGetMerchantCustomerIdAndNames,
  useGetMerchantProducts,
};
