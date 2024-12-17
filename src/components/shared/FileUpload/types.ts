export interface FileUploadProps {
  label: string;
  accept?: string;
  multiple?: boolean;
  onChange: (files: FileList | null) => void;
  error?: string;
}

export interface DropZoneProps {
  onClick: () => void;
}

export interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
}