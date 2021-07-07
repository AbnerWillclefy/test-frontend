import Header from './components/Header';
import Main from './components/Main';
import GridComponent from './components/GridComponent';
import FooterComponent from './components/FooterComponent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
    height: '100%',
    maxWidth: '1440px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Header />
      <Main />
      <GridComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
