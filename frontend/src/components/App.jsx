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

  const _updateShortenings = async () => {
    const [_shortenings, hasPrev, hasNext] = await getShortenings(pagination.currentPage, authorId);
    setShortenings(_shortenings);
    setPagination({...pagination, hasPrev, hasNext});
  };

  useEffect(async () => {
    const _authorId = getAuthorIdFromLocalStorage();
    setAuthorId(_authorId);
    await _updateShortenings();
  }, [pagination.currentPage]);

  const handleCreate = async () => {
    await _updateShortenings();
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
