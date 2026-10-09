// Meta Logo
export const MetaIcon = () => (
  <svg 
    width="60" 
    height="40" 
    viewBox="-3 -2 42 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible flex-shrink-0"
  >
    <path 
      d="M18 13.5C16.8 11.2 15.2 8.8 13.5 7.2C11.8 5.6 9.8 4.8 7.6 4.8C3.5 4.8 0.5 8.3 0.5 12.8C0.5 17.3 3.5 20.8 7.6 20.8C9.8 20.8 11.8 19.9 13.5 18.3C15.2 16.7 16.8 14.3 18 12C19.2 14.3 20.8 16.7 22.5 18.3C24.2 19.9 26.2 20.8 28.4 20.8C32.5 20.8 35.5 17.3 35.5 12.8C35.5 8.3 32.5 4.8 28.4 4.8C26.2 4.8 24.2 5.6 22.5 7.2C20.8 8.8 19.2 11.2 18 13.5Z" 
      stroke="#0064FF" 
      strokeWidth="2.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// WhatsApp Logo from public folder
export const WhatsAppIcon = () => (
  <img 
    src="/whatsapp.jpg" 
    alt="WhatsApp" 
    className="h-[44px] w-[44px] object-contain flex-shrink-0" 
  />
);

// Google Ads Logo from public folder
export const GoogleAdsIcon = () => (
  <img 
    src="/googale%20ads.jpg" 
    alt="Google Ads" 
    className="h-[44px] w-[44px] object-contain flex-shrink-0"
    onError={(e) => {
      e.currentTarget.src = '/google-ads.jpg';
    }}
  />
);

// LeadZam Forms Logo
export const LeadZamIcon = () => (
  <svg 
    width="50" 
    height="50" 
    viewBox="0 0 36 36" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible flex-shrink-0"
  >
    <rect width="36" height="36" rx="9" fill="#D3D7DF" />
    <path 
      d="M13 10V25H23" 
      stroke="#4F46E5" 
      strokeWidth="4.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Website and CSV Logo
export const WebsiteIcon = () => (
  <svg 
    width="50" 
    height="50" 
    viewBox="0 0 36 36" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible flex-shrink-0"
  >
    <rect width="36" height="36" rx="9" fill="#D3D7DF" />
    <path 
      d="M10 12L13.8 24L18 15L22.2 24L26 12" 
      stroke="#4F46E5" 
      strokeWidth="3.4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow Icon
export const ArrowCircleIcon = () => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 14 14" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible flex-shrink-0"
  >
    <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
