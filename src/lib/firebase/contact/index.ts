import { addDoc } from 'firebase/firestore';
import { contactMessagesCollection } from '../collections';
import { ContactMessageSchema } from '../schema';

export const submitContactMessage = async (
  data: Omit<ContactMessageSchema, 'id' | 'status' | 'createdAt' | 'updatedAt'>
) => {
  try {
    const message = await addDoc(contactMessagesCollection, {
      ...data,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return { messageId: message.id, error: null };
  } catch (error) {
    return { messageId: null, error: error.message };
  }
};