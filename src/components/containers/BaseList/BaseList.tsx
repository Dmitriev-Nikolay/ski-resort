import React, { memo } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { AddNewItem, PaginatonOnList } from '../../UI';
import { LIMIT_ON_PAGE_PEOPLE, LIMIT_ON_PAGE_SKI_PASS } from '../../../store/constants';
import { InstructorsRequest } from '../../../store/instructors/types';
import { SkiPassesRequest } from '../../../store/skiPasses/types';
import { VisitorsRequest } from '../../../store/visitors/types';

import * as style from './style';

interface Props {
  title: string;
  type: string;
  total: number;
  page: number;
  searchValue: string | number;
  action(page: number, limit: number, searchValue: string | number): InstructorsRequest | SkiPassesRequest | VisitorsRequest;
  children: React.ReactNode;
};

const BaseList: React.FC<Props> = ({ title, type, total, page, searchValue, action, children }) => {
  const limitOnPage: number = title === 'Ски-пассы' ? LIMIT_ON_PAGE_SKI_PASS : LIMIT_ON_PAGE_PEOPLE;

  return (
    <ThemeProvider theme={style.themeList}>
      <style.PaperBase>
        <style.GridBase container>
          <style.GridAdditem item xs={5} sm={5} md={7}>
            <AddNewItem
              title={title}
              type={type}
            />
          </style.GridAdditem>
          <style.GridPagination item xs={7} sm={7} md={5}>
            <PaginatonOnList
              totalItems={total}
              limit={limitOnPage}
              action={action}
              currentPage={page}
              search={searchValue}
            />
          </style.GridPagination>
        </style.GridBase>
        <style.BoxList>
          {children}
        </style.BoxList>
      </style.PaperBase>
    </ThemeProvider>
  );
};

export default memo(BaseList);