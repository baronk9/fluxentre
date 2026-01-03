import { NavItem, ServiceItem, ProcessItem, StatItem, FeatureItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: 'Brand Identity',
    description: 'We craft memorable logos, packaging, and visual identities that stand out in a crowded market.',
    actionText: 'Learn More',
    color: 'bg-[#F3EFFF]',
  },
  {
    title: 'Store Development',
    description: 'High-performance e-commerce stores (Shopify/WooCommerce) designed for speed and conversion.',
    actionText: 'Learn More',
    color: 'bg-[#E6F7FF]',
  },
  {
    title: 'Growth & Scaling',
    description: 'Data-driven ad campaigns (FB, TikTok, Google) to take your sales from zero to six figures.',
    actionText: 'Learn More',
    color: 'bg-[#FDFGCC]',
  },
];

export const PROCESS_ITEMS: ProcessItem[] = [
  {
    number: '01',
    title: 'Market Analysis',
    description: 'We analyze trends and competitors to find the winning gap in the market for your product.',
  },
  {
    number: '02',
    title: 'The Launch',
    description: 'We build the infrastructure, set up the logistics, and launch with high-impact marketing campaigns.',
  },
  {
    number: '03',
    title: 'Scale & Automate',
    description: 'Once profitable, we optimize operations and scale ads to maximize your monthly revenue.',
  },
];

export const FEATURE_ITEMS: FeatureItem[] = [
  { text: 'Real-time Sales Tracking' },
  { text: 'Inventory Management Solutions' },
  { text: 'Customer Retention Strategies' },
];

export const STAT_ITEMS: StatItem[] = [
  { 
    value: '10M+', 
    label: 'Revenue Generated',
    description: 'We optimize every step of the customer journey to maximize conversion value for our clients.'
  },
  { 
    value: '50+', 
    label: 'Brands Launched',
    description: 'From concept to market, we have successfully deployed high-converting brands across 10+ industries.'
  },
  { 
    value: '300%', 
    label: 'Average ROI',
    description: 'Our data-driven advertising strategies ensure you get the highest possible return on every dollar spent.'
  },
];