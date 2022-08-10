import React, { memo, useLayoutEffect, useState } from 'react';
import { CSSTransition } from "react-transition-group";

const MiniCardAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <CSSTransition
      in={isMounted}
      timeout={300}
      classNames="mini-card"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default memo(MiniCardAnimation);
