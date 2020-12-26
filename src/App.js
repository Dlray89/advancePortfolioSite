import Navigation from './component/Navigation/Navigation'
import Footer from './component/Footer/footer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ThemeProvider} from "@material-ui/styles"
import theme from './component/UI/theme'
import LandingPage from "./component/LandingPage/LandingPage"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navigation  />
      <Switch>
        <Route exact path='/' component={LandingPage}   />
        <Route exact path='/projects' component={() => <div>Projects</div>}  />
        <Route exact path='/blogs' component={() => <div>Blogs</div>}  />

      </Switch>
      <Footer  />
      </BrowserRouter>
    
    </ThemeProvider>
  );
}

export default App;
