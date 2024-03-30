import AccordionItem from "./accordionItem";
import { AccProps } from "./accordionItem";

interface AccordionProps {
  data: AccProps[];
}

// prettier-ignore
const Accordion: React.FC<AccordionProps> = ({ data }) => {

  return (
    <div className="accordion">
      {data.map((item, i: number) => (<AccordionItem key={item.key} title={item.title} text={item.text} num={i + 1}/>))}
    </div>
  );
};

export default Accordion;
