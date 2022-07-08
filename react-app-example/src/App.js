import React from 'react';
import './App.css';

import FooterBar from './components/FooterBar';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import NoScreen from './screens/NoScreen';

class App extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
              <NavBar/>
                <h1>Hello React!</h1>
                <FooterBar/>
            </div>
        );
    }
}

export default App;