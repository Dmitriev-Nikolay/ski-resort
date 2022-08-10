import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Grid, Toolbar } from '@mui/material';
import debounce from "lodash/debounce";
import SearchIcon from '@mui/icons-material/Search';

import { DrawerLogout } from '../UI';
import { LIMIT_ON_PREVIEW_PEOPLE, LIMIT_ON_PAGE_PEOPLE, LIMIT_ON_PREVIEW_SKI_PASS, LIMIT_ON_PAGE_SKI_PASS } from '../../store/constants';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { visitorsRequest } from '../../store/visitors/actions';
import { instructorsRequest } from '../../store/instructors/actions';
import { skiPassesRequest } from '../../store/skiPasses/actions';

import * as style from './style';

const HeaderDesktop: React.FC = () => {
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
    <style.HeaderBar position="static">
      <ThemeProvider theme={style.themeToolBar}>
        <Toolbar>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sm={4} md={3} container justifyContent="center">
              <style.HomeTitleLink
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <style.NavigationLink to='/'>
                  <style.TextResort>
                    Горнолыжный курорт
                  </style.TextResort>
                </style.NavigationLink>
              </style.HomeTitleLink>
            </Grid>
            <Grid item sm={7} md={8}>
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
            <Grid item sm={1} md={1}>
              <DrawerLogout />
            </Grid>
          </Grid>
        </Toolbar>
      </ThemeProvider>
    </style.HeaderBar>
  );
};

export default memo(HeaderDesktop);