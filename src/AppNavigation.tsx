import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";

export default function AppNavigation() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);

  const pages = ["ホーム", "設定"];
  const drawerWidth = 200;

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <List>
        {pages.map((text, index) => (
          <ListItem
            key={text}
            onClick={() => {
              setTab(index);
              setOpen(false);
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ナビゲーションサンプル
          </Typography>

          <Tabs
            value={tab}
            onChange={(_: React.SyntheticEvent, v: number) => setTab(v)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            {pages.map((page) => (
              <Tab key={page} label={page} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>

      <Box
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Drawer
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ sx: { width: drawerWidth } }}
        >
          {drawer}
        </Drawer>

        <Box sx={{width: 20, height: "100vh", bgcolor: "transparent", }} />
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, mb: 8 }}>
        {tab === 0 && <Typography>ホーム画面</Typography>}
        {tab === 1 && <Typography>設定画面</Typography>}
      </Box>

      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          value={tab}
          onChange={(_: React.SyntheticEvent, v: number) => setTab(v)}
          showLabels={true}
        >
          {pages.map((page) => (
            <BottomNavigationAction key={page} label={page} />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

