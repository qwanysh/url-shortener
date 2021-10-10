import styled from 'styled-components';
import PaginationItem from './PaginationItem';

const Pagination = ({className, pagination, onPageChange}) => {
  return (
    <div className={className}>
      <PaginationItem direction='prev' onClick={() => onPageChange('prev')}
                      disabled={!pagination.hasPrev}/>
      <PaginationItem direction={null} disabled>Page: {pagination.currentPage}</PaginationItem>
      <PaginationItem direction='next' onClick={() => onPageChange('next')}
                      disabled={!pagination.hasNext}/>
    </div>
  );
};

export default styled(Pagination)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
