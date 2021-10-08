import styled from 'styled-components';

const Container = ({className, children}) => (
  <div className={className}>{children}</div>
);

export default styled(Container)`
  margin: 0 auto;
  max-width: 840px;
  padding: 0 20px;
`;
