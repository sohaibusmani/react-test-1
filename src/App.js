// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// // 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor(){
  //   super
  // }
  render() {
    const heading="This is heading"
    
    return (
      <div className="App">
        <Statechange uq={heading}/>
      </div>
    );
  }
}

// // const Header = (props)=>{
// //   return(
// //     <div>
// //       <h1>{props.uq}</h1>
// //       <form>
// //         <input type="text" />
// //       </form>
// //       <button>Change</button>

      
// //     </div>
// //   )
// // }

// class Statechange extends Component{
//  constructor(props){
//    super(props)
//    this.state={
//      para:""
//    }
//  }
// test = (y)=>{
// let z= 
// }

//  parag = (x)=>{
//    this.setState(
//     {
//    para: x.target.value
//     }
//    )
//  }

//   render(){
   
//     return(
//       <div>
//         <div>
//       <h1>{this.props.uq}</h1>
//       <form>
//         <input name="para" type="text" />
//       </form>
//       <button onClick={this.parag}>Change</button>

      
//     </div>
//         <p>{this.state.para}</p>
//       </div>
//     )
//   }
// }
class Statechange extends Component {
    constructor(props) {
        super(props)
        this.state = {
            para: "",
            pValue: null,
        }
    }

    setValue = () => {
        this.setState({
            pValue: this.state.para,
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        console.log(this.state.para);
        return (
            <div>
                <div>
                    <h1>{this.props.uq}</h1>
                    <form>
                        <input name="para" value={this.state.para} type="text" onChange={this.handleChange} />
                    </form>
                    <button onClick={this.setValue}>Change</button>


                </div>
                <p>{this.state.pValue}</p>
                <input value={this.state.pValue} />
            </div>
        )
    }
}

export default App;
