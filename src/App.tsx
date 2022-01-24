import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

export default function App() {
    const [Animals10, setAnimals10] = useState<any>([]);
    const [Animals1, setAnimals1] = useState<any>([]);
    const fetch10Characters = () => {
        axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10").then(res => {
            // console.log(res.data);
            setAnimals10(res.data);
        }).catch(err => {
            console.log(err.message)
        });
    }
    const fetch1Characters = () => {
        axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/").then(res => {
            console.log(res.data);
            setAnimals1(res.data);
        }).catch(err => {
            console.log(err.message)
        });
    }

    useEffect(() => {
        fetch10Characters();
        fetch1Characters();
    }, [])


    return (
        <div className="App">
            <header className="App-header">
                Zoo-API
            </header>
            <div className="Item">
                <div className="Id">{Animals1.id}</div>
                <div className="Name">{Animals1.name}</div>
                <div className="AnimalType">{Animals1.animal_type}</div>
                <div className="Image">{Animals1.image_link}</div>
                <img className="Image"src={Animals1.image_link} alt="Animal Image" width="160" height="200"/>
                {/*{Object.entries(Animals1)}*/}
                {/*{Object.keys(Animals1)}*/}
                {/*{Object.values(Animals1)}*/}
            </div>
            <div className="WrapperRow">
                {/*{Animals10.map((animal, index) => (*/}
                {/*    <div className='Item' key={index}>*/}
                {/*        <div className='quantity'>*/}
                {/*            <span className="number-size"> {animal.name} </span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        </div>
    );
}

