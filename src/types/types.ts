import { Database } from './supabase';

export type TypeOnboarding = Database['public']['Tables']['onboarding']['Row'];

export type TypeOrder = Database['public']['Tables']['orders']['Row'];

export type TypeTransaction = Database['public']['Tables']['transactions']['Row'];
export type EnumTransactionStatus = Database['public']['Enums']['transactionstatus'];

export type TypeProduct = Database['public']['Tables']['products']['Row'];

export type TypeCustomer = Database['public']['Tables']['customers']['Row'];
export type EnumOrderStatus = Database['public']['Enums']['orderstatus'];

// Merchant Details Type
export type TypeMerchantDetails = {
  id: string;
  onboarded_at: string | null;
  personal_informations: {
    id: string;
    first_name: string;
    last_name: string;
  } | null;
  business_addresses: {
    city: string;
    street_address: string;
    postal_code: string;
    country: string;
  } | null;
  bank_details: {
    account_number: string;
    swift_code: string | null;
    iban_code: string;
  } | null;
};

// User Type
export type TypeUserType = 'merchant' | 'customer' | 'admin';

// Create Product
export type TypeCreateProduct = {
  category: string;
  currency: string;
  price: string;
  product_name: string;
  remarks?: string;
};

// Create Customer
export type TypeCreateCustomer = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

// Create Payment Link
export type TypeCreatePaymentLink = {
  stripe_cus_id: string;
  product_id: string;
  currency: string;
  price: number;
  quantity: number;
  installments_options: any;
};

export type TypeInterval = 'day' | 'week' | 'month' | 'year';

// Create Subscription
export type TypeCreateSubscription = {
  id: string;
  customer_id: string;
  payment_method_id?: string;
  product_id: string;
  currency: string;
  price: string;
  quantity: number;
  installments: number;
  interval: TypeInterval;
};

// Create Payment Method CS
export type TypeCreatePaymentMethodCS = {
  currency: string;
  customer_id: string;
  paymentId: string;
};

// Order Details
export type TypeOrderDetails = {
  id: string;
  status: string;
  currency: string;
  price: string;
  quantity: number;
  paid_amount?: number | string;
  created_at: string;
  products?: {
    product_name: string;
  };
  customers?: {
    customer_name: string;
    email: string;
    phone: string;
  };
  period?: number | null;
  interval?: string | null;
};

// Product Details
export type TypeProductDetails = {
  id: string;
  created_at: string;
  category: string;
  currency: string;
  price: string;
  product_name: string;
  remarks?: string;
};
// Customer Details
export type TypeCustomerDetails = {
  created_at: string;
  customer_id: string;
  id: string;
  merchant_id: string;
  customers: {
    customer_name: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
  } | null;
};
