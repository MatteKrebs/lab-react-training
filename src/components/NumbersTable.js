import './NumbersTable.css';

const NumbersTable = ({ limit }) => {
    // Create an array to hold the numbers from 1 to the limit
    const numbers = Array.from({ length: limit }, (_, index) => index + 1);
  
    return (
      <div className="numbers-table">
        {numbers.map((number, index) => (
          <div
            key={number}
            className={`number ${number % 2 === 0 ? 'red' : ''}`}
          >
            {number}
          </div>
        ))}
      </div>
    );
  };
  
  export default NumbersTable;