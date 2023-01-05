import React from 'react';
import { Meta, Story } from '@storybook/react';

import {
  StatusBannerWithBadgeProps,
  StatusBannerWithBadge,
} from './StatusBannerWithBadge';
import { Box, Button } from '@mantine/core';
import { FileRejection, UploadButton } from '../Dropzone';

export default {
  title: 'StatusBannerWithBadge',
  argTypes: {
    status: {
      options: ['empty', 'inprogress', 'incomplete', 'done'],
      control: { type: 'select' },
    },
  },
} as Meta;

const statusMapStories = {
  empty: {
    title: 'Last opp dokumentasjonen',
    children: (
      <div>Har du mange filer? Pakk dem sammen og last opp som en zip.</div>
    ),
  },
  inprogress: {
    title: 'Automatisk sortering pågår',
    children: (
      <div>
        10 minutter gjenstår. Du får en epost når vi er ferdig. Vil du ikke
        vente? Du kan også se gjennom manuelt.
      </div>
    ),
  },
  incomplete: {
    title: 'Fyll ut det som mangler',
    children: (
      <div>
        <ul>
          <li>Klikk gjennom filene under </li>
          <li>Sjekk at de er sortert riktig. </li>
          <li>Send inn når alt er klart. </li>
        </ul>
      </div>
    ),
  },
  done: {
    title: 'Alt klart!',
    children: (
      <div>
        <p>Navnpåtotalentreprenør får automatisk beskjed.</p>
        <i>Du kan laste opp flere filer under hvis du trenger det.</i>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Button sx={{ marginRight: 8, marginBottom: 8 }}>
            Jeg er ferdig
          </Button>
          <Box sx={{ marginBottom: 8 }}>
            <UploadButton
              label="Select files"
              handleAccepted={function(acceptedFiles: File[]): void {
                console.log({ acceptedFiles });
              }}
              handleRejected={function(rejectedFiles: FileRejection[]): void {
                console.log({ rejectedFiles });
              }}
            />
          </Box>
        </div>
      </div>
    ),
  },
};

const StatusBannerWithBadgeTemplate = (props: StatusBannerWithBadgeProps) => {
  const { children, title } = statusMapStories[props.status];
  return (
    <StatusBannerWithBadge {...props} title={title}>
      {children}
    </StatusBannerWithBadge>
  );
};

export const StatusBannerWithBadgeComponent: Story<StatusBannerWithBadgeProps> = StatusBannerWithBadgeTemplate.bind(
  {}
);

StatusBannerWithBadgeComponent.args = {
  status: 'empty',
};
