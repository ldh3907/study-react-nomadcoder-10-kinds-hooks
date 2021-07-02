import { useState } from "react";
import "./changesection.css";

const content = [
  {
    tab: "섹션 1",
    content: "섹션 1의 내용 입니다.",
  },
  {
    tab: "섹션 2",
    content: "섹션 2의 내용 입니다.",
  },
];

const ChangeSection = () => {
  const useTabs = (tabIndex, tabsContents) => {
    // if (!tabsContents || !Array.isArray(tabsContents)) {
    //   return;
    // }
    const [currentIndex, setCurrentIndex] = useState(tabIndex);
    console.log(currentIndex);
    return {
      currentItem: tabsContents[currentIndex],
      changeItem: setCurrentIndex,
    };
  };
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <section id="changesection">
      <div className="changesection-container">
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </section>
  );
};

export default ChangeSection;
