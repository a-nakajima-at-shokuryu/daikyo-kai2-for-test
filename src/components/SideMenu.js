import React from 'react';
import { makeStyles } from '@material-ui/core'; 
import Drawer from '@material-ui/core/Drawer'; 
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; 
import ListItemIcon from '@material-ui/core/ListItemIcon'; 
import Tooltip from '@material-ui/core/Tooltip';
import ListItemText from '@material-ui/core/ListItemText'; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { switchRouterLinkProps } from '../utils/common'; 

const SideMenu = ({
  className, 
  open, 
  chevronClick, 
  links = [], 
  ...other 
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        className={clsx(classes.root, className)}
        classes={{
          paper: clsx(classes.root, className), 
        }}
        {...other}
      >
        <SideMenuHeader 
          classes={classes} 
          onClick={chevronClick}
          open={open}
        />
        
        <Divider />

        <List>
          {links.map(({ name, title, icon, to }) => (
            <Tooltip key={name} title={title}>
              <ListItem button
                {...switchRouterLinkProps(to)}
              >
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText>
                  {title}
                </ListItemText>
              </ListItem>
            </Tooltip>
          ))}
        </List>

      </Drawer>
    </React.Fragment>
  )
}

export default SideMenu;

const SideMenuHeader = ({
  classes, 
  onClick, 
  open, 
  ...other 
}) => {
  return (
    <div className={classes.toolbar} {...other}>
      <IconButton onClick={onClick}>
        {open 
          ? <ChevronLeftIcon />
          : <ChevronRightIcon />
        }
      </IconButton>
    </div>
  );
};



const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex', 
    alignItems: 'center', 
    ...theme.mixins.toolbar, 
  }, 
}));