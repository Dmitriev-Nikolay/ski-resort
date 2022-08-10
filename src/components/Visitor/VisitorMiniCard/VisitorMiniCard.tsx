import React, { memo } from 'react';

import { VisitorCard } from '../index';
import { LocalMenu, MiniCardAnimation } from '../../UI';
import { ModalMain, ModalOpenButton, ModalContents } from '../../UI/ModalView/ModalView';
import { Visitor } from '../../../store/visitors/interfaces';
import { getAge } from '../../../utils/getAge';

import * as style from './style';

interface Props {
  currentVisitor: Visitor;
  photo: string;
};

const VisitorMiniCard: React.FC<Props> = ({ currentVisitor, photo }) => {
  const age: string = currentVisitor.dateOfBirth ? getAge(currentVisitor.dateOfBirth) : 'Не указано (лет)';
  const avatar: string = currentVisitor.photo ? photo : '/broken-image.jpg';
  const fullNameVisitor: string = currentVisitor.fullname || 'Посетитель';
  const sportType: string = currentVisitor.sportType || 'Не указан';

  return (
    <MiniCardAnimation>
      <style.GridMain item container xs={6} sm={12} md={6}>
        <style.GridContent item container xs={12} sm={9} md={11}>
          <ModalMain>
            <ModalContents title="Карточка посетителя">
              <VisitorCard
                currentVisitor={currentVisitor}
                avatar={avatar}
                fullName={fullNameVisitor}
                sportType={sportType}
              />
            </ModalContents>
            <ModalOpenButton>
              <style.GridAvatar item sm={3} md={2}>
                <style.VisitorAvatar
                  src={avatar}
                  alt={fullNameVisitor}
                />
              </style.GridAvatar>
            </ModalOpenButton>
          </ModalMain>
          <style.GridText item sm={6} md={8}>
            <style.TextVisitorname>
              {fullNameVisitor}
            </style.TextVisitorname>
            <style.TextAge>
              {age}
            </style.TextAge>
          </style.GridText>
        </style.GridContent>
        <style.GridLocal item sm={3} md={1}>
          <LocalMenu
            identifier={currentVisitor.id}
            type="visitor"
            avatar={avatar}
            fullName={fullNameVisitor}
            currentVisitor={currentVisitor}
            sportType={sportType}
          />
        </style.GridLocal>
      </style.GridMain>
    </MiniCardAnimation>
  );
};

export default memo(VisitorMiniCard);
