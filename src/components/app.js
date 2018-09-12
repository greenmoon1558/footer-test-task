import React, { Component } from 'react';
import './Ubuntu.css';
import './app.css';
import './icons.css';
import './Footer.css';
import FooterHead from './FooterHead';
import Form from './Form';
import Questions from './Questions';
import FooterBottomBlock from './FooterBottomBlock';

class App extends Component {
  render() {
    return (
      <footer class="footer">
        <section class="footer__content">
        <FooterHead />
        <Form />
        <Questions/>
        <FooterBottomBlock/>
        </section>
      </footer>
    );
  }
}

export default App;