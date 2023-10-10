import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    const { profile } = useParams();
    const navigate = useNavigate();

    console.log(profile);

    return (

        <>
            <h1> Profilen til {profile} </h1>
            <button onClick={() => {navigate('/')}}>Til hovedmeny</button>
        </>
    )
}