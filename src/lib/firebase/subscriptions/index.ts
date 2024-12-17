import { addDoc, updateDoc, getDocs, query, where } from 'firebase/firestore';
import { packageSubscriptionsCollection } from '../collections';
import { PackageSubscriptionSchema } from '../schema';

export const createSubscription = async (
  userId: string,
  packageId: string,
  packageType: PackageSubscriptionSchema['packageType'],
  paymentDetails: PackageSubscriptionSchema['paymentDetails']
) => {
  try {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1); // 1 month subscription

    const subscription = await addDoc(packageSubscriptionsCollection, {
      userId,
      packageId,
      packageType,
      status: 'active',
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      paymentDetails,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return { subscriptionId: subscription.id, error: null };
  } catch (error) {
    return { subscriptionId: null, error: error.message };
  }
};

export const getUserSubscriptions = async (userId: string) => {
  try {
    const q = query(packageSubscriptionsCollection, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const subscriptions = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return { subscriptions, error: null };
  } catch (error) {
    return { subscriptions: [], error: error.message };
  }
};