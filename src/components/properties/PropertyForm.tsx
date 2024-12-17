import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import Input from '../ui/Input';
import { useAuth } from '../../hooks/useAuth';
import { saveProperty } from '../../lib/firebase/properties';

const PropertyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const onSubmit = async (data: any) => {
    if (!user) return;
    
    setIsSubmitting(true);
    try {
      const propertyData = {
        ...data,
        userId: user.uid,
        createdAt: new Date().toISOString(),
        status: 'pending'
      };

      await saveProperty(propertyData);
      navigate('/profile', { 
        state: { message: 'Property listed successfully!' }
      });
    } catch (error) {
      console.error('Failed to list property:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          {...register('fullName', { required: 'Full name is required' })}
          error={errors.fullName?.message as string}
        />
        <Input
          label="Email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          error={errors.email?.message as string}
        />
      </div>

      <Input
        label="Phone Number"
        {...register('phone', { required: 'Phone number is required' })}
        error={errors.phone?.message as string}
      />

      <Input
        label="Property Address"
        {...register('address', { required: 'Address is required' })}
        error={errors.address?.message as string}
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Property Description
        </label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message as string}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Property Images (2 required)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <input
            type="file"
            accept="image/*"
            multiple
            {...register('images', { required: 'Images are required' })}
            className="hidden"
            id="images"
          />
          <label
            htmlFor="images"
            className="flex flex-col items-center cursor-pointer"
          >
            <Upload className="h-12 w-12 text-gray-400" />
            <span className="mt-2 text-sm text-gray-600">
              Click to upload images
            </span>
          </label>
        </div>
        {errors.images && (
          <p className="text-red-500 text-sm">{errors.images.message as string}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Property Video (30 seconds max)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <input
            type="file"
            accept="video/*"
            {...register('video')}
            className="hidden"
            id="video"
          />
          <label
            htmlFor="video"
            className="flex flex-col items-center cursor-pointer"
          >
            <Upload className="h-12 w-12 text-gray-400" />
            <span className="mt-2 text-sm text-gray-600">
              Click to upload video
            </span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'List Property'}
      </button>
    </form>
  );
};

export default PropertyForm;