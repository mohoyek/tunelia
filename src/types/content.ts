export interface Service {
  id: number;
  num: string;
  title: string;
  description: string;
  tags: string[];
  iconKey: 'network' | 'accounting' | 'server' | 'security' | 'backup' | 'support' | 'sharing' | 'maintenance' | 'web';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  iconKey: 'office' | 'store' | 'factory' | 'clinic';
}

export interface WhyItem {
  id: number;
  title: string;
  description: string;
  iconKey: 'clock' | 'shield' | 'tools' | 'certificate';
}
