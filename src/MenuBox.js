import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MenuBox ({openMenuBox, state}) {

  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={openMenuBox(anchor, false)}
      onKeyDown={openMenuBox(anchor, false)}
    >
      <List>
        {['Professores', 'Aluno', 'Aulas', 'Agenda', 'Contato'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
     
    </div>
  );

  return (
    <div>
          <Drawer anchor={'left'} open={state['left']} onClose={openMenuBox('left', false)}>
            {list('left')}
          </Drawer>
    </div>
  );
}