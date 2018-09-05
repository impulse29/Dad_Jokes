import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
      this.state={
        Que:'',
        Jokes:'',

      }
  
    }
    componentDidMount(){
     
      var url="https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";
      axios.get(url).then((x)=>{
      this.setState({Que:x.data.setup,
                     Jokes:x.data.punchline})
                     console.log(x.data)
     })
   }
 
  
  render() {

    return (
      <center>
    <div className="card" style={{width: "500px"}}>
        
      <div className="card-body">
        <h5 className="card-title">{this.state.Que}</h5>
        <p className="card-text">{this.state.Jokes}</p>
        <button onClick={()=>{this.componentDidMount()}} class="btn btn-primary btn-sm btn-right" style={{textAlign:'right'}}>Reload</button>
        
  </div>
</div>
</center>
    );
  }
}

export default App;
