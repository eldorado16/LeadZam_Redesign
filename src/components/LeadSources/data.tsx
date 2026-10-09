import { ReactNode } from 'react';
import {
  MetaIcon,
  WhatsAppIcon,
  GoogleAdsIcon,
  LeadZamIcon,
  WebsiteIcon,
} from './icons';

export interface LeadSource {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  isPopular?: boolean;
}

export const leadSourcesData: LeadSource[] = [
  {
    id: 'meta',
    title: 'Meta Leads Ads',
    description: 'Instant Forms sync straight into LeadZam.',
    icon: <MetaIcon />,
    isPopular: true,
  },
  {
    id: 'whatsapp',
    title: 'Click-to-WhatsApp',
    description: 'Chat leads, with the conversation intact.',
    icon: <WhatsAppIcon />,
    isPopular: false,
  },
  {
    id: 'google',
    title: 'Google Ads',
    description: 'Lead Forms and Landing Pages.',
    icon: <GoogleAdsIcon />,
    isPopular: true,
  },
  {
    id: 'leadzam',
    title: 'LeadZam Forms',
    description: 'Multi-step forms on your own site.',
    icon: <LeadZamIcon />,
    isPopular: true,
  },
  {
    id: 'website',
    title: 'Website and CSV',
    description: 'Embeds, manual entry, bulk upload.',
    icon: <WebsiteIcon />,
    isPopular: false,
  },
];
