import React, { memo, useMemo } from 'react';
import { Pagination, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { InstructorsRequest } from '../../../store/instructors/types';
import { SkiPassesRequest } from '../../../store/skiPasses/types';
import { VisitorsRequest } from '../../../store/visitors/types';

import * as style from './style';

type Request = InstructorsRequest | SkiPassesRequest | VisitorsRequest;

interface Props {
  totalItems: number;
  limit: number;
  currentPage: number;
  search: string | number;
  action(page: number, limit: number, search: string | number): Request;
};

const PaginatonOnList: React.FC<Props> = (({ totalItems, limit, currentPage, search, action }) => {
  const dispatch = useTypedDispatch();
  const totalPages = useMemo(() => Math.ceil(totalItems / limit), [totalItems, limit]);
  const viewFirstOrLastButton = totalPages > 5;

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number): void => {
    if (newPage !== currentPage) {
      dispatch(action(newPage, limit, search));
    }
  };

  return (
    <ThemeProvider theme={style.Pagination}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          size="small"
          page={currentPage}
          boundaryCount={0}
          siblingCount={1}
          onChange={handleChangePage}
          showFirstButton={viewFirstOrLastButton}
          showLastButton={viewFirstOrLastButton}
        />
      </Stack>
    </ThemeProvider>
  );
});

export default memo(PaginatonOnList);
