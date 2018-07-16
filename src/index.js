import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props)
            this.State = 
            {
                Username: "john",
                Password: "teju"
            }
            console.log(this.State);
    
    /*this.handleClick = this.handleClick(this)*/
   function handleClick(e)

    {
        e.preventDefault();
            if(this.Username==="sai")
            {
                console.log(this.Username);
            }
                else
                {
                    console.log(this.Username);
                }
    }
}

render() {
    return(
        <form>
            <h1>Login</h1>
            <div>
            <br/>
        Username: <input type='textbox' id='Username' placeholder="Enter username" 
        onChange= {this.Username} />
         <br/> <br/>
        Password:   <input type='password' placeholder="Enter password"/> 
            </div>
                
            <button onClick={handleClick} >Submit</button>
        </form>
    )
}
}

ReactDOM.render(<App />, document.querySelector('#root'));
/*onChange={e => {
    this.setState({Username: e.target.value}) }}
value={this.state.Username} name="Username" */