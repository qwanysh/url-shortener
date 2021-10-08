import GlobalStyle from './GlobalStyle';
import CenteredLayout from './CenteredLayout/CenteredLayout';
import Form from './Form/Form';
import '../assets/reset.css';

const App = () => (
  <>
    <GlobalStyle/>
    <CenteredLayout>
      <Form/>
    </CenteredLayout>
  </>
);

export default App;
