import React, { lazy, Suspense, memo } from 'react';
import { Grid, Typography } from '@mui/material';

import { BaseLayout, BaseList } from '../../containers';
import { Loader, PeopleCardLoading } from '../../UI';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { instructorsRequest } from '../../../store/instructors/actions';
import { isMobile } from '../../../store/ui/selectors';
import * as selectorInstructors from '../../../store/instructors/selectors';

const InstructorsList = lazy(() => import('../../containers/InstructorsList/InstructorsList'));

const Instructors: React.FC = () => {
  const isMobileMode = useTypedSelector(isMobile);

  const instructors = useTypedSelector(selectorInstructors.instructors);
  const isProgressLoadingInstructors = useTypedSelector(selectorInstructors.isLoading);
  const totalInstructors = useTypedSelector(selectorInstructors.totalInstructors);
  const currentInstructorsPage = useTypedSelector(selectorInstructors.currentInstructorsPage);
  const searchValueInstructors = useTypedSelector(selectorInstructors.searchValueInstructors);
  const instructorsPhoto = useTypedSelector(selectorInstructors.instructorsPhoto);

  const viewInstructorsList = (): React.ReactNode => {
    if (isMobileMode && isProgressLoadingInstructors) {
      return <Loader size={70} />
    }
    if (!isMobileMode && isProgressLoadingInstructors) {
      return <PeopleCardLoading count={26} />
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
          title="Инструкторы"
          type="instructor"
          total={totalInstructors}
          page={currentInstructorsPage}
          searchValue={searchValueInstructors}
          action={instructorsRequest}
        >
          <Suspense fallback={fallbackLoading()}>
            {viewInstructorsList()}
          </Suspense>
        </BaseList>
      </Grid>
    </BaseLayout>
  );
};

export default memo(Instructors);
