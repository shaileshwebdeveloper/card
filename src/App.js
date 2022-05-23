import "./App.css";
import { Card } from "./components/Card";

const arrow =
  "https://cdn.iconscout.com/icon/free/png-64/arrow-1721-433973.png";

function App() {
  return (
    <>
    <Card
      bgColor = "yellowColor"
      date="28/12/2020"
      logo="https://cdn.iconscout.com/icon/free/png-64/amazon-43-432492.png"
      title="Case Study"
      company="Amazon Gift"
      pay="Pay"
      mode="Destop - Mobile"
      arrow={arrow}
    />
 
<Card
  bgColor = "yellowColor"
  date="28/12/2020"
  logo="https://cdn.iconscout.com/icon/free/png-64/amazon-43-432492.png"
  title="Case Study"
  company="Amazon Gift"
  pay="Pay"
  mode="Destop - Mobile"
  arrow={arrow}
/>

<Card
  bgColor = "greyColor"
  date="17 Sep 2020"
  logo="https://cdn.iconscout.com/icon/free/png-64/apple-1464534-1239445.png"
  title="Case Study"
  company="Amazon Gift"
  pay="Pay"
  mode="MacOS - Mobile"
  arrow={arrow}
/>
</>
  );
}

export default App;
