import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { TableBar } from '@mui/icons-material'

const pages = [
  { text: 'Product List', link: 'ProductList' },
  { text: 'Product Register', link: 'ProductRegister' },
  { text: 'Category Register', link: 'CategoryRegister' },
  { text: 'Category List', link: 'CategoryList' },
]

export default function Menu({ onChangePage }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => onChangePage(item.link)}>
              <ListItemIcon>
                <TableBar />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
