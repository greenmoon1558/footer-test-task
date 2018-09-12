import React, { Component } from 'react';

class FooterHead extends Component {
  render() {
    return (
      <div class="footer__head">
        <i class="icon icon--big icon--message"></i>
        <p class="contact__us">contact us</p>
        <p class="greeting"><span>Say </span><span class="greeting--lightgreen">Hello !</span></p>
      </div>
    );
  }
}

export default FooterHead;