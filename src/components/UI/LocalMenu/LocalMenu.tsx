import React, { useState, memo } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeProvider } from "@mui/material/styles";

import { VisitorEditForm, VisitorRemoveForm } from '../../Visitor';
import { InstructorEditForm, InstructorRemoveForm } from '../../Instructor';
import { SkiPassEditForm, SkiPassRemoveForm } from '../../SkiPass';
import { ModalModification } from '../../UI';
import { Visitor } from '../../../store/visitors/interfaces';
import { Instructor } from '../../../store/instructors/interfaces';
import { SkiPass } from '../../../store/skiPasses/interfaces';
import { visitorRemoveRequest } from '../../../store/visitors/actions';
import { instructorRemoveRequest } from '../../../store/instructors/actions';
import { skiPassRemoveRequest } from '../../../store/skiPasses/actions';
import avatarSkiPass from '../../../assets/img/mountains-avatar.png';

import * as style from './style';

interface Props {
  identifier: number;
  type: string;
  currentVisitor?: Visitor;
  currentInstructor?: Instructor;
  currentSkiPass?: SkiPass;
  avatar?: string;
  fullName?: string;
  sportType?: string;
};

const LocalMenu: React.FC<Props> = ({ identifier, type, currentSkiPass, currentVisitor, currentInstructor, avatar, fullName, sportType }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpenMenu = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>): void => setAnchorEl(event.currentTarget);
  const closeMenu = (): void => setAnchorEl(null);

  const actualColorMenu = type === 'skiPass' ? 'var(--white)' : 'var(--grey-menu)';

  const setContentModalForRemoveItem = (type: string): React.ReactNode => {
    switch (type) {
      case 'visitor':
        return (
          <ModalModification
            title="Удаление посетителя"
            type="visitor"
            mode="remove"
            buttonOpen="removeMenu"
            identifier={identifier}
            action={visitorRemoveRequest}
          >
            <VisitorRemoveForm
              fullName={fullName!}
              avatar={avatar!}
              sportType={sportType!}
            />
          </ModalModification>
        );
      case 'instructor':
        return (
          <ModalModification
            title="Удаление инструктора"
            type="instructor"
            mode="remove"
            buttonOpen="removeMenu"
            identifier={identifier}
            action={instructorRemoveRequest}
          >
            <InstructorRemoveForm
              fullName={fullName!}
              avatar={avatar!}
              sportType={sportType!}
            />
          </ModalModification>
        );
      case 'skiPass':
        return (
          <ModalModification
            title="Удаление ски-пасса"
            type="skiPass"
            mode="remove"
            buttonOpen="removeMenu"
            identifier={identifier}
            action={skiPassRemoveRequest}
          >
            <SkiPassRemoveForm
              number={identifier}
              avatar={avatarSkiPass}
            />
          </ModalModification>
        );
      default:
        return null;
    };
  };

  const setContentModalForEditItem = (type: string): React.ReactNode => {
    switch (type) {
      case 'visitor':
        return (
          <ModalModification
            title="Редактирование посетителя"
            type="visitor"
            mode="edit"
            buttonOpen="editMenu"
            identifier={identifier}
            action={visitorRemoveRequest}
          >
            <VisitorEditForm
              currentVisitor={currentVisitor!}
              avatar={avatar!}
            />
          </ModalModification>
        );
      case 'instructor':
        return (
          <ModalModification
            title="Редактирование инструктора"
            type="instructor"
            mode="edit"
            buttonOpen="editMenu"
            identifier={identifier}
            action={instructorRemoveRequest}
          >
            <InstructorEditForm
              currentInstructor={currentInstructor!}
              avatar={avatar!}
            />
          </ModalModification>
        );
      case 'skiPass':
        return (
          <ModalModification
            title="Редактирование ски-пасса"
            type="skiPass"
            mode="edit"
            buttonOpen="editMenu"
            identifier={identifier}
            action={skiPassRemoveRequest}
          >
            <SkiPassEditForm currentSkiPass={currentSkiPass!} />
          </ModalModification>
        );
      default:
        return null;
    };
  };

  return (
    <>
      <style.ButtonIcon
        aria-label="more"
        id={`${type}_${identifier}`}
        aria-controls='long-menu'
        aria-expanded={isOpenMenu ? 'true' : 'false'}
        aria-haspopup="true"
        onClick={openMenu}
      >
        <MoreVertIcon sx={{ color: actualColorMenu }} />
      </style.ButtonIcon>
      <ThemeProvider theme={style.MuiMenu}>
        <style.Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={isOpenMenu}
          onClose={closeMenu}
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
        >
          {setContentModalForEditItem(type)}
          {setContentModalForRemoveItem(type)}
        </style.Menu>
      </ThemeProvider>
    </>
  );
};

export default memo(LocalMenu);