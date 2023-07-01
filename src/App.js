import {useState} from "react";
import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import Card from "./Components/Cards";
import { render } from "@testing-library/react";

const App = () => {
  render 
  const [showCounter, setShowCounter] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const [showCards, setShowCards] = useState(false);

  const handleCounterClick = () => {
    setShowCounter(true);
    setShowTimer(false);
    setShowCards(false);
  };

  const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes()
        + ":" + date.getSeconds();


  const handleCardsClick = () => {
    setShowCounter(false);
    setShowTimer(false);
    setShowCards(true);
  };

  const cardTitles = [
   <div className="column">
      'Card 1',
   </div>
  ];

  
  

  return (
    <div>
      <h1 style={{display:"flex", justifyContent:"center", textAlign: "center", paddingTop:20, color:"white", backgroundColor:"lightblue", height:80,}}>React App</h1>
      <div>
        <button onClick={handleCounterClick} style={{}}>Counter</button>
        <button onClick={showTimer}>Timer</button>
        <button onClick={handleCardsClick}>cards</button>
      </div>
      <div style={{}}>
        {showCounter ? <Counter /> : null}
        {showTimer ? <Timer /> : null}
        {showCards ? (
          cardTitles.map((title) => <Card  title={title} />)
        ) : null}
      </div>
    </div>
  );
};

export default App;

{/* <h1 align="center">Current Time</h1>
            <h2 align="center"> {showTime}</h2> */}