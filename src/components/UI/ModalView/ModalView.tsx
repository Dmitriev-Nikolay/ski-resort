import React, { memo, useState, createContext, useContext, cloneElement } from "react";
import { Backdrop } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from '@mui/material/styles';

import * as style from './style';

type ModalState = [boolean, (arg: boolean) => void];

const ModalContext = createContext<ModalState>([false, () => { }]); // isOpen setIsOpen
const callAll = (...fns: ((arg: boolean) => void)[]) => (...args: boolean[]) => fns.forEach((fn: (...args: boolean[]) => void) => fn && fn(...args));

const ModalMain: React.FC = memo((props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
});

interface Button {
  children: React.ReactElement;
  isValidate?: boolean;
};

const ModalCloseButton: React.FC<Button> = memo(({ isValidate = true, children }) => {
  const [, setIsOpen] = useContext<ModalState>(ModalContext);

  return cloneElement(children, {
    onClick: callAll(() => isValidate ? setIsOpen(false) : () => { }, children.props.onClick)
  });
});

const ModalOpenButton: React.FC<Button> = memo(({ children }) => {
  const [, setIsOpen] = useContext<ModalState>(ModalContext);

  return cloneElement(children, {
    onClick: callAll(() => setIsOpen(true), children.props.onClick),
  });
});

interface ModalContent {
  title: string;
  buttonOnCLose?: boolean;
};

const ModalContents: React.FC<ModalContent> = memo(({ title, buttonOnCLose, children }) => {
  const [isOpen,] = useContext<ModalState>(ModalContext);

  const defaultCloseButton =
    buttonOnCLose &&
    (<ThemeProvider theme={style.ModalCloseButton}>
      <ModalCloseButton>
        <style.ButtonIcon
          size="small"
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <CloseIcon />
        </style.ButtonIcon>
      </ModalCloseButton>
    </ThemeProvider>);

  return (
    <style.Modal
      open={isOpen}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 600,
      }}
    >
      <style.MainBoxModal>
        <style.TitleBoxModal>
          <style.ModalTitle>
            {title}
          </style.ModalTitle>
          {defaultCloseButton}
        </style.TitleBoxModal>
        {children}
      </style.MainBoxModal>
    </style.Modal>
  );
});

export { ModalMain, ModalCloseButton, ModalOpenButton, ModalContents };
