import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

export default function App() {
    const [Animals10, setAnimals10] = useState([]);
    const [Animals1, setAnimals1] = useState([]);
    const fetch10Characters = () => {
        axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10").then(res => {
            console.log(res.data);
            setAnimals10(res.data);
        }).catch(err => {
            console.log(err.message)
        });
    }

    useEffect(() => {
        fetch10Characters();
    }, [])


    return (
        <div className="App">
            <header className="App-header">
                Zoo-API
            </header>
            <div className="WrapperRow">
                {Animals10.map()}
                <div className="Item">

                </div>
            </div>
        </div>
    );
}

