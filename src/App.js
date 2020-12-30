import Navigation from './component/Navigation/Navigation'
import Footer from './component/Footer/footer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ThemeProvider , StylesProvider} from "@material-ui/styles"
import theme from './component/UI/theme'
import LandingPage from "./component/LandingPage/LandingPage"
import Portfolio from './component/PorfolioPage/PorfolioPage'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
      <BrowserRouter>
      <Navigation  />
      <Switch>
        <Route exact path='/' component={LandingPage}   />
        <Route exact path='/projects' component={Portfolio}  />
        <Route exact path='/services' component={() => <div>Services</div>}  />

      </Switch>
      <Footer  />
      </BrowserRouter>
      </StylesProvider>
    
    </ThemeProvider>
  );
}

export default App;
