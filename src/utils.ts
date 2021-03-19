export const px = (a: string | number) =>
  a?.toString()?.includes?.('px') ? a : `${a}px`;

export const getOppositeDirection = (dir: string) =>
  dir === 'horizontal' ? 'left' : 'top';

export const allChildrenSelector: string = '& > *';
