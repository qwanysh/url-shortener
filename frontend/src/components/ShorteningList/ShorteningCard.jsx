import styled from 'styled-components';

const ShorteningCard = ({className, shortening}) => {
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        <a className={`${className}__target-url`} target='_blank'
           href={shortening['target_url']}>{shortening['target_url']}</a>
        <span className={`${className}__timespan`}>
          {shortening['created_at'].substr(0, 10)}
        </span>
      </div>
      <a className={`${className}__short-url`} target='_blank'
         href={shortening['short_url']}>{shortening['short_url']}</a>
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

  &__inner {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding-bottom: 10px;
    border-bottom: 1px solid #d7dade;
    margin-bottom: 10px;
    
    @media (min-width: 600px) {
      & {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  &__target-url {
    text-decoration: none;
    font-size: 14px;
    color: #7e889f;
  }

  &__timespan {
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #7e889f;
    color: #7e889f;
    font-size: 12px;
    flex-shrink: 0;
    margin-bottom: 10px;
    
    @media (min-width: 600px) {
      margin-bottom: 0;
    }
  }

  &__short-url {
    color: #f73e2f;
    text-decoration: none;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
      color: #0984e3;
    }
  }
`;
