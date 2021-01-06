import { styled } from '@glitz/react';
import { headingStyled } from './H1';
import { gamma, moderate } from '../../Reused/Style';


export const h2Styled = headingStyled({ fontSize: gamma, margin: { y: moderate } });

export default h2Styled(styled.H2);
