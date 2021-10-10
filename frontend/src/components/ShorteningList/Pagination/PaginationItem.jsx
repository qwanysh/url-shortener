import styled from 'styled-components';

const directions = {
  prev: {symbol: '⟵', borderStyles: '8px 0 0 8px'},
  next: {symbol: '⟶', borderStyles: '0 8px 8px 0'},
};

const PaginationItem = ({className, children, direction = null, disabled, onClick}) => {
  if (direction) {
    children = directions[direction].symbol;
  }
  return (
    <button className={className} onClick={onClick}
            disabled={disabled}>{children}</button>
  );
};

export default styled(PaginationItem)`
  border: 1px solid #d8d8d8;
  padding: 10px;
  background: white;
  border-radius: ${({direction}) => {
    if (direction) {
      return directions[direction].borderStyles;
    }
    return '0';
  }};
  cursor: pointer;
  font-size: 12px;
  margin-right: 10px;
  color: #f73e2f;
  transition: 0.2;

  &:hover {
    color: #0984e3;
  }

  &:last-child {
    margin-right: 0;
  }
  
  &:disabled {
    cursor: default;
    color: #7e889f;
  }
`;
