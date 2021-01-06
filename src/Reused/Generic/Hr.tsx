import { styled } from '@glitz/react';
import { moderate, outlineGrey } from '../Style';

export const hrStyled = styled({
  border: {
    bottom: {
      width: 1,
      style: 'solid',
      color: outlineGrey,
    },
  },
});

export default hrStyled(styled.Hr, {
  border: {
    x: { width: 0 },
    bottom: { width: 0 },
  },
  margin: { y: moderate },
});
