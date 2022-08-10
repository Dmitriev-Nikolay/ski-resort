import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import debounce from "lodash/debounce";
import SearchIcon from '@mui/icons-material/Search';

import { DrawerLogout, BurgerMenu } from '../UI';
import { LIMIT_ON_PREVIEW_PEOPLE, LIMIT_ON_PAGE_PEOPLE, LIMIT_ON_PREVIEW_SKI_PASS, LIMIT_ON_PAGE_SKI_PASS } from '../../store/constants';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { visitorsRequest } from '../../store/visitors/actions';
import { instructorsRequest } from '../../store/instructors/actions';
import { skiPassesRequest } from '../../store/skiPasses/actions';
import logo from '../../assets/img/logo-mobile.png';

import * as style from './style';

const HeaderMobile: React.FC = () => {

  const dispatch = useTypedDispatch();
  const { pathname } = useLocation();

  const changeSearch = (event: React.ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    switch (pathname) {
      case '/visitor':
        dispatch(visitorsRequest(1, LIMIT_ON_PAGE_PEOPLE, target.value));
        break;
      case '/coach':
        dispatch(instructorsRequest(1, LIMIT_ON_PAGE_PEOPLE, target.value));
        break;
      case '/skipass':
        dispatch(skiPassesRequest(1, LIMIT_ON_PAGE_SKI_PASS, Number(target.value)));
        break;
      default:
        dispatch(visitorsRequest(1, LIMIT_ON_PREVIEW_PEOPLE, target.value));
        dispatch(instructorsRequest(1, LIMIT_ON_PREVIEW_PEOPLE, target.value));
        dispatch(skiPassesRequest(1, LIMIT_ON_PREVIEW_SKI_PASS, Number(target.value)));
        break;
    };
  };

  const optimalSearch = debounce(changeSearch, 600);

  return (
    <style.HeaderBar position="fixed">
      <ThemeProvider theme={style.themeToolBar}>
        <Toolbar>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid container item xs={2} justifyContent="center">
              <BurgerMenu />
            </Grid>
            <Grid item xs={2}>
              <style.NavigationLink to='/'>
                <style.HomeTitleLink
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                >
                  <style.Logo
                    height="28"
                    width="32"
                    src={logo}
                    alt="main-logo"
                  />
                </style.HomeTitleLink>
              </style.NavigationLink>
            </Grid>
            <Grid item xs={6}>
              <style.Search>
                <style.SearchIconWrapper>
                  <SearchIcon />
                </style.SearchIconWrapper>
                <style.SearchInput
                  placeholder="Поиск"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={optimalSearch}
                />
              </style.Search>
            </Grid>
            <Grid item xs={2}>
              <DrawerLogout />
            </Grid>
          </Grid>
        </Toolbar>
      </ThemeProvider>
    </style.HeaderBar>
  );
};

export default memo(HeaderMobile);
