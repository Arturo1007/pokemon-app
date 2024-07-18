import './App.scss'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import Banner from './components/Banner/Banner'
import bannerImage from './assets/images/banner_placeholder.png'
import bannerImageMobile from './assets/images/banner_placeholder_mobile.png'
import CardContainer from './components/CardContainer/CardContainer'

function App() {

  return (
    <>
      <HeaderMenu></HeaderMenu>
      <Banner desktopImage={bannerImage} mobileImage={bannerImageMobile}></Banner>
      <CardContainer></CardContainer>
    </>
  )
}

export default App
