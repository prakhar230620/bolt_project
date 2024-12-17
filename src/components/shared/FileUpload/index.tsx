import React from 'react';
import { FileUploadProps } from './types';
import { DropZone } from './components/DropZone';
import { FileList } from './components/FileList';
import { useFileUpload } from './hooks/useFileUpload';

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ label, accept, multiple, onChange, error }, ref) => {
    const { files, handleFileChange, removeFile, openFileDialog } = useFileUpload(onChange);

    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          ref={ref}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
        />
        <DropZone onClick={openFileDialog} />
        <FileList files={files} onRemove={removeFile} />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';

export default FileUpload;