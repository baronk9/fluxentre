import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  actionText: string;
  color: string; // Tailwind bg class or arbitrary value
  icon?: LucideIcon;
}

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface FeatureItem {
  text: string;
}