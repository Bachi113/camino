// Config Type
type TypeConfig = {
  isSupabaseEnabled: boolean;
  app: {
    name: string;
    description: string;
    url: string;
  };
  supportEmail: string;
  supabaseStorageBucket: string;
  stripe: {
    baseUrl: string;
  };
  resend: {
    senderEmailAddress: string;
  };
  twilio: {
    messagingServiceSid: string;
  };
};

// Supabase API credentials retrieved from environment variables for secure access.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const config = {
  // Boolean flag to determine if Supabase should be enabled based on the availability of necessary environment variables.
  isSupabaseEnabled: !!supabaseUrl && !!supabaseKey,

  // APP: Basic application settings used globally for branding and links.
  app: {
    name: 'Camino',
    description: 'Camino is your all-in-one platform for seamless merchant and customer interactions.',
    url: 'https://caminodb.vercel.app',
  },

  // SUPPORT: Contact email for application support, should be updated with an actual email address.
  supportEmail: '',

  // Supabase
  supabaseStorageBucket: 'documents',

  // STRIPE: payment configuration similar in structure to Lemon Squeezy for processing payments.
  stripe: {
    // Base URL for Stripe.
    baseUrl: 'https://api.stripe.com',
  },
  resend: {
    senderEmailAddress: 'Camino <support@send.camino.fi>',
  },
  twilio: {
    messagingServiceSid: 'MG2736eadba7b9a972e208f7a4cc2ce19e',
  },
};

export default config as TypeConfig;
