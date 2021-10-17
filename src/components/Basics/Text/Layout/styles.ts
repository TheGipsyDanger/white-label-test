import styled, { css } from 'styled-components/native';
import { Text as TextBase } from 'react-native';
import { color, space, border, typography } from 'styled-system';
import { ITextLayout } from '~/components/Basics/Text/data';
import { fonts, fontSizes, colors } from '~/styles/';

export default {
  Text: styled(TextBase)<ITextLayout>`
    ${space};
    ${color};
    ${typography};
    ${border};

    ${({ textTransform }) =>
      textTransform &&
      css`
        text-transform: ${textTransform};
      `}

    ${({ textDecoration }) =>
      textDecoration &&
      css`
        text-decoration: ${textDecoration};
      `}

    font-size: ${({ size }) => fontSizes[size || 'default']};
    font-family: ${({ font }) => fonts[font as string] || 'Avenir'};
    color: ${({ color }) => colors[color as string]};
  `,
};
