import { SubscriptionPlan } from '../types/services';

export const smartPackagePlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    title: 'Basic',
    price: 999,
    duration: 'month',
    features: [
      { text: 'Basic website design', included: true },
      { text: 'Social media integration', included: true },
      { text: 'Email support', included: true },
      { text: 'Custom domain', included: false },
      { text: 'SEO optimization', included: false },
    ],
  },
  {
    id: 'plus',
    title: 'Plus',
    price: 1999,
    duration: 'month',
    features: [
      { text: 'Advanced website design', included: true },
      { text: 'Social media integration', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Custom domain', included: true },
      { text: 'SEO optimization', included: false },
    ],
  },
  {
    id: 'pro',
    title: 'Pro',
    price: 4999,
    duration: 'month',
    features: [
      { text: 'Premium website design', included: true },
      { text: 'Social media integration', included: true },
      { text: '24/7 support', included: true },
      { text: 'Custom domain', included: true },
      { text: 'SEO optimization', included: true },
    ],
  },
];

export const brandPromotionPlans: SubscriptionPlan[] = [
  {
    id: 'starter',
    title: 'Starter',
    price: 2999,
    duration: 'month',
    features: [
      { text: 'Social media management', included: true },
      { text: 'Content creation', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Brand strategy', included: false },
      { text: 'Influencer marketing', included: false },
    ],
  },
  {
    id: 'growth',
    title: 'Growth',
    price: 5999,
    duration: 'month',
    features: [
      { text: 'Social media management', included: true },
      { text: 'Content creation', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Brand strategy', included: true },
      { text: 'Influencer marketing', included: false },
    ],
  },
  {
    id: 'premium',
    title: 'Premium',
    price: 9999,
    duration: 'month',
    features: [
      { text: 'Social media management', included: true },
      { text: 'Content creation', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Brand strategy', included: true },
      { text: 'Influencer marketing', included: true },
    ],
  },
];