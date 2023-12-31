import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from '../../components/Header/header'
import Projects from '../Projects/Projects'
import Home from '../Home/Home'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout/Layout'
import Aws from '../Aws/Aws'

const AppRoutes = () => {

  let routes = useRoutes ([
    {path: '/', element: <Home></Home>},
    {path: '/projects', element: <Projects></Projects>},
    {path: '/Aws', element: <Aws></Aws>}

  ])

  return routes
}

function App() {

  return (
    <BrowserRouter>
    
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Layout></Layout>
      <Footer></Footer>

    </BrowserRouter>
  )
}

export default App
