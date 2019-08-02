import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import BoxList from './components/BoxList';

class App extends Component {
  

  render() {
    return (
      <div className="App" >
        <Provider store={store}>
          <BoxList/>
        </Provider>
      </div>
    );
  }
}


export default App;
