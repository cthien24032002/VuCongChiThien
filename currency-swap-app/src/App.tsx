import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';
import { routerIndex } from './router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(routerIndex);
const queryClient = new QueryClient()

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <div className="App">
        <RouterProvider router={router} />
    </div>
  </QueryClientProvider>
  );
}

export default App;
