import {useState} from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import {createShortening} from '../../utils';

const Form = ({className, onCreate, authorId}) => {
  const [customSlug, setCustomSlug] = useState(false);
  const initialShortening = {targetUrl: '', slug: ''};
  const [newShortening, setNewShortening] = useState(initialShortening);

  const handleChange = ({target}) => {
    setNewShortening({...newShortening, [target.name]: target.value});
  };

  const handleClick = async () => {
    await createShortening({authorId, ...newShortening});
    onCreate();
    setNewShortening(initialShortening);
    setCustomSlug(false);
  };

  return (
    <div className={className}>
      <div className='top-inner'>
        <TextInput placeholder='Paste long url' autoFocus
                   value={newShortening.targetUrl} name='targetUrl'
                   onInput={event => handleChange(event)}/>
        <Button disabled={!newShortening.targetUrl}
                onClick={handleClick}>Shorten</Button>
      </div>
      <div className='middle-inner'>
        <button className='button' onClick={() => setCustomSlug(!customSlug)}>
          {customSlug ? 'Use random slug' : 'Set custom slug'}
        </button>
      </div>
      {customSlug && (
        <TextInput placeholder='Enter custom slug' autoFocus
                   value={newShortening.slug} name='slug'
                   onInput={event => handleChange(event)}/>
      )}
    </div>
  );
};

export default styled(Form)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  & .top-inner {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      align-items: center;
      flex-direction: row;
      position: relative;
    }
  }

  & .middle-inner {
    display: flex;
    justify-content: center; 
  }

  & .button {
    font-size: 12px;
    color: #7e889f;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: #0984e3;
    }
  }
`;
