import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import AdminPanel from '../../AdminPanel/AdminPanel';
import Navigation from '../../Navigation/Navigation';

import * as style from './style';

interface Props {
  open: boolean;
  onClick?: (isOpen: boolean) => void;
};

const StyledBurger = styled.button<Props>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    z-index: 2000;
    position: sticky;
    div {
        width: 30px;
        height: 4px;
        background: ${({ open }) => open ? 'var(--blue)' : 'var(--white)'};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        padding: 2px 0;
        :nth-of-type(1) {
            width:100%;
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        :nth-of-type(2) {
            width: ${({ open }) => open ? '100%' : '75%'};
            transform: ${({ open }) => open ? 'translate(0, 5px) rotatez(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burger: React.FC<Props> = ({ open, onClick }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // do not scroll the body
    }
    else {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const viewMenu = (): void => onClick && onClick(!open);

  return (
    <StyledBurger open={open} onClick={viewMenu} aria-label="menu">
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledMenu = styled.nav<Props>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: var(--white);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    min-height: 100%;
    width: 100%;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 20px;
    top: 0;
    right: 0;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    
    @media (max-width: 576px) {
        width: 100%;
    }
`;

const Menu: React.FC<Props> = ({ open }) => {

  return (
    <StyledMenu open={open}>
      <AdminPanel />
      <Navigation />
    </StyledMenu>
  );
};

const BurgerMenu: React.FC = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <style.BurgerMenu>
      <Burger open={open} onClick={setIsOpen} />
      <Menu open={open} onClick={setIsOpen} />
    </style.BurgerMenu>
  );
};

export default BurgerMenu;