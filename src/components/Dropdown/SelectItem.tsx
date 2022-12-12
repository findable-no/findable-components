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
            {labelHeader && <Text sx={{ fontSize: 11 }}>{labelHeader}</Text>}
            <Text size="md">{label}</Text>
            {description && (
              <Text size="xs" weight="light" sx={{ fontSize: 14 }}>
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
