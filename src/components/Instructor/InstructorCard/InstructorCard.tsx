import React, { useEffect, memo } from 'react';
import { CSSTransition } from 'react-transition-group';

import { InstructorEditForm, InstructorRemoveForm } from '../index';
import { ModalCloseButton } from '../../UI/ModalView/ModalView';
import { Loader, ModalModification } from '../../UI';
import { Instructor } from '../../../store/instructors/interfaces';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { instructorAllVisitorsRequest, instructorRemoveRequest } from '../../../store/instructors/actions';
import * as selectorInstructors from '../../../store/instructors/selectors';

import * as style from './style';

interface Props {
  currentInstructor: Instructor,
  avatar: string;
  fullName: string;
  sportType: string;
};

const InstructorCard: React.FC<Props> = ({ currentInstructor, avatar, fullName, sportType }) => {
  const dispatch = useTypedDispatch();
  const allInstructorVisitors = useTypedSelector(selectorInstructors.allInstructorVisitors);
  const isProgressLoadingVisitors = useTypedSelector(selectorInstructors.isGetAllVisitors);

  const dateOfBirth: string = currentInstructor.dateOfBirth || 'Не указана';
  const sex: string = currentInstructor.sex || 'Пол не указан';

  const getInstructorDesignatedVisitors = (): React.ReactNode => {
    if (isProgressLoadingVisitors) {
      return <Loader size={45} />
    }
    if (allInstructorVisitors.length === 0) {
      return <style.TextInstructorInfo>Посетители не назначены</style.TextInstructorInfo>
    }
    return (
      allInstructorVisitors.map((visitor) => {
        return (
          <style.TextInstructorVisitorItem key={visitor.id}>
            {visitor.fullname || 'Посетитель'}
          </style.TextInstructorVisitorItem>
        );
      })
    )
  };

  useEffect(() => {
    dispatch(instructorAllVisitorsRequest(currentInstructor.id))
  }, [dispatch, currentInstructor.id]);

  return (
    <>
      <ModalModification
        title="Удаление инструктора"
        type="instructor"
        mode="remove"
        buttonOpen="removeIcon"
        identifier={currentInstructor.id}
        action={instructorRemoveRequest}
      >
        <InstructorRemoveForm
          fullName={fullName}
          avatar={avatar}
          sportType={sportType}
        />
      </ModalModification>
      <ModalModification
        title="Редактирование инструктора"
        type="instructor"
        mode="edit"
        buttonOpen="editIcon"
        identifier={currentInstructor.id}
      >
        <InstructorEditForm
          currentInstructor={currentInstructor}
          avatar={avatar}
        />
      </ModalModification>
      <style.InstructorInfoMainBox>
        <style.InstructorMediumAvatar
          alt={fullName}
          src={avatar}
        />
        <style.TextMediumInstructorName>
          {fullName}
        </style.TextMediumInstructorName>
        <style.TextSportType>
          {sportType}
        </style.TextSportType>
        <style.TextForm>
          Дата рождения
        </style.TextForm>
        <style.TextInstructorInfo>
          {dateOfBirth}
        </style.TextInstructorInfo>
        <style.TextForm>
          Пол
        </style.TextForm>
        <style.TextInstructorInfo>
          {sex}
        </style.TextInstructorInfo>
        <style.TextForm>
          Назначенные посетители
        </style.TextForm>
        <CSSTransition
          in={!isProgressLoadingVisitors}
          timeout={200}
          classNames="assigned-visitor"
          unmountOnExit
        >
          <style.InstructorAllVisitorsMainBox>
            {getInstructorDesignatedVisitors()}
          </style.InstructorAllVisitorsMainBox>
        </CSSTransition>
      </style.InstructorInfoMainBox>
      <ModalCloseButton>
        <style.ButtonOk variant="contained">
          ок
        </style.ButtonOk>
      </ModalCloseButton>
    </>
  );
};

export default memo(InstructorCard);
