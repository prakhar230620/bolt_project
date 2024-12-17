import { useState, useCallback } from 'react';

export const useFileUpload = (onChange: (files: FileList | null) => void) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
      onChange(e.target.files);
    }
  }, [onChange]);

  const removeFile = useCallback((index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    
    const dt = new DataTransfer();
    newFiles.forEach(file => dt.items.add(file));
    onChange(dt.files);
  }, [files, onChange]);

  const openFileDialog = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange = (e) => handleFileChange(e as React.ChangeEvent<HTMLInputElement>);
  }, [handleFileChange]);

  return {
    files,
    handleFileChange,
    removeFile,
    openFileDialog,
  };
};