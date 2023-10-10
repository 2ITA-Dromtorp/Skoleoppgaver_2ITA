import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import profileIMG from './images/profile-image.jpg'
import json from './profiles'

export default function Profile() {

    const { profile } = useParams();
    const navigate = useNavigate();

    console.log(json.elever);

    return (
        <>
            <div className="profile">
                <div className="profilecard">
                    <h1> {profile} </h1>
                    <img src={profileIMG}></img>
                        <p>Klasse: 10330023</p>
                        <p>E-mail: example@viken.no</p>
                        <p>Tlf.: 10330023</p>
                    <button onClick={() => navigate("/")}>Til hovedmeny</button>
                </div>
            </div>
        </>
    )
}