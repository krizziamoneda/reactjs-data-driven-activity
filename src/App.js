import React, { Component } from 'react';
import Ledger from './components/Ledger';
import LedgerMiddle from './components/LedgerMiddle';

class App extends Component {
  render() {
    return (
      <center>
        <div className="App">
          <div className="navbar">
            <h2>Ledger</h2>
          </div>
        
            <LedgerMiddle/> 

          
        </div>
      </center>
      
      );
    }
  }
export default App;