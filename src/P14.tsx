/**
 * https://devtools.tech/questions/s/build-a-faq-page-or-frontend-coding-challenge-or-react-js-or-html-or-css-or-javascript---qid---ayi5oGVQzM4Jkr7cIZnF
 * Compound Componentとは、parent componentとchild componentが組み合わさったcomponentでreusableでflexible.
 * createContextでcontextを作り、AccordionContext.Providerで値を渡し、children側でuseContextでそのcontextを呼び出すことで、propsの受け渡しができる。
 * これがないと、childrenに値を渡すのにいちいち定義して渡さなくてはいけないのがめんどくさい。
 *
 * 2024/11/04 1週間後とかにやってみる。
 */

import React, { useState, useEffect, useMemo, useCallback, useRef, createContext, useContext } from 'react';

const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);

const AccordionToggle = ({ children }: { children: any }) => {
  const { handlePanelClick } = useContext(AccordionContext) as any;
  const { id } = useContext(AccordionItemContext) as any;

  return <button onClick={() => handlePanelClick(id)}>{children}</button>;
};

const AccordionPanel = ({ children }: { children: any }) => {
  const { activePanel } = useContext(AccordionContext) as any;
  const { id } = useContext(AccordionItemContext) as any;

  if (id !== activePanel) {
    return null;
  }

  return <div>{children}</div>;
};

const AccordionItem = ({ id, children }: { id: number; children: any }) => {
  const value: any = useMemo(() => {
    return { id };
  }, [id]);

  return (
    <AccordionItemContext.Provider value={value}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
};

const Accordion = ({ children }: { children: any }) => {
  const [activePanel, setActivePanel] = useState(null);
  const value: any = useMemo(() => {
    return { activePanel, handlePanelClick: setActivePanel };
  }, [activePanel]);

  return (
    <AccordionContext.Provider value={value}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

export default () => {
  return (
    <>
      <div className="body">
        <Accordion>
          <AccordionItem id={1}>
            <AccordionToggle>Section 1</AccordionToggle>
            <AccordionPanel>Section 1 panel</AccordionPanel>
          </AccordionItem>
          <AccordionItem id={2}>
            <AccordionToggle>Section 2</AccordionToggle>
            <AccordionPanel>Section 2 panel</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <style>
        {`
        .body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        `}
      </style>
    </>
  );
};
