import React, { useState, memo } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { AddNewItem } from '../../UI';

import * as style from './style';

interface Props {
  title: string;
  type: string;
  goTo?: string;
  children: React.ReactNode;
};

const Accordion: React.FC<Props> = ({ title, type, goTo, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const onViewPreview = (): void => setIsExpanded(!isExpanded);

  const linkToAll =
    goTo
      ?
      <Link
        component={RouterLink}
        to={goTo}
        underline="none"
        sx={{ display: 'flex' }}
      >
        <style.ButtonLinkToAll>
          <style.TextLinkToAll>
            Все
          </style.TextLinkToAll>
          <style.ArrowIconToAll />
        </style.ButtonLinkToAll>
      </Link>
      : null;

  return (
    <ThemeProvider theme={style.AccordionList}>
      <style.Accordion expanded={isExpanded}>
        <style.AccordionSummary
          expandIcon={<style.MoreIcon onClick={onViewPreview} />}
          aria-controls={type}
          id={title}
        >
          <AddNewItem
            title={title}
            type={type}
          />
        </style.AccordionSummary>
        <style.AccordionDetails>
          {children}
          {linkToAll}
        </style.AccordionDetails>
      </style.Accordion>
    </ThemeProvider>
  );
};

export default memo(Accordion);
