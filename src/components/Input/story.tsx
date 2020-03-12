import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Input from './';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin: 0 auto;
  padding: 3rem;
`;

storiesOf('Component/Input', module)
  .add('Default', () => (
    <Wrapper>
      <Input label="User Name" type="text" placeholder="Your username" />
      <Input label="Password" type="text" placeholder="Your password" />
    </Wrapper>
  ))
  .add('TextArea', () => (
    <Wrapper>
      <Input
        textarea
        label="Din melding"
        type="text"
        placeholder="Skriv din melding her"
        required={true}
      />
    </Wrapper>
  ));
