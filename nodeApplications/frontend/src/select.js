import axios from "axios";

export default function Select() {
    
const getCustomersData = () => {
    axios
        .get("http://localhost:3000/")
        .then((data) => console.log(data))
        .catch(error => console.log(error));
};
getCustomersData();

    return (
        <div>  Her kommer en tabell om databasen vår </div>
    )
}