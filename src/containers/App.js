import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import NasaPhoto from '../components/NasaPhoto';

function App() {
    return (
        <Router>
            <div className='App'>
                <Route path='/' exact component={Home} />
                <Route path='/nasaphoto' component={NasaPhoto} />
            </div>
        </Router>
    );
}

export default App;
