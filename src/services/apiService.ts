import axios from "axios";

// export const getCharacters = () =>
//     axios
//         .get("https://rickandmortyapi.com/api/character")
//         .then(response => response.data)


export const fetch10Characters = () =>
    axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
        .then(res => res.data)


//         // console.log(res.data);
//         setAnimals10(res.data);
//     }).catch(err => {
//         console.log(err.message)
//     });
// }
    export const fetch1Characters = () =>
        axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/")
            .then(res => res.data)