import Home from './components/home'
import './assets/css/bootstrap-datetimepicker.min.css'
import './assets/css/bootstrap.min.css'
// import "./assets/css/bootstrap.min.css.map";
import './assets/css/feather.css'
// import "./assets/css/owl.carousel.min.css";
import './assets/css/owl.theme.default.min.css'
import './assets/css/slick.css'
import './assets/css/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contract from './components/contract'
import GridSidebar from './components/Listings/LisitingGridSidebar'
import ListSidebar from './components/Listings/LisitingListSidebar'
import ListingMap from './components/Listings/listingMap'
import About from './components/pages/about'
import ServiceDetails from './components/Listings/serviceDetails/serviceDetails'
import Pricing from './components/pages/about/pricing'
import Faq from './components/pages/faq'
import Gallery from './components/pages/gallary'
import Category from './components/pages/category'
import HowItWork from './components/pages/howitWork'
import TermsCondition from './components/pages/termsCondition'
import PrivacyPolicy from './components/pages/privacyPolicy'
import Error404 from './components/pages/404error'
import Error504 from './components/pages/504error'
import Dashboard from './components/userPages/Dashboard'
import Profile from './components/userPages/profile'
import AddLisiting from './components/userPages/AddLisiting'
import Review from './components/userPages/review'
import Message from './components/userPages/mesage'
import Bookmarks from './components/userPages/bookmark'
import MyListe from './components/userPages/mylisting'
import BlogList from './components/blog/BlogList'
import BlogGrid from './components/blog/BlogList/BlogGrid'
import BlogDetailsh from './components/blog/BlogList/blogDatalish'
import BlogListSideBar from './components/blog/BlogList/blogListSidebar'
import BlogGridSidebar from './components/blog/BlogList/blogGridSidebar'
import Login from './components/login'
import SignUp from './components/signUp'

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contract />,
      },
      {
        path: '/listing-grid-sidebar',
        element: <GridSidebar />,
      },
      {
        path: '/listing-list-sidebar',
        element: <ListSidebar />,
      },
      {
        path: '/listingmap-list',
        element: <ListingMap />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/service-details',
        element: <ServiceDetails />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/categories',
        element: <Category />,
      },
      {
        path: '/howitworks',
        element: <HowItWork />,
      },
      {
        path: '/terms-condition',
        element: <TermsCondition />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/error-404',
        element: <Error404 />,
      },
      {
        path: '/error-500',
        element: <Error504 />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/add-listing',
        element: <AddLisiting />,
      },
      {
        path: '/reviews',
        element: <Review />,
      },
      {
        path: '/messages',
        element: <Message />,
      },
      {
        path: '/my-listing',
        element: <MyListe />,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
      {
        path: '/blog-list',
        element: <BlogList />,
      },
      {
        path: '/blog-grid',
        element: <BlogGrid />,
      },
      {
        path: '/blog-details',
        element: <BlogDetailsh />,
      },
      {
        path: '/blog-list-sidebar',
        element: <BlogListSideBar />,
      },
      {
        path: '/blog-grid-sidebar',
        element: <BlogGridSidebar />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
