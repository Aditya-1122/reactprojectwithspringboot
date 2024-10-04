import React, { useState, useEffect } from 'react';

function DataFetcher() {
    // Declare a state variable for storing data
    const dataState = useState([]);
    const data = dataState[0];
    const setData = dataState[1];

    // useEffect to perform side-effects, like fetching data
    useEffect(function() {
        // Fetch data from an API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function(response) { if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
            })
            .then(function(fetchedData) {
                setData(fetchedData); // Update the data state with fetched data
            })
           
    }, []); // Empty array means the effect will run only once, after the first render

    return (
        <div>
            <h1>Fetched Data:</h1>
            <ul>
                {data.map(function(item) {
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
}

export default DataFetcher;
