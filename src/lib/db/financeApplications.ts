import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, collections } from '../firebase';
import { FinanceFormData } from '../../components/services/smart-finance/FinanceForm/types';

export const saveFinanceApplication = async (
  data: FinanceFormData,
  files: {
    photo?: File;
    aadharFront?: File;
    aadharBack?: File;
    panCard?: File;
  }
) => {
  try {
    // Upload files first
    const uploadPromises = Object.entries(files).map(async ([key, file]) => {
      if (!file) return null;
      const storageRef = ref(storage, `finance-applications/${data.aadhar}/${key}`);
      await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
    });

    const uploadedUrls = await Promise.all(uploadPromises);
    const fileUrls = Object.keys(files).reduce((acc, key, index) => ({
      ...acc,
      [key]: uploadedUrls[index]
    }), {});

    // Save application data with file URLs
    const docRef = await addDoc(collection(db, collections.financeApplications), {
      ...data,
      files: fileUrls,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });

    return docRef.id;
  } catch (error) {
    console.error('Error saving finance application:', error);
    throw error;
  }
};