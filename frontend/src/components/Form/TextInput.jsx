import styled from 'styled-components';

const TextInput = ({className, placeholder, autoFocus, onInput, value}) => (
  <input className={className} type='text' placeholder={placeholder}
         autoFocus={autoFocus} onInput={onInput} value={value}
         spellCheck={false}/>
);

export default styled(TextInput)`
  font-size: 14px;
  color: black;
  padding: 15px 30px;
  border: 1px solid #d8d8d8;
  border-radius: 12px;
  transition: 0.2s;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    padding-right: 126px;
    flex-grow: 1;
    margin-bottom: 0;
  }

  &:hover, &:focus {
    box-shadow: 1px 2px 8px rgba(17, 17, 17, 0.15);
    border-color: transparent;
  }
  
  &:focus {
    outline: none;
  }
`;
