import './App.css';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const App = () => {
  return (
    <MuiThemeProvider>
      <link href='https://fonts.googleapis.com/css?family=Lemon' rel='stylesheet'></link>
      <div className="App">
          <NavBar />
          <br></br>
          <br></br>
          <br></br>
          <Search />
          <br></br>

      </div>
    </MuiThemeProvider>

  );
}

export default App;
