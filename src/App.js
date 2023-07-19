import React from 'react'
import Header from './Components/UI/header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Components/UI/theme'
import { Switch, Route } from 'react-router-dom'
import Footer from './Components/UI/footer';
import LandingPage from './pages/landing-page'
import ServicesPage from './pages/services-page'
import CustomeSoftwarePage from './pages/CustomeSoftware-page'
import MobileAppsDevelopmentPage from './pages/appDevelopment-page'
import WebsiteDevelopmentPage from './pages/websiteDevelopment-page'
import RevolutionPage from './pages/revolution-page'
import AboutUsPage from './pages/aboutUs-page'
import ContactUs from './pages/contactUs-page'
import Estimate from './pages/estimate-page'




function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/revolution' component={RevolutionPage} />
        <Route exact path='/about' component={AboutUsPage} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/customesoftware' component={CustomeSoftwarePage} />
        <Route exact path='/mobileapps' component={MobileAppsDevelopmentPage} />
        <Route exact path='/websites' component={WebsiteDevelopmentPage} />
        <Route exact path='/estimate' component={Estimate} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
