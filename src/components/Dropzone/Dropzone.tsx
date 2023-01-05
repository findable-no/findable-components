import React, { useCallback, useRef, useState } from 'react';
import { FileRejection as FileRectionType, useDropzone } from 'react-dropzone';
import { RiUploadCloudFill } from 'react-icons/ri';
import { Box, Card, Group, Text } from '@mantine/core';
import { useEventListener } from 'usehooks-ts';

import { MAX_FILE_SIZE, MIN_FILE_SIZE } from './config';
import { COLORS } from '../../styles';
import { DropzoneButton } from './UploadButton';
import { Overlay } from './Overlay';

export enum ErrorCode {
  FileInvalidType = 'file-invalid-type',
  FileTooLarge = 'file-too-large',
  FileTooSmall = 'file-too-small',
  TooManyFiles = 'too-many-files',
}

export type FileRejection = FileRectionType;

export interface DropzoneProps {
  label: string;
  buttonLabel: string;
  handleAccepted: (acceptedFiles: File[]) => void;
  handleRejected: (rejectedFiles: FileRejection[]) => void;
}

export const Dropzone = ({
  label,
  buttonLabel,
  handleAccepted,
  handleRejected,
}: DropzoneProps) => {
  const documentRef = useRef<Document>(document);
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    minSize: MIN_FILE_SIZE,
    maxSize: MAX_FILE_SIZE,
    onDropAccepted: (af: File[]) => {
      handleAccepted(af);
      handleDragDrop();
    },
    onDropRejected: (rf: FileRejection[]) => {
      handleRejected(rf);
      handleDragDrop();
    },
  });

  const [dragging, setDragging] = useState(false);

  const handleDragOver = useCallback(() => {
    if (dragging) return;
    setDragging(true);
  }, [dragging]);

  const handleDragDrop = () => {
    setDragging(false);
  };

  useEventListener('dragover', handleDragOver, documentRef);
  useEventListener('drop', handleDragDrop, documentRef);

  return (
    <Card
      {...getRootProps()}
      sx={{
        borderStyle: 'dashed',
        borderColor: COLORS.borders.input,
        transition: 'background 200ms',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: COLORS.backgrounds.bgSub,
      }}
      withBorder
    >
      <Overlay
        dragging={dragging}
        setDragging={setDragging}
        isDragActive={isDragActive}
      >
        <Box sx={{ textAlign: 'center' }}>
          <RiUploadCloudFill size={60} color="white" />
          <Text size="xl" color="white">
            {label}
          </Text>
        </Box>
      </Overlay>
      <input {...getInputProps()} />
      <Group
        position="center"
        sx={{ minHeight: 200, display: 'flex', flexDirection: 'column' }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: '#8388B7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RiUploadCloudFill size={18} color={COLORS.backgrounds.bgSub} />
        </Box>
        <Text size="lg" color={COLORS.dark}>
          {label}
        </Text>
        <DropzoneButton label={buttonLabel} onClick={open} />
      </Group>
    </Card>
  );
};
