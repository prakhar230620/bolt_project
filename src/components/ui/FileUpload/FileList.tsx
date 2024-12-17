import React from 'react';
import { X } from 'lucide-react';

interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
}

const FileList: React.FC<FileListProps> = ({ files, onRemove }) => {
  if (files.length === 0) return null;

  return (
    <ul className="mt-4 space-y-2">
      {files.map((file, index) => (
        <li
          key={index}
          className="flex items-center justify-between bg-gray-50 p-2 rounded"
        >
          <span className="text-sm text-gray-600">{file.name}</span>
          <button
            onClick={() => onRemove(index)}
            className="text-red-500 hover:text-red-700 transition-colors duration-300"
            aria-label={`Remove ${file.name}`}
          >
            <X className="h-4 w-4" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FileList;