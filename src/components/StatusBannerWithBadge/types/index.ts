import { IconType } from 'react-icons/lib';

export type Status = 'empty' | 'inprogress' | 'incomplete' | 'done';

export type StatusMap = Record<
  Status,
  {
    badgeColor: string;
    boxShadow: string;
    border?: string;
    Icon: IconType | React.FunctionComponent;
    IconVariant?: React.FunctionComponent;
  }
>;

export type StatusBadgeMap = Record<
  Status,
  {
    iconColor: string;
    border?: string;
  }
>;
