import React, { memo, useState } from 'react';
import { Drawer } from '@mui/material';

import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { logoutRequest } from '../../../store/login/actions';

import * as style from './style';

const DrawerLogout: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useTypedDispatch();

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent): void => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsActive(isOpen);
  };

  const logout = () => {
    dispatch(logoutRequest());
    toggleDrawer(false);
  };

  const logoutMenu = () => (
    <style.DrawerMainBox onKeyDown={toggleDrawer(false)}>
      <style.TextGetOut>
        Вы точно хотите выйти?
      </style.TextGetOut>
      <style.ButtonLogout
        variant="contained"
        onClick={logout}
      >
        <style.TextGetOutYesNo>
          Да
        </style.TextGetOutYesNo>
      </style.ButtonLogout>
      <style.ButtonLogout
        variant="contained"
        onClick={toggleDrawer(false)}
      >
        <style.TextGetOutYesNo>
          Нет
        </style.TextGetOutYesNo>
      </style.ButtonLogout>
    </style.DrawerMainBox>
  );

  return (
    <style.ExitButton>
      <style.IconLogout
        size="small"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
      >
        <style.IconLogin />
        <style.TextButtonGetOut>
          Выход
        </style.TextButtonGetOut>
      </style.IconLogout>
      <Drawer
        anchor='top'
        open={isActive}
        onClose={toggleDrawer(false)}
      >
        {logoutMenu()}
      </Drawer>
    </style.ExitButton>
  );
};

export default memo(DrawerLogout);