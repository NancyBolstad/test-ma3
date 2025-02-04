import { css } from 'styled-components';
import { Font } from '../types/theme';

function createFontStyles(font: Font) {
  return css`
    font-family: ${font.family};
    font-weight: ${font.weight};
    font-size: ${font.size}rem;
    ${font.lineHeight &&
      css`
        line-height: ${font.lineHeight};
      `};
    ${(font.mediaQueries || []).map(
      q => css`
        @media (min-width: ${q.query}px) {
          ${q.family &&
            css`
              font-family: ${q.family};
            `};
          ${q.weight &&
            css`
              font-weight: ${q.weight};
            `};
          ${q.size &&
            css`
              font-size: ${q.size}rem;
            `};
          ${q.lineHeight &&
            css`
              line-height: ${q.lineHeight};
            `};
        }
      `,
    )};
  `;
}

export default createFontStyles;
