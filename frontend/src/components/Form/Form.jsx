import {useState} from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import {createShortening} from '../../utils';

const Form = ({className}) => {
  const [targetUrl, setTargetUrl] = useState('');

  const handleClick = async () => {
    await createShortening(targetUrl);
  };

  return (
    <div className={className}>
      <TextInput placeholder='Paste long url' autoFocus value={targetUrl}
                 onInput={(event) => setTargetUrl(event.target.value)}/>
      <Button disabled={!targetUrl} onClick={handleClick}>Shorten</Button>
    </div>
  );
};

export default styled(Form)`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    align-items: center;
    flex-direction: row;
    position: relative;
  }
`;
