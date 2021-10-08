import styled from 'styled-components';

const Button = ({className, children, disabled}) => (
  <button className={className} disabled={disabled}>{children}</button>
);

export default styled(Button)`
  padding: 10px 30px;
  font-size: 14px;
  border-radius: 8px;
  color: white;
  background: #74b9ff;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  @media (min-width: 600px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 6px;
  }

  &:hover {
    background: #0984e3;
  }
  
  &:disabled {
    cursor: default;
    background: #b2bec3;
  }
`;
