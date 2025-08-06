import Gig from "./components/Gig";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <>
    <Gig band="AATE"
     image="src/assets/AATE.jpg"
     description="Live at the Bedford"
     date="July 2nd 730pm"
     location="The Bedford in Balham"/>
         <Gig band="The Band"
     image="src/assets/peter-herrmann-xCCktWOvROE-unsplash.jpg"
     description="A random band"
     date="August 2nd 730pm"
     location="The Troubadour"/>
  

    <Counter/>

    </>
  );
}

export default App;
