import React from 'react';
import { Upload } from 'lucide-react';
import { DropZoneProps } from '../types';

export const DropZone = React.memo<DropZoneProps>(({ onClick }) => {
  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-primary transition-colors duration-300"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="flex flex-col items-center">
        <Upload className="h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Click or drag files to upload
        </p>
      </div>
    </div>
  );
});