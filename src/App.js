import './App.css';
import Wrapper from './Components/Wrapper';
import Screen from './Components/Screen';
import ButtonBox from './Components/ButtonBox';


const btnValues = [
  ["C", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


function App() {
  return (
    <div>
        <Wrapper>
            <Screen />
            <ButtonBox> 

            </ButtonBox>
        </Wrapper>
    </div>
  );
}

export default App;
