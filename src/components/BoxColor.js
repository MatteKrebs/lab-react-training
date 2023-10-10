function BoxColor(props) {
    const {r,g,b} = props;

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: 'white',
        border: '2px solid black',
        width: '400px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  return (
    <div style={divStyle}>
        <p>rgb({r} , {g} , {b})</p>
    </div>
  )
}

export default BoxColor