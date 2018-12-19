import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className={props.className} onClick={props.colorChanger}>
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years of age!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default person;