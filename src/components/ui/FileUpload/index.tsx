import React, { useRef, useState } from 'react';
import DropZone from './DropZone';
import FileList from './FileList';

interface FileUploadProps {
  label: string;
  accept?: string;
  multiple?: boolean;
  onChange: (files: FileList | null) => void;
  error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept,
  multiple,
  onChange,
  error,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
      onChange(e.target.files);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    
    const dt = new DataTransfer();
    newFiles.forEach(file => dt.items.add(file));
    onChange(dt.files);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
      />
      <DropZone onClick={() => inputRef.current?.click()} />
      <FileList files={files} onRemove={removeFile} />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FileUpload;