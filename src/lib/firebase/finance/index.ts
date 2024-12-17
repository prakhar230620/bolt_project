import { addDoc, updateDoc, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { financeApplicationsCollection } from '../collections';
import { storage } from '../config';
import { FinanceApplicationSchema } from '../schema';

export const submitFinanceApplication = async (
  userId: string,
  data: Omit<FinanceApplicationSchema, 'id' | 'userId' | 'status' | 'createdAt' | 'updatedAt'>,
  files: { [key: string]: File }
) => {
  try {
    // Upload documents
    const uploadPromises = Object.entries(files).map(async ([key, file]) => {
      const storageRef = ref(storage, `finance-applications/${userId}/${key}`);
      await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
    });

    const uploadedUrls = await Promise.all(uploadPromises);
    const documents = Object.keys(files).reduce((acc, key, index) => ({
      ...acc,
      [key]: uploadedUrls[index]
    }), {});

    // Create application
    const application = await addDoc(financeApplicationsCollection, {
      ...data,
      userId,
      status: 'pending',
      documents,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return { applicationId: application.id, error: null };
  } catch (error) {
    return { applicationId: null, error: error.message };
  }
};

export const getUserApplications = async (userId: string) => {
  try {
    const q = query(financeApplicationsCollection, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const applications = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return { applications, error: null };
  } catch (error) {
    return { applications: [], error: error.message };
  }
};