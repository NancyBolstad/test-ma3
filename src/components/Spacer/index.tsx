import styled from 'styled-components';

export interface VerticalSpacerProps {
  topGutter?: string;
  topGutterDesktop?: string;
  bottomGutter?: string;
  bottomGutterDesktop?: string;
}

const VerticalSpacer = styled.div<VerticalSpacerProps>`
  margin: ${props => props.theme.spacing.s}rem 0;
`;

const HorizontalSpacer = styled.div`
  padding: 0 ${props => props.theme.spacing.m}rem;
  @media (min-width: 1280px) {
    padding: 0 ${props => props.theme.spacing.xl}rem;
  }
`;

export { VerticalSpacer, HorizontalSpacer };
