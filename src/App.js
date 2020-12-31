import Navigation from './component/UI/Navigation/Navigation'
import Footer from './component/UI/Footer/footer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ThemeProvider} from "@material-ui/styles"
import theme from './component/UI/theme'
import LandingPage from "./component/LandingPage/LandingPage"
import Portfolio from './component/PorfolioPage/PorfolioPage'
import Services from './component/ServicesPage/servicesPage'
import GetStartedPage from './component/GetStartedPage/GetStarted'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navigation  />
      <Switch>
        <Route exact path='/' component={LandingPage}   />
        <Route exact path='/projects' component={Portfolio}  />
        <Route exact path='/services' component={Services}  />
        <Route exact path='/gettingstarted' component={GetStartedPage}  />

      </Switch>
      <Footer  />
      </BrowserRouter>
    
    </ThemeProvider>
  );
}

export default App;
