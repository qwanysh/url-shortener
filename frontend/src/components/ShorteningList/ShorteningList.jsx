import styled from 'styled-components';
import ShorteningCard from './ShorteningCard';
import Pagination from './Pagination/Pagination';

const ShorteningList = ({className, shortenings, pagination, onPageChange}) => {
  return (
    <div className={className}>
      <Pagination pagination={pagination} onPageChange={onPageChange}/>
      {shortenings.map(shortening => (
        <ShorteningCard key={shortening.id} shortening={shortening}/>
      ))}
    </div>
  );
};

export default styled(ShorteningList)`
  margin-top: 40px;
`;
