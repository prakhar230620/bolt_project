import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config';
import { ProjectSchema } from '../schema';

// Create new project
export const createProject = async (data: Omit<ProjectSchema, 'id' | 'createdAt' | 'updatedAt'>, imageFiles: File[]) => {
  try {
    // Upload images
    const imageUploadPromises = imageFiles.map(async (file) => {
      const storageRef = ref(storage, `projects/${Date.now()}-${file.name}`);
      await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
    });

    const imageUrls = await Promise.all(imageUploadPromises);

    // Create project document
    const projectData = {
      ...data,
      images: imageUrls,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, 'projects'), projectData);
    return { id: docRef.id, ...projectData };
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

// Update existing project
export const updateProject = async (
  projectId: string, 
  data: Partial<ProjectSchema>,
  newImageFiles?: File[]
) => {
  try {
    let imageUrls = data.images || [];

    // Upload new images if provided
    if (newImageFiles?.length) {
      const newImageUploadPromises = newImageFiles.map(async (file) => {
        const storageRef = ref(storage, `projects/${Date.now()}-${file.name}`);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
      });

      const newImageUrls = await Promise.all(newImageUploadPromises);
      imageUrls = [...imageUrls, ...newImageUrls];
    }

    const updateData = {
      ...data,
      images: imageUrls,
      updatedAt: new Date().toISOString(),
    };

    await updateDoc(doc(db, 'projects', projectId), updateData);
    return { id: projectId, ...updateData };
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

// Delete project
export const deleteProject = async (projectId: string) => {
  try {
    await deleteDoc(doc(db, 'projects', projectId));
    return { success: true };
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

// Get projects by type
export const getProjectsByType = async (type: ProjectSchema['type']) => {
  try {
    const q = query(collection(db, 'projects'), where('type', '==', type));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ProjectSchema[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

// Get single project
export const getProject = async (projectId: string) => {
  try {
    const docSnap = await getDoc(doc(db, 'projects', projectId));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as ProjectSchema;
    }
    throw new Error('Project not found');
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}; 