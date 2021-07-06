import React, {Component} from 'react';

// lets make our component staeful by adding a constructor. you must initilize state by...
class Clicker extends Component {
    constructor(props){
        super(props);
        this.state = {num: 1};
        this.genRandom = this.genRandom.bind(this);
    }

    genRandom(){
        // we want to generate random number 1-10
        // update state with random number. so num will change.
        // when we want to change the state of something, don't forget to bind it, or it wont work.
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({num: rand});
        // we're setting num to be equal to rand, but we need to bind this genRandom funtion with the state. so go back up to construcotr and add line ... 8
    }


    render() {
        return (
            <div>
                <h1>number is | {this.state.num}</h1>
                {/* lines 26 and 27 are a ternary operator saying if the current state of num is equal to 7, display you get a cookie!. otherwise, diaply the button. */}
                {this.state.num === 7 ? <h2>You get a cookie! 🍪</h2> : <button onClick={this.genRandom}>Random Number, click here!</button> }
                {/* now we have a button below, we add onClick to say, when we click this button, we want {} to happen. in {} we add a function name. */}

            </div>
        )
    }
}

export default Clicker;