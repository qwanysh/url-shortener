import styled from 'styled-components';
import Container from './Container';

const CenteredLayout = ({className, children}) => (
  <div className={className}>
    <div className={`${className}__inner`}>
      <Container>
        {children}
      </Container>
    </div>
  </div>
);

export default styled(CenteredLayout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__inner {
    padding: 20px 0;
  }
`;
