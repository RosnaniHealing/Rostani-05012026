
export enum Department {
  Mind = 'Mind & Wisdom',
  Energy = 'Energy & Soul',
  Body = 'Body & Biology',
  Movement = 'Movement & Breath',
  Environment = 'Environment'
}

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AcademyDept {
  name: string;
  sub: string;
  description: string;
  icon: string;
}
