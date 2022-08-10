import React, { memo } from 'react';

import { SkiPassCard } from '../index';
import { LocalMenu, MiniCardAnimation } from '../../UI';
import { ModalMain, ModalOpenButton, ModalContents } from '../../UI/ModalView/ModalView';
import { SkiPass } from '../../../store/skiPasses/interfaces';

import * as style from './style';

const SkiPassMiniCard: React.FC<{ currentSkiPass: SkiPass }> = ({ currentSkiPass }) => {

  return (
    <MiniCardAnimation>
      <ModalMain>
        <ModalContents title="Карточка ски-пасса">
          <SkiPassCard currentSkiPass={currentSkiPass} />
        </ModalContents>
        <style.MainGridSkiPass item xs={12} >
          <ModalOpenButton>
            <style.MainGridSkiPassInfo>
              <style.TextSkiPassTime>
                {currentSkiPass.expirationTime}
              </style.TextSkiPassTime>
              <style.TextSkiPassPrice>
                {currentSkiPass.price} р
              </style.TextSkiPassPrice>
            </style.MainGridSkiPassInfo>
          </ModalOpenButton>
          <style.BoxLocalMenu>
            <LocalMenu
              identifier={currentSkiPass.number}
              type="skiPass"
              currentSkiPass={currentSkiPass}
            />
          </style.BoxLocalMenu>
        </style.MainGridSkiPass>
      </ModalMain>
    </MiniCardAnimation>
  );
};

export default memo(SkiPassMiniCard);