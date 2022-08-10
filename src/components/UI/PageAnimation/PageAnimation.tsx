import React, { memo } from 'react';
import { match } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

interface Props {
  match: match<{}> | null;
  timeout: number;
  cssClass: string;
  node: React.MutableRefObject<null>;
  children: React.ReactNode;
};

const PageAnimation: React.FC<Props> = ({ match, timeout, cssClass, node, children }) => {
  
  return (
    <CSSTransition
      in={match !== null}
      timeout={timeout}
      classNames={cssClass}
      unmountOnExit
    >
      <div ref={node} className={cssClass}>
        {children}
      </div>
    </CSSTransition>
  )
};

export default memo(PageAnimation);
