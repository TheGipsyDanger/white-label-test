import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { metrics } from '../styles/metrics';
import { IStringMap, StringToNumberMap } from '../utils';

const { defaultSpace } = metrics;

export const space = [
  defaultSpace() / 2,
  ...Array.from({ length: 12 }, (_, k) => defaultSpace(k + 1)),
];

export const fontSizes: IStringMap = {
  tiny: '10px',
  xsmall: '11px',
  small: '12px',
  default: '13px',
  big: '18px',
  large: '20px',
  xlarge: '24px',
};

export const colors: IStringMap = {
  WHITE: '#FFF',
  ORANGE: '#f37321',
  TEXT: '#171717',
  SUBLABEL: '#777777',
};

export const fonts: IStringMap = {};

export const radii: StringToNumberMap = {
  Light: defaultSpace() / 2,
  Medium: defaultSpace(),
  Circle: 100,
};

export const shadows: IStringMap = {
  cell: '0px 0px 8px rgba(0,0,0,0.12)',
};

export const theme = {
  space,
  radii,
  colors,
  fontSizes,
};

export const ThemeProvider: React.FC = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
