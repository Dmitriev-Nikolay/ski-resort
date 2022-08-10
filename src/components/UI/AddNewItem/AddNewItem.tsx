import React, { memo } from 'react';
import { Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { VisitorAddForm } from '../../Visitor';
import { InstructorAddForm } from '../../Instructor';
import { SkiPassAddForm } from '../../SkiPass';
import { ModalContents, ModalMain, ModalOpenButton } from '../ModalView/ModalView';

import * as style from './style';

interface Props {
  title: string;
  type: string;
};

const AddNewItem: React.FC<Props> = ({ title, type }) => {
  const heading = title === 'Ски-пассы' ? 'Добавить новый' : 'Добавить нового';

  const setContentModalForRemoveItem = (type: string): React.ReactNode => {
    switch (type) {
      case 'visitor':
        return (
          <ModalMain>
            <ModalContents
              title="Добавить нового посетителя"
              buttonOnCLose={true}
            >
              <VisitorAddForm />
            </ModalContents>
            <ModalOpenButton>
              <style.ButtonAddNewPerson variant="outlined" startIcon={<AddIcon />} aria-label="add-new-visitor">
                <style.ButtonAddText>{heading}</style.ButtonAddText>
              </style.ButtonAddNewPerson>
            </ModalOpenButton>
          </ModalMain>
        );
      case 'instructor':
        return (
          <ModalMain>
            <ModalContents
              title="Добавить нового инструктора"
              buttonOnCLose={true}
            >
              <InstructorAddForm />
            </ModalContents>
            <ModalOpenButton>
              <style.ButtonAddNewPerson variant="outlined" startIcon={<AddIcon />} aria-label="add-new-coach">
                <style.ButtonAddText>{heading}</style.ButtonAddText>
              </style.ButtonAddNewPerson>
            </ModalOpenButton>
          </ModalMain>
        );
      case 'skiPass':
        return (
          <ModalMain>
            <ModalContents
              title="Добавить новый ски-пасс"
              buttonOnCLose={true}
            >
              <SkiPassAddForm />
            </ModalContents>
            <ModalOpenButton>
              <style.ButtonAddNewPerson variant="outlined" startIcon={<AddIcon />} aria-label="add-new-ski-pass">
                <style.ButtonAddText>{heading}</style.ButtonAddText>
              </style.ButtonAddNewPerson>
            </ModalOpenButton>
          </ModalMain>
        );
      default:
        return null;
    };
  };

  return (
    <>
      <style.TitleAccordion>
        {title}
      </style.TitleAccordion>
      <Stack direction="row" spacing={2}>
        {setContentModalForRemoveItem(type)}
      </Stack>
    </>
  );
};

export default memo(AddNewItem);
