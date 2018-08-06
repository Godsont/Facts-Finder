import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Button from './Components/Button'
import UserInput from './Components/UserInput'
import Fact from './Components/Fact'
import moment from 'moment'

class App extends Component {

  state = {
    startDate: moment(),
    Fact: 'Loading Fact...'
  }

  componentDidMount() {
    this.fetchFact(moment().format('M/D'));
  }

  getDate = (date) => {
    this.setState({ startDate: date }, () => {
      this.fetchFact(this.state.startDate.format('M/D'))
    })
  }

  fetchFact = (arg) => {
    fetch('http://numbersapi.com/' + arg)
      .then(res => res.text())
      .then(fact => this.setState({ Fact: fact }))
      .catch(e => console.log(e))
  }

  getRandomFact = () => {
    this.fetchFact('random/date')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="buttons">
          <Button getRandomFact={this.getRandomFact} value="Get Random Fact" />
        </div>
        <h3>OR</h3>
        <h4>Please enter your Date of Birth (Year not needed)</h4>
        <UserInput getDate={this.getDate} startDate={this.state.startDate} />
        <Fact factResult={this.state.Fact} />
      </div>
    );
  }
}

export default App;
