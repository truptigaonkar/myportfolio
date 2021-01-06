import { styled } from '@glitz/react';
import { small, large, huge, medium, tiny } from './values';
import { eta, kappa, lambda } from './typography';

export enum General {
  Default,
  Small,
  Large,
  Tiny,
}

type GeneralType = {
  height: number;
  padding: { x: number; y: number };
  fontSize: number;
};

function createGeneral(
  fontSize: number,
  /** Padding left and right */
  x: number,
  /** Padding top and bottom */
  y: number,
): GeneralType {
  return {
    height: 1,
    padding: { x, y },
    fontSize,
  };
}

const generals: { [key in General]: GeneralType } = {
  [General.Tiny]: createGeneral(lambda, small, tiny),
  [General.Small]: createGeneral(kappa, medium, small),
  [General.Default]: createGeneral(eta, large, small),
  [General.Large]: createGeneral(eta, huge, 12),
};

const generalResetStyled = styled({  });

export function general(type = General.Default) {
  return generals[type];
}

export function createGeneralStyled(type = General.Default, singleLine = true) {
  const decorator = generalResetStyled(general(type));

  if (singleLine) {
    return decorator;
  } else {
    // Remove `height` to enable multiple rows
    return decorator({ height: undefined });
  }
}

export const headerHeightFull = 80;
export const headerHeightCompact = 60;
export const headerLogoHeightFull = 54;
export const headerLogoHeightCompact = 30;
export const headerHeightFullCheckout = 130;

export const flyoutWidth = 480;
