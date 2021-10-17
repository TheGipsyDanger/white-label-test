import * as React from 'react';

import { ITextLayout } from '~/components/Basics/Text/data';
import C from './styles';

export const Text = ({
  color = 'TEXT',
  font = 'Regular',
  size = 'default',
  ...props
}: ITextLayout) => <C.Text {...props} font={font} color={color} size={size} />;
