import * as React from 'react';
import { Wrapper, Label, StyledLabelText, StyledInput } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  textarea?: boolean;
  type?: string;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  required = false,
  disabled = false,
  textarea = false,
  label,
  ...restProps
}) => {
  const [val, setVal] = React.useState('');
  const hasValue = val !== '';

  return (
    <Wrapper disabled={disabled}>
      <Label>
        <StyledLabelText>{label}</StyledLabelText>
        {textarea ? (
          <StyledInput
            as="textarea"
            hasValue={hasValue}
            textarea={textarea}
            value={value}
            disabled={disabled}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              setVal(e.target.value);
              if (typeof onChange === 'function') {
                onChange(e);
              }
            }}
            {...restProps}
          />
        ) : (
          <StyledInput
            as="input"
            hasValue={hasValue}
            required={required}
            textarea={textarea}
            value={value}
            disabled={disabled}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              setVal(e.target.value);
              if (typeof onChange === 'function') {
                onChange(e);
              }
            }}
            {...restProps}
          />
        )}
      </Label>
    </Wrapper>
  );
};

export default Input;
