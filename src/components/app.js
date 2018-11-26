import React, { Component } from 'react';
import Header from './header';
import {Button} from './button'

export default class App extends Component {
 constructor(props) {
   super(props)

   this.state = {
     count: 9
   }
 }

 increment(arg) {
   this.setState({count:this.state.count + arg})
 }

render() {
  return (
    <div>
      <Header/>
      <button onClick={()=> {this.increment(2)}}>counting Button</button>
      <Button className="" title="our amazing button" body="Be awesome"/>
      <Button title="second Button" dog="rover" count={this.state.count}/>
    </div>
  );
}
}