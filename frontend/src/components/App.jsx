import {useState, useEffect} from 'react';
import GlobalStyle from './GlobalStyle';
import CenteredLayout from './CenteredLayout/CenteredLayout';
import Form from './Form/Form';
import ShorteningList from './ShorteningList/ShorteningList';
import '../assets/reset.css';
import {getAuthorIdFromLocalStorage, getShortenings} from '../utils';

const App = () => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    hasPrev: null,
    hasNext: null,
  });
  const [authorId, setAuthorId] = useState(null);
  const [shortenings, setShortenings] = useState([]);

  useEffect(async () => {
    const _authorId = getAuthorIdFromLocalStorage();
    const [_shortenings, hasPrev, hasNext] = await getShortenings(pagination.currentPage, _authorId);
    setAuthorId(_authorId);
    setShortenings(_shortenings);
    setPagination({...pagination, hasPrev, hasNext});
  }, [pagination.currentPage]);

  const handleCreate = (shortening) => {
    setShortenings([shortening, ...shortenings]);
  };

  const handlePageChange = (direction) => {
    setPagination({
      currentPage: pagination.currentPage + {'prev': -1, 'next': 1}[direction],
    });
  };

  return (
    <>
      <GlobalStyle/>
      <CenteredLayout>
        <Form onCreate={handleCreate} authorId={authorId}/>
        {shortenings.length !== 0 && (
          <ShorteningList shortenings={shortenings} pagination={pagination}
                          onPageChange={handlePageChange}/>
        )}
      </CenteredLayout>
    </>
  );
};

export default App;
