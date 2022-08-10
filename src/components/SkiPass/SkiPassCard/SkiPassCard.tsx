import React, { useEffect, memo } from 'react';
import { CSSTransition } from 'react-transition-group';

import { SkiPassEditForm, SkiPassRemoveForm } from '../index';
import { ModalCloseButton } from '../../UI/ModalView/ModalView';
import { Loader, ModalModification } from '../../UI';
import { SkiPass } from '../../../store/skiPasses/interfaces';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { skiPassAssignedVisitorRequest, skiPassRemoveRequest } from '../../../store/skiPasses/actions';
import * as selectorSkiPasses from '../../../store/skiPasses/selectors';
import avatar from '../../../assets/img/mountains-avatar.png';

import * as style from './style';

const SkiPassCard: React.FC<{ currentSkiPass: SkiPass }> = ({ currentSkiPass }) => {
  const dispatch = useTypedDispatch();

  const assignedVisitorForCard = useTypedSelector(selectorSkiPasses.assignedVisitorForCard);
  const isLoadingAssignedVisitorForCard = useTypedSelector(selectorSkiPasses.isLoadingAssignedVisitorForCard);

  const getSkiPassDesignatedVisitors = (): React.ReactNode => {
    if (isLoadingAssignedVisitorForCard) {
      return <Loader size={35} />
    }
    if (!assignedVisitorForCard) {
      return <style.TextSkiPassInfo>Посетитель не назначен</style.TextSkiPassInfo>
    }
    return <style.TextSkiPassInfo>{assignedVisitorForCard.fullname || 'Посетитель'}</style.TextSkiPassInfo>
  };

  useEffect(() => {
    dispatch(skiPassAssignedVisitorRequest(currentSkiPass.number))
  }, [dispatch, currentSkiPass.number]);

  return (
    <>
      <ModalModification
        title="Удаление ски-пасса"
        type="skiPass"
        mode="remove"
        buttonOpen="removeIcon"
        identifier={currentSkiPass.number}
        action={skiPassRemoveRequest}
      >
        <SkiPassRemoveForm
          number={currentSkiPass.number}
          avatar={avatar}
        />
      </ModalModification>
      <ModalModification
        title="Редактирование ски-пасса"
        type="skiPass"
        mode="edit"
        buttonOpen="editIcon"
        identifier={currentSkiPass.number}
      >
        <SkiPassEditForm currentSkiPass={currentSkiPass} />
      </ModalModification>
      <style.SkiPassInfoMainBox>
        <style.SkiPassMediumAvatar
          alt="ski-pass"
          src={avatar}
        />
        <style.TextMediumSkiPassNumber>
          {currentSkiPass.number}
        </style.TextMediumSkiPassNumber>
        <style.TextForm>
          Время действия
        </style.TextForm>
        <style.TextSkiPassInfo>
          {currentSkiPass.expirationTime}
        </style.TextSkiPassInfo>
        <style.TextForm>
          цена
        </style.TextForm>
        <style.TextSkiPassInfo>
          {currentSkiPass.price}
        </style.TextSkiPassInfo>
        <style.TextForm>
          назначенный посетитель
        </style.TextForm>
        <CSSTransition
          in={!isLoadingAssignedVisitorForCard}
          timeout={200}
          classNames="assigned-visitor"
          unmountOnExit
        >
          {getSkiPassDesignatedVisitors()}
        </CSSTransition>
      </style.SkiPassInfoMainBox>
      <ModalCloseButton>
        <style.ButtonOk variant="contained">
          ок
        </style.ButtonOk>
      </ModalCloseButton>
    </>
  );
};

export default memo(SkiPassCard);
