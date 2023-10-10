import './IdCard.css'

const IdCard = (props) => {
    return(
        <div className="idcard">
            <div className="idcard-picture">
                <img src={props.picture} alt="" />
            </div>
            <ul className='idinfo'>
            <li>First name: {props.firstName}</li>
            <li>Last name: {props.lastName}</li>
            <li>Gender: {props.gender}</li>
            <li>Height: {props.height}</li>
            <li>Birth:{props.birth.toString().slice(0,15)}</li> 
            </ul>

        </div>
    )
}

export default IdCard;