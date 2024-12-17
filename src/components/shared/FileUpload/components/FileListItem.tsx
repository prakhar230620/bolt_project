import React from 'react';
import { X } from 'lucide-react';

interface FileListItemProps {
  file: File;
  onRemove: () => void;
}

export const FileListItem = React.memo<FileListItemProps>(({ file, onRemove }) => (
  <li className="flex items-center justify-between bg-gray-50 p-2 rounded">
    <span className="text-sm text-gray-600">{file.name}</span>
    <button
      onClick={onRemove}
      className="text-red-500 hover:text-red-700 transition-colors duration-300"
      aria-label={`Remove ${file.name}`}
    >
      <X className="h-4 w-4" />
    </button>
  </li>
));