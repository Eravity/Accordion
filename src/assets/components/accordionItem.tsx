import { useState } from "react";
import "../../App.css";

export interface AccProps {
  key: number;
  num: number;
  title: string;
  text: string;
}

// prettier-ignore
const AccordionItem: React.FC<AccProps> = ({ num, title, text }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`item ${isOpen && 'open'} duration-200`} onClick={() => setIsOpen(!isOpen)}>
      <p className="number">{num < 9 && `${"0" + num}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
