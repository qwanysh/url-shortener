import styled from 'styled-components';

const ShorteningCard = ({className, shortening}) => {
  return (
    <div className={className}>
      <div className='inner'>
        <a className='target-url' target='_blank'
           href={shortening.target_url}>{shortening.target_url}</a>
        <span className='timespan'>{shortening.created_at}</span>
      </div>
      <a className='short-url' target='_blank'
         href={shortening.short_url}>{shortening.short_url}</a>
    </div>
  );
};

export default styled(ShorteningCard)`
  border: 1px solid #d8d8d8;
  padding: 10px;
  background: white;
  border-radius: 8px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  & .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #d7dade;
    margin-bottom: 10px;
  }

  & .target-url {
    text-decoration: none;
    font-size: 14px;
    color: rgb(126, 136, 159);
  }

  & .timespan {
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #7e889f;
    color: #7e889f;
    font-size: 12px;
    flex-shrink: 0;
  }

  & .short-url {
    color: #f73e2f;
    text-decoration: none;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
      color: #0984e3;
    }
  }
`;
