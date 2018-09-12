import React, { Component } from 'react';

class Questions extends Component {
     constructor(props) {
        super(props);
        this.state = {  
            questions: [{
                icon: "telephone",
                title: 'Have a question?',
                text: "+1 1234567890",
                text_color: "lightgreen"
            },{
                icon: "clock",
                title: 'Open mon - fri',
                text: "08:00am to 08:00pm",
                text_color: "black"
            },{
                icon: "message",
                title: 'Drop us an email',
                text: "help@yourdomain.com",
                text_color: "lightgreen"
            }] 
        };
    };

  render() {
    return (
      <ul class="questions__container">
      {this.state.questions.map((item, index)=>(
          <li class="question__item">
            <i class={"icon icon--"+item.icon}></i>
            <p class="question__title">{item.title}</p>
            <p class={"question__text color--"+item.text_color}>{item.text}</p>
          </li>
      ))}
      </ul>
    );
  }
}

export default Questions;