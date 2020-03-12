import styled, { css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import createMediaQuery from '../../util/createMediaQuery';

interface InputFieldProps {
  hasValue?: boolean;
  required?: boolean;
  textarea?: boolean;
}

export const Wrapper = styled.div<{ disabled: boolean }>`
  transition: opacity 0.1s ease-in-out;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `};
`;

export const Label = styled.label`
  ${props => createFontStyles(props.theme.fonts.b2)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.s}rem;
`;

export const StyledLabelText = styled.span`
  width: 40%;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onSecondary};
  padding: 0 32px;
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const StyledInput = styled.input<InputFieldProps>`
  height: 40px;
  width: 60%;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primaryVariant};
  border-left: none;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding: 0 32px;
  outline: none;
  transition: border-color 0.1s ease-in-out;
  ${props => createFontStyles(props.theme.fonts.b1)};
  ${createMediaQuery(
    'small',
    css`
      min-width: 150px;
    `,
  )};
  &::placeholder {
    color: ${props => props.theme.colors.primaryVariant};
  }
  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:placeholder-shown {
    border: 1px solid ${props => props.theme.colors.primaryVariant};
  }
  ${props =>
    props.hasValue &&
    css`
      border-color: ${props.theme.colors.primaryVariant};
    `};
  ${props =>
    props.textarea &&
    css`
      padding: 0.75rem;
      height: 180px;
    `};
`;
