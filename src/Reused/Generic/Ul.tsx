import React from 'react';
import { styled, StyledProps } from '@glitz/react';

type PropType = React.HTMLAttributes<HTMLUListElement> & {
  bare?: boolean;
  row?: boolean;
  column?: boolean;
};

export default styled(({ compose, bare, row, column, ...restProps }: StyledProps & PropType) => (
  <styled.Ul
    {...restProps}
    css={compose({
      ...((bare || row || column) && {
        margin: { xy: 0 },
        padding: { xy: 0 },
        listStyle: 'none',
      }),
      ...((row || column) && {
        display: 'flex',
      }),
      ...(column && {
        flexDirection: 'column',
      }),
    })}
  />
));
