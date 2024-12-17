import React from 'react';
import { X } from 'lucide-react';
import { FileListProps } from '../types';
import { FileListItem } from './FileListItem';

export const FileList = React.memo<FileListProps>(({ files, onRemove }) => {
  if (files.length === 0) return null;

  return (
    <ul className="mt-4 space-y-2">
      {files.map((file, index) => (
        <FileListItem
          key={`${file.name}-${index}`}
          file={file}
          onRemove={() => onRemove(index)}
        />
      ))}
    </ul>
  );
});