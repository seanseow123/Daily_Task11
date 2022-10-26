import React, { Component } from 'react';
import axios from 'axios';
import ApiData from './ApiData';
import Score from './Score';

class App extends Component {
  
      constructor() {
        super();
        this.state = {
          postData: []
        }
      }

      componentDidMount = () => {
        console.log('Component did mount');

        axios.get('https://random-data-api.com/api/v2/banks?size=10&is_xml=true').then(r => {
          console.log(r.data);
          this.setState({
              postData: r.data
          });
        }).catch(err => {
          console.log(err);
        })
      }


      render() {
          return (
            <>
            <p><u><b>Question 1</b></u></p>
            <ApiData postData={this.state.postData} />
            <hr></hr>
            <Score/>
            </>
          )
      }
}

export default App;