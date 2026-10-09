export type ProjectCategory = 
  | 'All' 
  | 'Branding' 
  | 'Social Media' 
  | 'Posters' 
  | 'Thumbnails' 
  | 'UI Design';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'Branding' | 'Social Media' | 'Posters' | 'Thumbnails' | 'UI Design';
  secondaryCategory?: 'Branding' | 'Social Media' | 'Posters' | 'Thumbnails' | 'UI Design';
  shortDescription?: string;
  year?: string;
  client?: string;
  brief?: string;
  process?: string;
  result?: string;
  tools?: string[];
  image: string;
  galleryImages?: {
    url: string;
    caption: string;
  }[];
  cardSize?: 'tall' | 'wide' | 'square' | 'accent';
  aspectRatioClass?: string;
  objectFit?: 'cover' | 'contain';
  colorPalette?: string[];
  liveUrl?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tag: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ToolCategory {
  category: string;
  items: {
    name: string;
    level: string;
    note: string;
  }[];
}
