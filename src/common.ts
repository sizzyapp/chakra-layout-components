import { CommonProps, margin } from './types';
import { allChildrenSelector, getOppositeDirection, px } from './utils';
import flex from './flex';
import { CSSObject } from '@emotion/styled';

export const common = (
  direction: 'horizontal' | 'vertical' | 'left' | 'top',
  reverse?: boolean
) => (p: CommonProps): CSSObject => {
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
