function Greetings({ lang, name }) {
    
    if (lang === 'de') {
        return <p>Hallo {name}</p>;
    } else if (lang === 'en') {
        return <p>Hello {name}</p>;
    } else if (lang === 'es') {
        return <p>Hola {name}</p>;
    } else if (lang === 'fr') {
        return <p>Bonjour {name}</p>;
    }
}
   
  export default Greetings;