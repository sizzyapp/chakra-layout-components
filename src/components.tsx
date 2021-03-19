import { Box as OriginalBox } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { fixedHeight, fixedWidth } from 'styled-mixins';
import { motion } from 'framer-motion';
import { CommonProps } from './types';
import { getHorizontalProps, getVerticalProps } from './props';

const spaceUnit = 1;

export const Space = styled.div<{ size: number }>(({ size = 1 }) => ({
  ...fixedHeight(spaceUnit * size),
  ...fixedWidth(spaceUnit * size),
}));

export const Horizontal = styled(OriginalBox)<CommonProps>(getHorizontalProps);

export const Vertical = styled(OriginalBox)<CommonProps>(getVerticalProps);

export const MHorizontal = motion(Horizontal);

export const MVertical = motion(Vertical);
