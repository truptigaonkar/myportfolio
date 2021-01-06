import { styled } from '@glitz/react';
import { headingStyled } from './H1';
import { iota } from '../Style';

export const h5Styled = headingStyled({ fontSize: iota });

export default h5Styled(styled.H5);
