import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../lib/firebase/config';
import * as authService from '../lib/firebase/auth';

export const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const result = await authService.signIn(email, password);
    setLoading(false);
    return result;
  };

  const signUp = async (email: string, password: string, displayName: string) => {
    setLoading(true);
    const result = await authService.signUp(email, password, displayName);
    setLoading(false);
    return result;
  };

  const signOut = async () => {
    setLoading(true);
    const result = await authService.signOut();
    setLoading(false);
    return result;
  };

  const resetPassword = async (email: string) => {
    setLoading(true);
    const result = await authService.resetPassword(email);
    setLoading(false);
    return result;
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    const result = await authService.signInWithGoogle();
    setLoading(false);
    return result;
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    signInWithGoogle,
  };
};