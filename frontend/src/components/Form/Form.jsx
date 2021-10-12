import {useState} from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import {createShortening} from '../../utils';

const initialShortening = {targetUrl: '', slug: ''};
const initialErrors = {'target_url': [], slug: []};

const Form = ({className, onCreate, authorId}) => {
  const [customSlug, setCustomSlug] = useState(false);
  const [newShortening, setNewShortening] = useState(initialShortening);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = ({target}) => {
    setNewShortening({...newShortening, [target.name]: target.value});
  };

  const handleClick = async () => {
    const _errors = await createShortening({authorId, ...newShortening});

    if (_errors) {
      setErrors({...errors, ..._errors});
      return;
    }

    onCreate();
    setNewShortening(initialShortening);
    setCustomSlug(false);
    setErrors(initialErrors);
  };

  return (
    <div className={className}>
      <div className={`${className}__top-inner`}>
        <TextInput placeholder='Paste long url' autoFocus name='targetUrl'
                   errors={errors['target_url']}
                   value={newShortening.targetUrl}
                   onInput={event => handleChange(event)}/>
        <Button disabled={!newShortening.targetUrl}
                onClick={handleClick}>Shorten</Button>
      </div>
      <div className={`${className}__middle-inner`}>
        <button className={`${className}__button`}
                onClick={() => setCustomSlug(!customSlug)}>
          {customSlug ? 'Use random slug' : 'Set custom slug'}
        </button>
      </div>
      {customSlug && (
        <TextInput placeholder='Enter custom slug' autoFocus name='slug'
                   errors={errors.slug} value={newShortening.slug}
                   onInput={event => handleChange(event)}/>
      )}
    </div>
  );
};

export default styled(Form)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  &__top-inner {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      align-items: center;
      flex-direction: row;
      position: relative;
    }
  }

  &__middle-inner {
    display: flex;
    justify-content: center; 
  }

  &__button {
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
