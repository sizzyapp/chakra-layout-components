import { Box as OriginalBox, BoxProps } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import flex from './flex';
import { fixedHeight, fixedWidth } from 'styled-mixins';
import { motion } from 'framer-motion';

export interface CommonProps {
  wrap?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
  justifyEnd?: boolean;
  justifyStart?: boolean;
  flex?: BoxProps['flex'];
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
}

enum margin {
  horizontal = 'marginRight',
  vertical = 'marginBottom',
  left = 'marginLeft',
  top = 'marginTop',
}

export const Box: React.FC<{
  tr?: boolean | number;
  br?: number;
}> = ({ children, tr, br, ...props }) => (
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

// fsdf

const px = (a: string | number) =>
  a?.toString()?.includes?.('px') ? a : `${a}px`;

const getOppositeDirection = (dir: string) =>
  dir === 'horizontal' ? 'left' : 'top';

const allChildrenSelector: string = '& > *';

// @ts-ignore
export const common = (
  direction: 'horizontal' | 'vertical' | 'left' | 'top',
  reverse?: boolean
) => (p: CommonProps): any => {
  direction = reverse === true ? getOppositeDirection(direction) : direction;
  return {
    ...(!!p.spaceBetween && flex.spaceBetween),
    ...(!!p.wrap && flex.wrap),
    ...(!!p.spaceAround && flex.spaceAround),
    ...(!!p.justifyEnd && flex.justifyEnd),
    ...(!!p.justifyStart && flex.justifyStart),
    ...(!!p.alignStart && flex.alignStart),
    ...(!!p.alignItemsStart && flex.alignItemsStart),
    ...(!!p.flex && { flex: p.flex }),
    ...(!!p.debug && { border: '1px solid purple' }),

    ...(!!p.spaceFirst && {
      '&:first-child': {
        [margin[direction]]: `${px(p.spaceFirst)} !important`,
      },
    }),
    ...(!!p.spacing
      ? {
          [allChildrenSelector]: {
            [margin[direction]]: `${px(p.spacing)} !important`,
            ...(p.spaceBottom
              ? {
                  marginBottom: `${px(p.spacing)} !important`,
                }
              : {}),
          },
          '& > :last-child': {
            [margin[direction]]: `0 !important`,
            ...(p.spaceBottom ? { marginBottom: `0 !important` } : {}),
          },
        }
      : {}),

    ...(!!p.noShrink
      ? {
          flexShrink: 0,
        }
      : {}),
    ...(!!p.fullW && { width: '100%' }),
    ...(!!p.fullH && { height: '100%' }),
    ...p.styles,
  };
};

const horizontalProps = (props: CommonProps): Record<string, any> => {
  const { center, centerV, reverse, centerH } = props;
  return {
    ...flex.horizontal,
    ...(reverse && flex.horizontalReverse),
    ...(center && flex.centerHorizontal),
    ...(centerV && flex.centerHorizontalV),
    ...(centerH && flex.centerHorizontalH),
    ...common('horizontal', reverse)(props),
  };
};

const verticalProps = (props: CommonProps): Record<string, any> => {
  const { center, reverse, centerV, centerH } = props;
  return {
    ...flex.vertical,
    ...(reverse && flex.verticalReverse),
    ...(center && flex.centerVertical),
    ...(centerV && flex.centerVerticalV),
    ...(centerH && flex.centerVerticalH),
    ...common('vertical', reverse)(props),
  };
};

const getHorizontalProps = ({
  invert = false,
  ...rest
}): Record<string, any> => {
  return invert === false ? horizontalProps(rest) : verticalProps(rest);
};

const getVerticalProps = ({ invert = false, ...rest }): Record<string, any> => {
  return invert === false ? verticalProps(rest) : horizontalProps(rest);
};

const spaceUnit = 1;

export const Space = styled.div<{ size: number }>(({ size = 1 }) => ({
  ...fixedHeight(spaceUnit * size),
  ...fixedWidth(spaceUnit * size),
}));

export const Horizontal = styled(OriginalBox)<CommonProps>(getHorizontalProps);

export const Vertical = styled(OriginalBox)<CommonProps>(getVerticalProps);

export const MHorizontal = motion(Horizontal);

export const MVertical = motion(Vertical);

export { flex };
