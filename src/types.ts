import { CSSProperties, Ref } from 'react';
import { CSSObject } from '@emotion/styled';
import { BoxProps } from '@chakra-ui/react';

export interface CommonProps extends BoxProps {
  wrap?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  justifyEnd?: boolean;
  justifyStart?: boolean;
  flex?: CSSObject['flex'] & BoxProps['flex'];
  spaceFirst?: number;
  spacing?: number | string;
  spaceBottom?: boolean;
  alignStart?: boolean;
  alignItemsStart?: boolean;
  center?: boolean;
  centerV?: boolean;
  centerH?: boolean;
  noShrink?: boolean;
  styles?: CSSProperties;
  invert?: boolean;
  reverse?: boolean;
  fullW?: boolean;
  fullH?: boolean;
  debug?: boolean;
  ref?: Ref<HTMLDivElement>;
}

export enum margin {
  horizontal = 'marginRight',
  vertical = 'marginBottom',
  left = 'marginLeft',
  top = 'marginTop',
}
