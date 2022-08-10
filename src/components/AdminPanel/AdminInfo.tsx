import React from 'react';
import { Badge } from '@mui/material';

import { ModalCloseButton } from '../UI/ModalView/ModalView';
import { UserRole } from '../../store/login/interfaces';

import * as style from './style';

interface Props {
  admin: UserRole | null;
  adminPhoto: string;
};

const AdminInfo: React.FC<Props> = ({ admin, adminPhoto }) => {

  return (
    <>
      <style.AdminInfoMainBox>
        <style.AdminStack
          direction="row"
          spacing={2}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <style.MediumAvatarEdit>
                <style.MediumEditIcon />
              </style.MediumAvatarEdit>
            }
          >
            <style.AdminMediumAvatar
              alt={admin?.username}
              src={adminPhoto}
            />
          </Badge>
        </style.AdminStack >
        <style.TextMediumAdminName>
          {admin?.username}
        </style.TextMediumAdminName>
        <style.TextUserRoleInfo>
          {admin?.roles[1]}
        </style.TextUserRoleInfo>
      </style.AdminInfoMainBox>
      <ModalCloseButton>
        <style.ButtonOk variant="contained">
          ок
        </style.ButtonOk>
      </ModalCloseButton>
    </>
  );
};

export default AdminInfo;
