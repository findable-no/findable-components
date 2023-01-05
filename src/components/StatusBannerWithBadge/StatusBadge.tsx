import React from 'react';
import { Box } from '@mantine/core';
import { keyframes } from '@mantine/core';

import { AiOutlineLoading } from 'react-icons/ai';

import { Status, StatusBadgeMap } from './types';

interface StatusBadgeProps {
  badgeColor: string;
  status: Status;
  children: React.ReactNode;
}

const statusBadgeMap: StatusBadgeMap = {
  empty: {
    iconColor: '#FFFFFF',
  },
  inprogress: {
    iconColor: '#F0F0F0',
  },
  incomplete: {
    iconColor: '#F0F0F0',
    border: ' 4.44444px dashed #E6A885',
  },
  done: {
    iconColor: '#F0F0F0',
  },
};

export const StatusBadge = ({
  status,
  badgeColor,
  children,
}: StatusBadgeProps) => {
  const { iconColor, border } = statusBadgeMap[status];
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        borderRadius: '50%',
        border,
        height: 64,
        width: 64,
        background: badgeColor,
        color: iconColor,
      }}
    >
      {children}
      {status === 'inprogress' && (
        <Box
          sx={{
            position: 'absolute',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: `${keyframes({
              from: { transform: 'rotate(0deg)' },
              to: { transform: 'rotate(360deg)' },
            })} 400ms linear infinite`,
            height: 50,
            width: 50,
          }}
        >
          <AiOutlineLoading size={64} color="#3F4CB9" />
        </Box>
      )}
    </Box>
  );
};
