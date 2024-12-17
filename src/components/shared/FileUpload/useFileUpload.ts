import { useState, useRef } from 'react';

export const useFileUpload = (onChange: (files: FileList | null) => void) => {
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

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return {
    files,
    inputRef,
    handleFileChange,
    removeFile,
    openFileDialog,
  };
};

export default useFileUpload;