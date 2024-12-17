import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './config';

export const saveProperty = async (propertyData: any) => {
  try {
    // Upload images
    const imageUrls = await Promise.all(
      Array.from(propertyData.images).map(async (image: File) => {
        const storageRef = ref(storage, `properties/${Date.now()}-${image.name}`);
        await uploadBytes(storageRef, image);
        return getDownloadURL(storageRef);
      })
    );

    // Upload video if exists
    let videoUrl = null;
    if (propertyData.video?.length > 0) {
      const videoRef = ref(storage, `properties/videos/${Date.now()}-${propertyData.video[0].name}`);
      await uploadBytes(videoRef, propertyData.video[0]);
      videoUrl = await getDownloadURL(videoRef);
    }

    // Save property data to Firestore
    const docRef = await addDoc(collection(db, 'properties'), {
      ...propertyData,
      images: imageUrls,
      video: videoUrl,
      createdAt: new Date().toISOString(),
    });

    return { id: docRef.id, success: true };
  } catch (error) {
    console.error('Error saving property:', error);
    throw error;
  }
};

export const getUserProperties = async (userId: string) => {
  try {
    const q = query(collection(db, 'properties'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching user properties:', error);
    throw error;
  }
};