import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }
   render(){
       return (
           <div>
               <h1>Hello, World!</h1>
               <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
           </div>
       );
   }
}

function App(){
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
       
    );
}

ReactDOM.render(
   <App />,
    document.getElementById('root')
);