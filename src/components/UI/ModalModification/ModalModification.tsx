import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { toast } from 'react-toastify';

import { ModalCloseButton, ModalContents, ModalMain, ModalOpenButton } from '../ModalView/ModalView';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { VisitorRemoveRequest } from '../../../store/visitors/types';
import { InstructorRemoveRequest } from '../../../store/instructors/types';
import { SkiPassRemoveRequest } from '../../../store/skiPasses/types';
import {
  LIMIT_ON_PAGE_PEOPLE,
  LIMIT_ON_PAGE_SKI_PASS,
  LIMIT_ON_PREVIEW_PEOPLE,
  LIMIT_ON_PREVIEW_SKI_PASS
} from '../../../store/constants';

import * as style from './style';

type RemoveRequest = VisitorRemoveRequest | InstructorRemoveRequest | SkiPassRemoveRequest;

interface Props {
  title: string;
  type: string;
  mode?: string;
  buttonOpen?: string;
  action?: (identifier: number, limit: number) => RemoveRequest;
  identifier: number;
  children: React.ReactNode;
};

const ModalModification: React.FC<Props> = ({ title, type, mode, buttonOpen, identifier, action, children }) => {
  const dispatch = useTypedDispatch();
  const { pathname } = useLocation();

  const handleRemoveCurrentItem = (type: string) => (event: React.MouseEvent): void => {
    switch (type) {
      case 'skiPass':
        toast.success("Ски-пасс удален!", { autoClose: 1500 });
        if (pathname === '/') {
          if (action) dispatch(action(identifier, LIMIT_ON_PREVIEW_SKI_PASS));
        } else {
          if (action) dispatch(action(identifier, LIMIT_ON_PAGE_SKI_PASS));
        }
        break;
      default:
        toast.success("Персонаж удален!", { autoClose: 1500 });
        if (pathname === '/') {
          if (action) dispatch(action(identifier, LIMIT_ON_PREVIEW_PEOPLE));
        } else {
          if (action) dispatch(action(identifier, LIMIT_ON_PAGE_PEOPLE));
        }
        break;
    }
  };

  const variantButtonClose =
    mode === 'edit'
      ?
      null
      :
      <ModalCloseButton>
        <style.ButtonOk
          variant="contained"
          onClick={handleRemoveCurrentItem(type)}
        >
          ок
        </style.ButtonOk>
      </ModalCloseButton>

  const actualButtonOpen = (buttonOpen?: string): React.ReactElement => {
    switch (buttonOpen) {
      case 'removeIcon':
        return (
          <style.ButtonIconRemove
            size="small"
            edge="start"
          >
            <DeleteIcon />
          </style.ButtonIconRemove>
        );
      case 'editIcon':
        return (
          <style.ButtonIconEdit
            size="small"
            edge="start"
          >
            <CreateIcon />
          </style.ButtonIconEdit>
        );
      case 'editMenu':
        return <style.ItemMenu>Редактировать</style.ItemMenu>;
      case 'removeMenu':
        return <style.ItemMenu>Удалить</style.ItemMenu>;
      default:
        return <style.ItemMenu>Назначить</style.ItemMenu>;
    }
  };

  return (
    <ModalMain>
      <ModalContents
        title={title}
        buttonOnCLose={true}
      >
        {children}
        {variantButtonClose}
      </ModalContents>
      <ThemeProvider theme={style.themeModificationButton}>
        <ModalOpenButton>
          {actualButtonOpen(buttonOpen)}
        </ModalOpenButton>
      </ThemeProvider>
    </ModalMain>
  );
};

export default memo(ModalModification);
