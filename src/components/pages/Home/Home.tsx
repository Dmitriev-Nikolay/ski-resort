import React, { lazy, Suspense } from 'react';
import { Grid, Typography } from '@mui/material';

import { BaseLayout } from '../../containers';
import { Accordion, Loader, PeopleCardLoading, SkiPassCardLoading } from '../../UI';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { isMobile } from '../../../store/ui/selectors';
import * as selectorVisitors from '../../../store/visitors/selectors';
import * as selectorInstructors from '../../../store/instructors/selectors';
import * as selectorSkiPasses from '../../../store/skiPasses/selectors';

const VisitorsList = lazy(() => import('../../containers/VisitorsList/VisitorsList'));
const InstructorsList = lazy(() => import('../../containers/InstructorsList/InstructorsList'));
const SkiPassesList = lazy(() => import('../../containers/SkiPassesList/SkiPassesList'));

const Home: React.FC = () => {
  const isMobileMode = useTypedSelector(isMobile);

  const visitors = useTypedSelector(selectorVisitors.visitors);
  const isProgressLoadingVisitors = useTypedSelector(selectorVisitors.isLoading);
  const visitorsPhoto = useTypedSelector(selectorVisitors.visitorsPhoto);

  const instructors = useTypedSelector(selectorInstructors.instructors);
  const isProgressLoadingInstructors = useTypedSelector(selectorInstructors.isLoading);
  const instructorsPhoto = useTypedSelector(selectorInstructors.instructorsPhoto);

  const skiPasses = useTypedSelector(selectorSkiPasses.skiPasses);
  const isProgressLoadingSkiPasses = useTypedSelector(selectorSkiPasses.isLoading);

  const viewVisitorsPreviewList = (): React.ReactNode => {
    if (isMobileMode && isProgressLoadingVisitors) {
      return <Loader size={70} />
    }
    if (!isMobileMode && isProgressLoadingVisitors) {
      return <PeopleCardLoading count={10} />
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

  const viewInstructorsPreviewList = (): React.ReactNode => {
    if (isMobileMode && isProgressLoadingInstructors) {
      return <Loader size={70} />
    }
    if (!isMobileMode && isProgressLoadingInstructors) {
      return <PeopleCardLoading count={10} />
    }
    if (instructors.length === 0) {
      return <Typography>Нет инструкторов</Typography>
    }
    return (
      <InstructorsList
        instructors={instructors}
        instructorsPhoto={instructorsPhoto}
      />
    )
  };

  const viewSkiPassesPreviewList = (): React.ReactNode => {
    if (isMobileMode && isProgressLoadingSkiPasses) {
      return <Loader size={70} />
    }
    if (!isMobileMode && isProgressLoadingSkiPasses) {
      return <SkiPassCardLoading count={3} />
    }
    if (skiPasses.length === 0) {
      return <Typography>Нет ски-пассов</Typography>
    }
    return <SkiPassesList skiPasses={skiPasses} />
  };

  const fallbackLoading = (): React.ReactFragment => {
    if (isMobileMode) {
      return <Loader size={70} />
    }
    return <PeopleCardLoading count={10} />
  };

  return (
    <BaseLayout>
      <Grid item xs={12}>
        <Accordion
          title="Посетители"
          goTo="/visitor"
          type="visitor"
        >
          <Suspense fallback={fallbackLoading()}>
            {viewVisitorsPreviewList()}
          </Suspense>
        </Accordion>
      </Grid>
      <Grid item xs={12}>
        <Accordion
          title="Инструкторы"
          goTo="/coach"
          type="instructor"
        >
          <Suspense fallback={fallbackLoading()}>
            {viewInstructorsPreviewList()}
          </Suspense>
        </Accordion>
      </Grid>
      <Grid item xs={12}>
        <Accordion
          title="Ски-пассы"
          goTo="/skipass"
          type="skiPass"
        >
          <Suspense fallback={!isMobile && <SkiPassCardLoading count={3} />}>
            {viewSkiPassesPreviewList()}
          </Suspense>
        </Accordion>
      </Grid>
    </BaseLayout>
  );
};

export default Home;
