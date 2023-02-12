import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@material-ui/icons/VpnKey';
import HomeIcon from '@material-ui/icons/Home';
import RegisterIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';
import ShopIcon from '@material-ui/icons/Shop';
import { Navigate, parsePath, useNavigate } from 'react-router-dom';

export default function TemporaryDrawer() {

  const navigate = useNavigate();

  const routes = [
    {
      id:0,
      label:'home',
      path: '/',
      icon: HomeIcon
    },
    {
      id:1,
      label:'로그인',
      path: '/signIn',
      icon: LoginIcon
    },
    {
      id:2,
      label:'회원가입',
      path: '/signUp',
      icon: RegisterIcon
    },
    {
      id:3,
      label:'어바웃',
      path: '/about',
      icon: InfoIcon
    }

  ];

  const category = [
    {
      id:0,
      label:'카테고리',
      anchor: 'left',
    },
    {
      id:1,
      label:'정보',
      anchor: 'top',
    },
  ];

  const drawers = [
    {
      id:0,
      label:'패션',
      icon: ShopIcon
    },
    {
      id:1,
      label:'뷰티',
      icon: ShopIcon
    },
    {
      id:2,
      label:'식품',
      icon: ShopIcon
    },
    {
      id:3,
      label:'스포츠/레져/자동차',
      icon: ShopIcon
    },
    {
      id:4,
      label:'가구/인테리어',
      icon: ShopIcon
    },
    {
      id:5,
      label:'가전/디지털',
      icon: ShopIcon
    }
  ];

  const [state, setState] = React.useState({
    // left: false,
    // category: false
  });

  const toggleDrawer = (anchor, open,index) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });

    if(index>0 && routes[index]!== undefined)
      navigate(routes[index].path);

  };


  

  const activeRoute = (args) => {
    navigate(args);
  }

  const list = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"

    >
      <List>
        {routes.map((item, index) => (
          <ListItem key={index} disablePadding onClick={toggleDrawer(anchor, false, index)}>
            <ListItemButton>
                <ListItemIcon >
                  {<item.icon />}
                </ListItemIcon>
                <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const list2 = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"

    >
      <List>
        {drawers.map((item, index) => (
          <ListItem key={index} disablePadding onClick={toggleDrawer(anchor, false, index)}>
            <ListItemButton>
                <ListItemIcon >
                  {<item.icon />}
                </ListItemIcon>
                <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const a = list('top');
  const b = list2('left');

  return (
    <div>
      {category.map((item,index) => (
        <React.Fragment key={item.anchor}>
          <Button onClick={toggleDrawer(item.anchor, true)}>{item.label}</Button>
          <Drawer
            anchor={item.anchor}
            open={state[item.anchor]}
            onClose={toggleDrawer(item.anchor, false)}
          >{console.log(item,index)}
            {item.id===0?b:a}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}