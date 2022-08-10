import React, { memo } from 'react';
import moment from 'moment';

import { VisitorEditForm, VisitorRemoveForm } from '../index';
import { ModalCloseButton } from '../../UI/ModalView/ModalView';
import { ModalModification } from '../../UI';
import { Visitor } from '../../../store/visitors/interfaces';
import { visitorRemoveRequest } from '../../../store/visitors/actions';

import * as style from './style';

interface Props {
  currentVisitor: Visitor,
  avatar: string;
  fullName: string;
  sportType: string;
};

const VisitorCard: React.FC<Props> = ({ currentVisitor, avatar, fullName, sportType }) => {
  const dateOfBirth: string = currentVisitor.dateOfBirth ? moment(currentVisitor.dateOfBirth, 'yyyy-MM-DD').format('yyyy-MM-DD') : 'Не указана';
  const visitorSkiPassNumber: number | string = currentVisitor.skiPass?.number || 'Ски-пасс не присвоен';
  const visitorDesignatedInstructor: string = currentVisitor.coach?.fullname || 'Тренер не назначен';

  return (
    <>
      <ModalModification
        title="Удаление посетителя"
        type="visitor"
        mode="remove"
        buttonOpen="removeIcon"
        identifier={currentVisitor.id}
        action={visitorRemoveRequest}
      >
        <VisitorRemoveForm
          fullName={fullName}
          avatar={avatar}
          sportType={sportType}
        />
      </ModalModification>
      <ModalModification
        title="Редактирование посетителя"
        type="visitor"
        mode="edit"
        buttonOpen="editIcon"
        identifier={currentVisitor.id}
      >
        <VisitorEditForm
          currentVisitor={currentVisitor}
          avatar={avatar}
        />
      </ModalModification>
      <style.VisitorInfoMainBox>
        <style.VisitorMediumAvatar
          alt={fullName}
          src={avatar}
        />
        <style.TextMediumVisitorName>
          {fullName}
        </style.TextMediumVisitorName>
        <style.TextSportType>
          {sportType}
        </style.TextSportType>
        <style.TextForm>
          Дата рождения
        </style.TextForm>
        <style.TextVisitorInfo>
          {dateOfBirth}
        </style.TextVisitorInfo>
        <style.TextForm>
          Номер ски-пасса
        </style.TextForm>
        <style.TextVisitorInfo>
          {visitorSkiPassNumber}
        </style.TextVisitorInfo>
        <style.TextForm>
          Назначенный тренер
        </style.TextForm>
        <style.TextVisitorInfo>
          {visitorDesignatedInstructor}
        </style.TextVisitorInfo>
      </style.VisitorInfoMainBox>
      <ModalCloseButton>
        <style.ButtonOk variant="contained">
          ок
        </style.ButtonOk>
      </ModalCloseButton>
    </>
  );
};

export default memo(VisitorCard);
