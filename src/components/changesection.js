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
        <div className="changesection-wrap">
          <div className="changesection-title">Change Section</div>
          <div className="changesection-content-wrap">
            <div className="changesection-button-wrap">
              {content.map((section, index) => (
                <button
                  className="changesection-button"
                  onClick={() => changeItem(index)}
                >
                  <div className="changesection-button-text">{section.tab}</div>
                </button>
              ))}
            </div>
            <div className="ChangeSection-alert">{currentItem.content}</div>
            <div className="changesetion-process">버튼을 눌러주세요</div>
            <div className="changesection-explain">
              useState 훅을 사용하여 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeSection;
