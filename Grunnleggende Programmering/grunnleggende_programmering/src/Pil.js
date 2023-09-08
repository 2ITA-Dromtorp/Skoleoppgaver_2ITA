import arrowup from './images/arrow_up.png';
import arrowdown from './images/arrow_down.png';

// En komponent som heter Pil. Den eksporteres.
export default function Pil() {

    return (

        <div className='box'>
            <img src={arrowup} alt="arrow up" onClick={console.log('onclick works')}/>
            <p> 0 </p>
            <img src={arrowdown} alt="arrow down" onClick={console.log('onclick works')}/>
        </div>
    )

}
