import { Box as OriginalBox } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { fixedHeight, fixedWidth } from 'styled-mixins';
import { motion } from 'framer-motion';
import { CommonProps } from './types';
import { getHorizontalProps, getVerticalProps } from './props';
import React, { forwardRef } from 'react';

const spaceUnit = 1;

export const Space = styled.div<{ size: number }>(({ size = 1 }) => ({
  ...fixedHeight(spaceUnit * size),
  ...fixedWidth(spaceUnit * size),
}));

const HorizontalSC = styled(OriginalBox)<CommonProps>(getHorizontalProps);

const VerticalSC = styled(OriginalBox)<CommonProps>(getVerticalProps);

export const Horizontal: React.FC<CommonProps> = forwardRef((props, ref) => (
  <HorizontalSC {...props} ref={ref} />
));

export const Vertical: React.FC<CommonProps> = forwardRef((props, ref) => (
  <VerticalSC {...props} ref={ref} />
));

export const MHorizontal = motion(Horizontal);

export const MVertical = motion(Vertical);
