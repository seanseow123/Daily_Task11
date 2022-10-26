import React, { Component } from 'react';

 class Score extends Component {

    constructor() {
        super();
        this.state = {
            score: 0
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log('getDerivedStateFromProps ' + state.score)

        return null;
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('Update data ' + nextState.score);
        let sc = false
        if (this.state.score < nextState.score) {
            sc = true;
        }
        else {
            sc = false;
        } 
        console.log(sc);
        return sc;
    }

    // getSnapshotBeforeUpdate = (prevProps, prevState) => {
    //     alert(prevState.score);
        
    // }

    componentDidUpdate = (prevProps, prevState) => {
        alert(prevState.score + ' has been updated to ' + this.state.score);
    }

    componentWillUnmount = () => {

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const inputScore = document.getElementById("score").value
        this.setState({
            score: inputScore
          });
        alert('Submitted score: ' + inputScore)
    }

    render() {
            return (
                    <div>
                    <p><u><b>Question 2</b></u></p>
                    <p>Current score: {this.state.score}</p>
                    <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <label>Update Score: </label><br></br>
                    <input type="number" id="score"></input>
                    <br></br><br></br>
                    <button>Submit</button>
                    </form>
                    </div>
            )
    }


}

export default Score;
