import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Routes } from './routes';

import { ThemeProvider } from './providers/ThemeProvider';
import { OrdersProvider } from './providers/OrdersProvider';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export const App = () => {
  return (
    <OrdersProvider>
      <ThemeProvider>
        <Routes />
        <ToastContainer
          autoClose={3000}
          pauseOnHover={false}
          position="top-left"
          style={{ width: 'max-content' }}
        />
        <ThemeSwitcher />
      </ThemeProvider>
    </OrdersProvider>
  );
};
