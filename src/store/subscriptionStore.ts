import { create } from 'zustand';
import { SubscriptionPlan } from '../types/services';

interface SubscriptionState {
  currentSubscription: SubscriptionPlan | null;
  expiryDate: string | null;
  setSubscription: (plan: SubscriptionPlan, expiryDate: string) => void;
  clearSubscription: () => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  currentSubscription: null,
  expiryDate: null,
  setSubscription: (plan, expiryDate) => set({ currentSubscription: plan, expiryDate }),
  clearSubscription: () => set({ currentSubscription: null, expiryDate: null }),
}));