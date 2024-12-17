 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import Input from '../ui/Input';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';

const LoginForm = () => {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle, loading } = useFirebaseAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await signIn(formData.email, formData.password);
    if (error) {
      setError('Invalid email or password');
    } else {
      navigate('/profile');
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await signInWithGoogle();
    if (error) {
      setError('Google sign in failed');
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded">
            <AlertCircle className="h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          icon={Mail}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          icon={Lock}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors duration-300"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;