import React from 'react';
import { Grid } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import AdminPanel from '../../AdminPanel/AdminPanel';
import Header from '../../Header/Header';
import Navigation from '../../Navigation/Navigation';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { isMobile } from '../../../store/ui/selectors';

import * as style from './style';

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobileMode = useTypedSelector(isMobile);

  return (
    <style.GridMain container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        draggable
      />
      <style.GridHeader item sm={12} md={12}>
        <style.BoxContent>
          <Header isMobileMode={isMobileMode} />
        </style.BoxContent>
      </style.GridHeader>
      <style.GridAdminPanel item sm={12} md={12}>
        <style.BoxContent>
          <AdminPanel />
        </style.BoxContent>
      </style.GridAdminPanel>
      <Grid container item md={12}>
        <style.BoxContentBase>
          <style.GridNavigation item sm={4} md={3}>
            <Navigation />
          </style.GridNavigation>
          <style.GridContent item sm={8} md={9}>
            <style.GridContentContainer container item spacing={3} sm={12} md={12}>
              {children}
            </style.GridContentContainer>
          </style.GridContent>
        </style.BoxContentBase>
      </Grid>
    </style.GridMain>
  );
};

export default BaseLayout;
