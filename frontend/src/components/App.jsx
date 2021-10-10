import {useState, useEffect} from 'react';
import GlobalStyle from './GlobalStyle';
import CenteredLayout from './CenteredLayout/CenteredLayout';
import Form from './Form/Form';
import ShorteningList from './ShorteningList/ShorteningList';
import '../assets/reset.css';
import {getAuthorIdFromLocalStorage, getShortenings} from '../utils';

const App = () => {
  const [authorId, setAuthorId] = useState(null);
  const [shortenings, setShortenings] = useState([]);

  useEffect(async () => {
    const _authorId = getAuthorIdFromLocalStorage();
    setAuthorId(_authorId);
    setShortenings(await getShortenings(_authorId));
  }, []);

  const handleCreate = (shortening) => {
    setShortenings([shortening, ...shortenings]);
  };

  return (
    <>
      <GlobalStyle/>
      <CenteredLayout>
        <Form onCreate={handleCreate} authorId={authorId}/>
        {shortenings.length !== 0 && (
          <ShorteningList shortenings={shortenings}/>
        )}
      </CenteredLayout>
    </>
  );
};

export default App;
