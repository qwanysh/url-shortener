import {useState, useEffect} from 'react';
import GlobalStyle from './GlobalStyle';
import CenteredLayout from './CenteredLayout/CenteredLayout';
import Form from './Form/Form';
import ShorteningList from './ShorteningList/ShorteningList';
import '../assets/reset.css';
import {getShortenings} from '../utils';

const App = () => {
  const [shortenings, setShortenings] = useState([]);

  useEffect(async () => {
    setShortenings(await getShortenings());
  }, []);

  const handleCreate = (shortening) => {
    setShortenings([shortening, ...shortenings]);
  };

  return (
    <>
      <GlobalStyle/>
      <CenteredLayout>
        <Form onCreate={handleCreate}/>
        {shortenings.length !== 0 && (
          <ShorteningList shortenings={shortenings}/>
        )}
      </CenteredLayout>
    </>
  );
};

export default App;
