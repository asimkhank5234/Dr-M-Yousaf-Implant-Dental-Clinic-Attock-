export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  iconName: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  date: string;
}

export interface ClinicHours {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    description: string;
    value: string;
  }[];
}
