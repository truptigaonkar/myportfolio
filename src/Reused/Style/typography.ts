import { Style } from '@glitz/type';
import { styled } from '@glitz/react';

export const linkColor = '#2171d8';

export const alternativeTextColor = '#b5b5b5';

// Large font sizes
export const ultraOmegaGigaWhatDoesTheScouterSayAboutHisPowerLevel = 9001;
export const ultraOmegaGiga = 126;
export const ultraMega = 108;
export const ultraKilo = 90;
export const giga = 72;
export const mega = 54;
export const kilo = 36;

// Heading font sizes
export const alpha = 30;
export const beta = 26;
export const gamma = 24;
export const delta = 22;
export const epsilon = 20;
export const zeta = 16;
export const eta = 15;
export const theta = 14;
export const iota = 13;
export const kappa = 12;
export const lambda = 11;
// Weights
export const fontWeightBold = 600;
export const fontWeightMedium = 500;
export const fontWeightNormal = 400;

export function calculateLineHeightInPixels(fontSize: number) {
}

export function truncate(overflow = 'ellipsis'): Style {
  return {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: overflow,
  };
}

export const preserveEmptyStyled = styled({
  // If breadcrumbs is an empty list we want to preserve the height because an
  // empty list means that breadcrumbs will be loaded and displayed eventually
  ':empty': {
    ':before': {
      content: '" "',
      whiteSpace: 'pre',
    },
  },
});
