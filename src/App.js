import {ThemeProvider } from '@ui5/webcomponents-react';

import {MyTable} from "./Table"
import {WellFilterBar} from "./FilterBarTest"
import './App.css';

function App() {
  
  return (
    <div className="App">
      
      <ThemeProvider>
        <WellFilterBar/>
        <MyTable/>
      </ThemeProvider>
    </div>
  );
}

export default App;
