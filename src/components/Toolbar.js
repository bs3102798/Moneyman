import React from 'react';
import { ButtonGroup, Button, IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight, Settings, Today, Visibility } from '@mui/icons-material';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const NavButtonGroup = styled(ButtonGroup)`
  background-color: #1a1a1a;

  button {
    border-color: #2b2b2b;

    &:hover {
      border-color: #2b2b2b;
    }
  }

  svg {
    fill: white;
  }

  .today-btn {
    svg {
      fill: #f35815;
    }
  }
`;

export const navigateContants = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE',
};

export const views = {
  MONTH: 'month',
  WEEK: 'week',
  WORK_WEEK: 'work_week',
  DAY: 'day',
  AGENDA: 'agenda',
};

function CalendarToolbar(props) {
  const { label, onNavigate, onSetSelectedCalendarsClicked, onOpenConfigClicked } = props;

  function navigate(action) {
    onNavigate(action);
  }

  return (
    <Wrapper>
      <NavButtonGroup variant="outlined">
        <Button onClick={() => navigate(navigateContants.PREVIOUS)}><ArrowLeft /></Button>
        <Button className="today-btn" onClick={() => navigate(navigateContants.TODAY)}><Today /></Button>
        <Button onClick={() => navigate(navigateContants.NEXT)}><ArrowRight /></Button>
      </NavButtonGroup>

      <span className="rbc-toolbar-label"><b>{label}</b></span>

      <ButtonGroup>
        <IconButton onClick={() => onSetSelectedCalendarsClicked()}><Visibility /></IconButton>
        <IconButton onClick={() => onOpenConfigClicked()}><Settings /></IconButton>
      </ButtonGroup>
    </Wrapper>
  );
}

export default CalendarToolbar;
