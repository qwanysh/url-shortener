import styled from 'styled-components';
import ShorteningCard from './ShorteningCard';

const ShorteningList = ({className, shortenings}) => {
  return (
    <div className={className}>
      {shortenings.map(shortening => (
        <ShorteningCard key={shortening.id} shortening={shortening}/>
      ))}
    </div>
  );
};

export default styled(ShorteningList)`
  margin-top: 40px;
`;
