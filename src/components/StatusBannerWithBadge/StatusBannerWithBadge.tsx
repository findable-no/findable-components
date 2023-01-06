import { Box, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { FiUploadCloud, FiCheck } from 'react-icons/fi';

import { AutosortBot } from '../../icons/AutosortBot';
import { AutosortBotWink } from '../../icons/AutosortBotWink';
import { Questionmark } from '../../icons/Questionmark';
import { StatusBadge } from './StatusBadge';
import { Status, StatusMap } from './types';

export interface StatusBannerWithBadgeProps {
  title: string;
  status: Status;
  children: React.ReactNode;
}

export const statusMap: StatusMap = {
  empty: {
    badgeColor: '#4B4BFF',
    boxShadow: '0px 0px 0px 1px #4B4BFF, 0px 3px 0px #4B4BFF',
    Icon: FiUploadCloud,
  },
  inprogress: {
    badgeColor: '#B6B6FF',
    boxShadow: '0px 3px 0px #B6B6FF',
    border: ' 1px solid #BBB6FF',
    Icon: () => <AutosortBot />,
    IconVariant: () => <AutosortBotWink />,
  },
  incomplete: {
    badgeColor: 'transparent',
    boxShadow: '0px 0px 0px 1px #E6A885, 0px 3px 0px #E6A885',
    Icon: () => <Questionmark />,
  },

  done: {
    badgeColor: '#2EA66D',
    boxShadow: '0px 0px 0px 2px #2EA66D, 0px 4px 0px #2EA66D',
    Icon: FiCheck,
  },
};

export const StatusBannerWithBadge = ({
  title,
  status,
  children,
}: StatusBannerWithBadgeProps) => {
  const { badgeColor, boxShadow, Icon, IconVariant, border } = statusMap[
    status
  ];
  const IconV = IconVariant ?? Icon;
  const [wink, setWink] = useState(false);

  useEffect(() => {
    if (status !== 'inprogress') return;
    const interval = setInterval(() => {
      setWink(!wink);
    }, 1337);

    return () => clearInterval(interval);
  }, [wink, status]);

  useEffect(() => {
    if (status !== 'inprogress') return;
    if (!wink) return;

    const timer = setTimeout(() => {
      setWink(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [wink, status]);

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        boxShadow,
        border,
        background: '#FFFFFF',
        padding: 16,
        borderRadius: 8,
        display: 'flex',
      }}
    >
      <StatusBadge status={status} badgeColor={badgeColor}>
        {wink ? <IconV size={26} /> : <Icon size={26} />}
      </StatusBadge>
      <Box sx={{ marginLeft: 24 }}>
        <Text size="lg" weight={600}>
          {title}
        </Text>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};
