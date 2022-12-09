import React, { forwardRef } from 'react';
import { Box, Group, Badge, Text } from '@mantine/core';
import { ItemProps } from './Dropdown';

export const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  (
    { label, description, labelHeader, suggestionTxt, ...others }: ItemProps,
    ref
  ) => {
    return (
      <Box ref={ref} {...others}>
        <Group noWrap position="apart">
          <Box>
            {labelHeader && (
              <Badge
                radius="xs"
                size="xs"
                color="dark"
                sx={{ marginBottom: 8 }}
              >
                {labelHeader}
              </Badge>
            )}
            <Text>{label}</Text>
            {description && (
              <Text size="xs" weight="light">
                {description}
              </Text>
            )}
          </Box>
          {suggestionTxt && (
            <Badge radius="xs" sx={{ flexShrink: 0 }}>
              {suggestionTxt}
            </Badge>
          )}
        </Group>
      </Box>
    );
  }
);
