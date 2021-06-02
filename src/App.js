import { ThemeProvider } from '@ui5/webcomponents-react';

import {MyTable} from "./Table"
import './App.css';

function App() {
  
  return (
    <div className="App">
      <ThemeProvider>
        
      <MyTable/>
      </ThemeProvider>
    </div>
  );
}

export default App;
