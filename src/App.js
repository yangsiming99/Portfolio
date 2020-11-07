import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import About from './About/About'
import NavigationBar from './navigation/navigation';
import Projects from './projects/Projects';
import Footer from './Footer/footer'

class App extends Component {

  render () {
    return (
      <div>
        {/* <NavigationBar /> */}

        <About />
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default App;
