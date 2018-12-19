import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
state = {
  persons: [
    {id: '567567567sdfgxg234', name: "Annie", "age": 23},
    {id: 'dfsd234253645', name: "Hames", "age": 28},
    {id: 'asda564654sdfsdf3',name: "Montana", "age": 31}
  ],
  showPersons: false,
  selectedContainer: false
}

toggleHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({
    showPersons: !doesShow
  })
}

nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
   return p.id === id;
  });
  const person = {
    ...this.state.persons[personIndex]
  }
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons:persons});
}

changeColorHandler = (index) => {
  const isSelected = this.state.selectedContainer;
   this.setState({selectedContainer: !isSelected})
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice(); ---> slice simply gets a copy of the array & stores it in new variable
  const persons = [...this.state.persons]; //ES6: takes copy of the array into new array
  persons.splice(personIndex, 1);
  this.setState({persons:persons})
}

  render() {
    const style ={
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                    colorChanger = {this.changeColorHandler.bind(this, index)}
                    click={this.deletePersonHandler.bind(this, index)}
                    name={person.name}
                    changed={(event) => this.nameChangeHandler(event, person.id)}
                    age={person.age}
                    className={this.state.selectedContainer ? "Person" : "Person-blue"}
                    key= {person.id}/>
          })}
        </div> 
      )
      style.backgroundColor = 'red'; 
    }

    let classes = [];
      if(this.state.persons.length <= 2) {
        classes.push('red');
      }
      if(this.state.persons.length <=1) {
        classes.push('bold');
      }

    return (
      <div className="App">
        <h1>Sample Toggle Person Game</h1>
        <p className={classes.join(' ')}>This seems working as supposed !!</p>
        <button
        style={style}
        onClick={this.toggleHandler}> Show/Hide the Persons </button>
        {persons}
      </div>
    )
  }
}
export default App;
