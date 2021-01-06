import { styled } from '@glitz/react';
import { alpha, moderate } from '../../Reused/Style';

export const headingStyled = styled({
  fontWeight: 'bold',
  letterSpacing: '0.4px',
});

export const h1Styled = headingStyled({ fontSize: alpha, margin: { y: moderate } });

export default h1Styled(styled.H1);
