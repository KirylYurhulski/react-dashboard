import './App.css';
import Dashboard from './pages/Dashboard';
import '@ui5/webcomponents-icons/dist/AllIcons'
import { ThemeProvider } from '@ui5/webcomponents-react';
import { Provider } from 'react-redux';
import { store , persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <ThemeProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Dashboard/>
        </Provider>
      </PersistGate>
    </ThemeProvider>
  );
}

export default App;
