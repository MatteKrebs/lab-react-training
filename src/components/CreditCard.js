import '../components/CreditCard.css';
import Visa from '../assets/images/visa.png';
import Mastercard from '../assets/images/mastercard.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) 
{
  const lastFour = number.slice(-4);
  let cardType;

  if (type === 'Visa') {
    cardType = Visa;
  } else if (type === 'Master Card') {
    cardType = Mastercard;
  } else {
    cardType = '';
  }

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color }}>
      <div className="card-type">
        <img src={cardType} alt="type" />
      </div>
      <div className="card-number">**** **** **** {lastFour}</div>
      <div className="card-expiration">
        Expires: {expirationMonth}/{expirationYear}
      </div>
      <div className="card-bank">{bank}</div>
      <div className="card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;