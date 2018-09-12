import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div class="form__container">
        <form class="form">
            <div class="inputs">
                <input placeholder="Your Name" class="input input__name" type="text"/>
                <input placeholder="Email" class="input input__email" type="email"/>
            </div>
            <input placeholder="Subject" class="input input__subject" type="text"/>
            <textarea placeholder="Your Message" class="textarea__message"/>
            <button class="send__message__button" type="submit">Send Message</button>
        </form>
        <div class="map__container">
            <p class="map__description">This will be replaced with the Google Map</p>
        </div>
      </div>
    );
  }
}

export default Form;