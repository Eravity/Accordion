import Accordion from "./assets/components/accordion";
import data from "./assets/data";

const App: React.FC = (): JSX.Element => {
  return (
    <Accordion data={data}/>
  );
};

export default App;
