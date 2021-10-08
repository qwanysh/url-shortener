import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';

const Form = ({className}) => (
  <div className={className}>
    <TextInput placeholder='Paste long url' autoFocus/>
    <Button disabled>Shorten</Button>
  </div>
);

export default styled(Form)`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    align-items: center;
    flex-direction: row;
    position: relative;
  }
`;
