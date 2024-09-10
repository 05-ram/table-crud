import { RouterProvider } from 'react-router-dom';
import './App.css';
import RouterData from './router';

function App() {
  const route = RouterData();
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
