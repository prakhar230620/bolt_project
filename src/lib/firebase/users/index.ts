import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config';
import { UserSchema } from '../schema';

export const createUserProfile = async (uid: string, data: Partial<UserSchema>) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userData: UserSchema = {
      uid,
      email: data.email!,
      displayName: data.displayName!,
      photoURL: data.photoURL || '',
      bio: '',
      company: '',
      location: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await setDoc(userRef, userData);
    return { profile: userData, error: null };
  } catch (error) {
    return { profile: null, error: error.message };
  }
};

export const updateUserProfile = async (uid: string, data: Partial<UserSchema>) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      ...data,
      updatedAt: new Date().toISOString(),
    });
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

export const uploadProfilePhoto = async (uid: string, file: File) => {
  try {
    const storageRef = ref(storage, `users/${uid}/profile-photo`);
    await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(storageRef);
    await updateUserProfile(uid, { photoURL });
    return { photoURL, error: null };
  } catch (error) {
    return { photoURL: null, error: error.message };
  }
};