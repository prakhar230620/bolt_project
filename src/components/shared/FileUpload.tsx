import React, { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';

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
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-primary transition-colors duration-300"
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
        />
        <div className="flex flex-col items-center">
          <Upload className="h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Click or drag files to upload
          </p>
        </div>
      </div>
      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 p-2 rounded"
            >
              <span className="text-sm text-gray-600">{file.name}</span>
              <button
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FileUpload;