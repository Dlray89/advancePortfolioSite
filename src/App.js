import Navigation from './component/Navigation/Navigation'
import Footer from './component/Footer/footer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ThemeProvider} from "@material-ui/styles"
import theme from './component/UI/theme'
import LandingPage from "./component/LandingPage/LandingPage"
import Portfolio from './component/PorfolioPage/PorfolioPage'
import Services from './component/ServicesPage/servicesPage'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navigation  />
      <Switch>
        <Route exact path='/' component={LandingPage}   />
        <Route exact path='/projects' component={Portfolio}  />
        <Route exact path='/services' component={Services}  />

      </Switch>
      <Footer  />
      </BrowserRouter>
    
    </ThemeProvider>
  );
}

export default App;
