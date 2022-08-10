import React, { memo } from 'react';

import { VisitorMiniCard } from '../../Visitor';
import { Visitor } from '../../../store/visitors/interfaces';

import * as style from './style';

interface Props {
  visitors: Visitor[];
  visitorsPhoto: string[];
};

const VisitorsList: React.FC<Props> = ({ visitors, visitorsPhoto }) => {
  const viewVisitorsList = (): React.ReactNode => {
    return (
      visitors?.map((visitor: Visitor, i) => (
        <VisitorMiniCard
          key={visitor.id}
          photo={visitorsPhoto[i]}
          currentVisitor={visitor}
        />
      ))
    );
  };

  return (
    <style.GridList
      container
      spacing={2}
    >
      {viewVisitorsList()}
    </style.GridList>
  );
};

export default memo(VisitorsList);
