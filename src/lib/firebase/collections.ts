import { collection } from 'firebase/firestore';
import { db } from './index';

// Collection References
export const usersCollection = collection(db, 'users');
export const financeApplicationsCollection = collection(db, 'finance_applications');
export const projectsCollection = collection(db, 'projects');
export const packageSubscriptionsCollection = collection(db, 'package_subscriptions');
export const contactMessagesCollection = collection(db, 'contact_messages');