import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#4CAF50', // A vibrant green background color
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle box shadow
    padding: '12px 0', // Padding at the top and bottom
    borderRadius: 15, // Rounded corners
    margin: '30px 100px', // Margin for spacing
    display: 'flex', // Use flex layout
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    width: '600px', // Set a fixed width
    border: '2px solid black', // Add a border
    [theme.breakpoints.down('xs')]: {
      width: '90%', // Adjust width for smaller screens (e.g., mobile)
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
