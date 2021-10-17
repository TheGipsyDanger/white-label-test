import { withChildren } from '~/utils';

import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
  PositionProps,
} from 'styled-system';

export interface IWrapped
  extends withChildren,
    BorderProps,
    PositionProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    LayoutProps {
  testID?: string;
  center?: boolean;
  onPress?(): void;
  activeOpacity?: number;
}

export interface IWrappedLayout extends IWrapped {}
