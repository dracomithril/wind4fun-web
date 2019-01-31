import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const style = () => ({
  root: {
    '& .rbc-calendar': {
      minHeight: 580,
      flex: '1 1',
    },
    display: 'flex',
    flexDirection: 'column',
  },
});


const Calendar = ({ events, classes }) => (
  <div className={classes.root}>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

Calendar.propTypes = {
  classes: PropTypes.shape().isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    allDay: PropTypes.bool,
    resource: PropTypes.any,
  })),
};

Calendar.defaultProps = {
  events: [],
};

const mapStateToProps = state => ({
  events: state.data.events,
});

const styledCalendar = withStyles(style)(Calendar);
const connectedCalendar = connect(mapStateToProps)(styledCalendar);

export { styledCalendar as CalendarContainer };
export default connectedCalendar;
