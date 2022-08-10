import React, { lazy, Suspense } from 'react';
import { Grid, Typography } from '@mui/material';

import { BaseLayout, BaseList } from '../../containers';
import { Loader, SkiPassCardLoading } from '../../UI';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { skiPassesRequest } from '../../../store/skiPasses/actions';
import { isMobile } from '../../../store/ui/selectors';
import * as selectorSkiPasses from '../../../store/skiPasses/selectors';

const SkiPassesList = lazy(() => import('../../containers/SkiPassesList/SkiPassesList'));

const SkiPasses: React.FC = () => {
  const isMobileMode = useTypedSelector(isMobile);

  const skiPasses = useTypedSelector(selectorSkiPasses.skiPasses);
  const isProgressLoadingSkiPasses = useTypedSelector(selectorSkiPasses.isLoading);
  const totalSkiPasses = useTypedSelector(selectorSkiPasses.totalSkiPasses);
  const currentSkiPassesPage = useTypedSelector(selectorSkiPasses.currentSkiPassesPage);
  const searchValueSkiPasses = useTypedSelector(selectorSkiPasses.searchValueSkiPasses);

  const viewSkiPassesList = (): React.ReactNode => {
    if (isMobileMode && isProgressLoadingSkiPasses) {
      return <Loader size={70} />
    }
    if (!isMobileMode && isProgressLoadingSkiPasses) {
      return <SkiPassCardLoading count={5} />
    }
    if (skiPasses.length === 0) {
      return <Typography>Нет ски-пассов</Typography>
    }
    return <SkiPassesList skiPasses={skiPasses} />
  };

  return (
    <BaseLayout>
      <Grid item xs={12}>
        <BaseList
          title="Ски-пассы"
          type="skiPass"
          total={totalSkiPasses}
          page={currentSkiPassesPage}
          searchValue={searchValueSkiPasses}
          action={skiPassesRequest}
        >
          <Suspense fallback={!isMobile && <SkiPassCardLoading count={5} />}>
            {viewSkiPassesList()}
          </Suspense>
        </BaseList>
      </Grid>
    </BaseLayout>
  );
};

export default SkiPasses;
