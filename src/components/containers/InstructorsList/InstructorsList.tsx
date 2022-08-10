import React, { memo } from 'react';

import { InstructorMiniCard } from '../../Instructor';
import { Instructor } from '../../../store/instructors/interfaces';

import * as style from './style';

interface Props {
  instructors: Instructor[];
  instructorsPhoto: string[];
};

const InstructorsList: React.FC<Props> = ({ instructors, instructorsPhoto }) => {
  const viewInstructorsList = (): React.ReactNode => {
    return (
      instructors?.map((instructor: Instructor, i) => (
        <InstructorMiniCard
          key={instructor.id}
          currentInstructor={instructor}
          photo={instructorsPhoto[i]}
        />
      ))
    );
  };

  return (
    <style.GridList
      container
      spacing={2}
    >
      {viewInstructorsList()}
    </style.GridList>
  );
};

export default memo(InstructorsList);
