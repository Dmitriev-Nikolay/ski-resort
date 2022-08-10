import React, { lazy, Suspense } from 'react';
import { Grid, Typography } from '@mui/material';

import { BaseLayout, BaseList } from '../../containers';
import { Loader, PeopleCardLoading } from '../../UI';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { visitorsRequest } from '../../../store/visitors/actions';
import { isMobile } from '../../../store/ui/selectors';
import * as selectorVisitors from '../../../store/visitors/selectors';

const VisitorsList = lazy(() => import('../../containers/VisitorsList/VisitorsList'));

const Visitors: React.FC = () => {
  const isMobileMode = useTypedSelector(isMobile);

  const visitors = useTypedSelector(selectorVisitors.visitors);
  const isProgressLoadingVisitors = useTypedSelector(selectorVisitors.isLoading);
  const totalVisitors = useTypedSelector(selectorVisitors.totalVisitors);
  const currentVisitorsPage = useTypedSelector(selectorVisitors.currentVisitorsPage);
  const searchValueVisitors = useTypedSelector(selectorVisitors.searchValueVisitors);
  const visitorsPhoto = useTypedSelector(selectorVisitors.visitorsPhoto);

  const viewVisitorsList = (): React.ReactNode => {
    if (isMobileMode && isProgressLoadingVisitors) {
      return <Loader size={70} />
    }
    if (!isMobileMode && isProgressLoadingVisitors) {
      return <PeopleCardLoading count={26} />
    }
    if (visitors.length === 0) {
      return <Typography>Нет посетителей</Typography>
    }
    return (
      <VisitorsList
        visitors={visitors}
        visitorsPhoto={visitorsPhoto}
      />
    );
  };

  const fallbackLoading = (): React.ReactFragment => {
    if (isMobileMode) {
      return <Loader size={70} />
    }
    return <PeopleCardLoading count={26} />
  };

  return (
    <BaseLayout>
      <Grid item xs={12}>
        <BaseList
          title="Посетители"
          type="visitor"
          total={totalVisitors}
          page={currentVisitorsPage}
          searchValue={searchValueVisitors}
          action={visitorsRequest}
        >
          <Suspense fallback={fallbackLoading()}>
            {viewVisitorsList()}
          </Suspense>
        </BaseList>
      </Grid>
    </BaseLayout>
  );
};

export default Visitors;
