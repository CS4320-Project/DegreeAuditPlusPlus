import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Table from './Table';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fadd45',
    },
    secondary: {
      main: '#fadd45',
    },
    direction: "rtl",
  },
});

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1200,
    padding: 20,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  getPastClasses=(courses) =>{
    let pastClasses = [];
    courses.forEach(function(course){
      if (course.completed === "past") {
        pastClasses.push(course);
      }
    });
    return pastClasses;
  }
  getCurrentClasses=(courses) =>{
    let currentClasses = [];
    courses.forEach(function(course){
      if (course.completed === "current") {
        currentClasses.push(course);
      }
    });
    return currentClasses;
  }
  getOutstandingClasses=(courses) =>{
    let outstandingClasses = [];
    courses.forEach(function(course){
      if (course.completed === "outstanding") {
        outstandingClasses.push(course);
      }
    });
    return outstandingClasses;
  }

  render() {
    const { classes, theme } = this.props;

    return (
    <div className="tabby">
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Past Classes" />
            <Tab label="Current Classes" />
            <Tab label="Outstanding Classes" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >

          <TabContainer dir={theme.direction}><Table courses={this.getPastClasses(this.props.student.courses)}/></TabContainer>
          <TabContainer dir={theme.direction}><Table courses={this.getCurrentClasses(this.props.student.courses)}/></TabContainer>
          <TabContainer dir={theme.direction}><Table courses={this.getOutstandingClasses(this.props.student.courses)}/></TabContainer>

        </SwipeableViews>

      </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
