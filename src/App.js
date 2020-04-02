import React from 'react';
import Button from './Button.js';

import './App.scss';

// you can tab through and the action should occur both on onClick and when you press enter
class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header" tabIndex='0'>
          <Button 
            type='primary'
            onClick={() => {console.log('you clicked me')}} 
            text='primary button'
          />
          <Button 
            type='primary'
            onClick={() => {console.log('you clicked me')}} 
            text='disabled primary button'
            disabled={true}
          />
          <Button
            type='secondary'
            onClick={() => {console.log('you clicked secondary')}}
            text='secondary button'
          />
          <Button
            type='text'
            onClick={() => {console.log('you clicked secondary')}}
            onKeyPress={this.handleKeyPress} 
            text='text button'
          />
        </div>
      </div>
    );
  }
}

export default App;
