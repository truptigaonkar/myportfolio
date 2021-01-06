//import { baseTextColor } from './typography';

// Colors
export const white = 'white';
export const black = 'black';
export const primary = '#000000';
export const primaryLight = '#333333';
export const primaryText = white;
export const secondary = '#e24e4a';
export const secondaryLight = '#f0a5a3';
export const secondaryDark = '#ab211c';
export const secondaryText = white;
export const tertiary = '#f1c93e';
export const tertiaryLight = '#f8e49b';
export const tertiaryDark = '#b9940e';
export const quaternary = '#4ba9af';
export const quaternaryLight = '#b4dcdf';
export const quaternaryDark = '#3c868b';
export const quaternaryText = white;
export const monochrome = '#d8d8d8';
export const monochromeLight = '#e5e5e5';
export const monochromeDark = '#9c9c9c';
export const positive = '#3CA300';
export const positiveLight = '#4BCC00';
export const positiveDark = '#2D7A00';
export const positiveText = white;
export const negative = '#e24e4a';
export const negativeLight = '#e6b3b3';
export const negativeDark = '#993333';
export const negativeText = white;
export const neutral = '#CCC200';
export const neutralLight = '#F5E900';
export const neutralDark = '#A39B00';
export const outlineGrey = '#C6C6C6';


type rgbType = [number, number, number];

export const hexToRgb = (hexValue: string): rgbType => {
  const value = hexValue.replace('#', '');
  const redHex = value.substr(0, 2);
  const greenHex = value.substr(2, 2);
  const blueHex = value.substr(4, 2);
  const redNum = parseInt(redHex, 16);
  const greenNum = parseInt(greenHex, 16);
  const blueNum = parseInt(blueHex, 16);
  return [redNum, greenNum, blueNum];
};
