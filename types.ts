import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; // For bento grid layout (1, 2, or 3)
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}
