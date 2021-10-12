import styled from 'styled-components';

const TextInput = ({className, placeholder, autoFocus, onInput, value, name, errors}) => (
  <div className={className}>
    <input className={`${className}__input`} type='text'
           placeholder={placeholder} autoFocus={autoFocus} onInput={onInput}
           value={value} name={name} spellCheck={false}/>
    {errors.length !== 0 && (
      <ul className={`${className}__error-list`}>
        {errors.map((error, idx) => (
          <li key={idx}>• {error}</li>
        ))}
      </ul>
    )}
  </div>
);

export default styled(TextInput)`
  flex-grow: 1;

  &__input {
    width: 100%;
    font-size: 14px;
    color: black;
    padding: 15px 30px;
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    transition: 0.2s;
    margin-bottom: 20px;
    background: white;
  
    @media (min-width: 600px) {
      padding-right: 126px;
      margin-bottom: 0;
    }
  
    &:hover, &:focus {
      box-shadow: 1px 2px 8px rgba(17, 17, 17, 0.15);
      border-color: transparent;
    }
  }
  
  &__error-list {
    margin-top: 10px;
    
    & > li {
      color: #f73e2f;
      font-size: 12px;
      margin-bottom: 5px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
