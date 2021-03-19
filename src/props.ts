import { CommonProps } from './types';
import flex from './flex';
import { common } from './common';
import { CSSObject } from '@emotion/styled';

const horizontalProps = (props: CommonProps): CSSObject => {
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

const verticalProps = (props: CommonProps): CSSObject => {
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

export const getHorizontalProps = ({
  invert = false,
  ...rest
}: CommonProps): CSSObject => {
  return invert === false ? horizontalProps(rest) : verticalProps(rest);
};

export const getVerticalProps = ({
  invert = false,
  ...rest
}: CommonProps): CSSObject => {
  return invert === false ? verticalProps(rest) : horizontalProps(rest);
};
