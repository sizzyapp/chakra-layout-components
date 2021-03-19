import React from 'react';
import { Box as OriginalBox, BoxProps } from '@chakra-ui/react';

interface IProps extends BoxProps {
  tr?: boolean | number;
  br?: number;
}

export const Box: React.FC<IProps> = ({ children, tr, br, ...props }) => (
  <OriginalBox
    {...{
      ...(br && { borderRadius: br }),
      ...(tr && { transition: 'all 100ms linear' }),
      ...props,
    }}
  >
    {children}
  </OriginalBox>
);
