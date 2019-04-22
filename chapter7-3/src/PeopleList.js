import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

const PeopleList = ({data}) => 
    <ol className="people-list">
        {data.results.map((person, i) => {
            const {first, last} = person.name;
            return <li key={i}>{first} {last}</li>
        })}
    </ol>

export default PeopleList;