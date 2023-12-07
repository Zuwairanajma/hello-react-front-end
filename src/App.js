import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Greeting from './components/greetings';

const router = createBrowserRouter(createRoutesFromElements(
  <Route index element={<Greeting />} />,
));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store/createStore'; 

// import Greeting from './components/greetings';

// ReactDOM.render(
//   <Provider store={store}>
//     <Greeting />
//   </Provider>,
//   document.getElementById('root')
// );