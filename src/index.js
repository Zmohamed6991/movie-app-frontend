import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Homepage from './components/Homepage';
import Movies from './components/Movies';
import Genres from './components/Genres';
import AddMovie from './components/AddMovie';
import ManageMovies from './components/ManageMovies';
import GraphQL from './components/GraphQL';
import Movie from './components/Movie';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Homepage />},
      {
        path: "/movies", 
        element: <Movies />
      },
      {
        path: "/movies/:id", 
        element: <Movie />
      },
      {
        path: "/genres", 
        element: <Genres />
      },
      {
        path: "/movies", 
        element: <Movies />
      },
      {
        path: "/admin/movie/0", 
        element: <AddMovie />
      },
      {
        path: "/manage-movies", 
        element: <ManageMovies />
      },
      {
        path: "/graphql", 
        element: <GraphQL />
      },
      {
        path: "/movie", 
        element: <Movie />
      },
      {
        path: "/login", 
        element: <Login />
      },
     ]


  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);