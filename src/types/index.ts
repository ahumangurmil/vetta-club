export interface Campaign {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  imageType: 'paw' | 'clean' | 'plant' | 'feeding';
  targetAmount: number;
  raisedAmount: number;
  donorsCount: number;
  daysLeft: number;
  location: string;
  milestones: string[];
}

export interface Story {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  summary: string;
  fullStory: string[];
  quote: string;
  author: string;
  imageType: 'dog-rescue' | 'garden' | 'care-drive';
}

export interface WorkDomain {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  metrics: string;
  keyInitiatives: string[];
  imageType: 'animal-welfare' | 'environment' | 'community' | 'education';
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  yearsWithUs: string;
  initials: string;
}
