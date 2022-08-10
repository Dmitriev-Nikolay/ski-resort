import React, { useEffect, memo } from 'react';
import { Grid, Badge } from '@mui/material';

import { ModalMain, ModalOpenButton, ModalContents } from '../UI/ModalView/ModalView';
import AdminInfo from './AdminInfo';
import { AdminCardLoading } from '../UI';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import * as selectorLogin from '../../store/login/selectors';
import { currentUserRequest } from '../../store/login/actions';

import * as style from './style';

const AdminPanel: React.FC = () => {
  const dispatch = useTypedDispatch();

  const currentUser = useTypedSelector(selectorLogin.currentUser);
  const currentUserPhoto = useTypedSelector(selectorLogin.currentUserPhoto);
  const isLoadingCurrentUser = useTypedSelector(selectorLogin.isLoadingCurrentUser);
  const avatar = currentUser?.photo ? currentUserPhoto?.photo : '/broken-image.jpg';

  useEffect(() => {
    if (!currentUser) {
      dispatch(currentUserRequest());
    }
  }, [dispatch, currentUser]);

  const viewAdminPanel = (): React.ReactNode => {
    if (isLoadingCurrentUser) {
      return <AdminCardLoading />
    }
    return (
      <style.AdminGridItem item sm={4} md={3}>
        <ModalMain>
          <ModalContents
            title="Личный кабинет администратора"
            buttonOnCLose={true}
          >
            <AdminInfo
              admin={currentUser}
              adminPhoto={avatar}
            />
          </ModalContents>
          <ModalOpenButton>
            <style.AdminStack
              direction="row"
              spacing={2}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <style.SmallAvatarEdit>
                    <style.SmallEditIcon />
                  </style.SmallAvatarEdit>
                }
              >
                <style.AdminSmallAvatar
                  alt={currentUser?.username}
                  src={avatar}
                />
              </Badge>
            </style.AdminStack>
          </ModalOpenButton>
        </ModalMain>
        <style.TextSmallAdminName>
          {currentUser?.username}
        </style.TextSmallAdminName>
        <style.TextUserRole>
          {currentUser?.roles[1]}
        </style.TextUserRole>
      </style.AdminGridItem>
    )
  };

  return (
    <style.AdminMainBox>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
      >
        {viewAdminPanel()}
      </Grid>
    </style.AdminMainBox>
  );
};

export default memo(AdminPanel);
