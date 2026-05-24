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
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Checkbox,
  Stack,
  Switch,
  TextField,
  FormControlLabel,
  Button,
} from "@mui/material";
import { WidthFull } from "@mui/icons-material";

export default function Lesson7_8() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [progress, setProgress] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [doneColor, setDoneColor] = useState("#999999");     // 適用される色（反映用）
  const [doneColorInput, setDoneColorInput] = useState("#999999"); // 入力欄の値
  const [avatarName, setAvatarName] = useState("U"); //　反映用
  const [avatarNameInput, setAvatarNameInput] = useState("U"); //　入力欄の値
  const requirements = [
    { title: "要件 1", desc: "Lesson7-8.tsxを作成し、描画内容をすべて記載すること。" },
    { title: "要件 2", desc: "ヘッダーを作成し、画面の切り替えを適切に管理すること。" },
    { title: "要件 3", desc: "サイドメニューを作成し、マウス操作で開閉できるようにすること。" },
    { title: "要件 4", desc: "フッターを作成し、画面を切り替えられるようにすること。" },
    { title: "要件 5", desc: "ヘッダー右端にユーザーアイコンを配置すること。" },
    { title: "要件 6", desc: "進捗確認画面にチェックボックスを作成し、要件毎に進捗を管理すること。" },
    { title: "要件 7", desc: "設定画面で完了した要件の色を変えられる設定にすること。" },
    { title: "要件 8", desc: "設定画面でアバターの表示名を変えられる設定にすること。" },
  ];
  const pages = ["要件", "進捗確認", "設定"];
  const drawerWidth = 200;
  const tfw = {mt: 1, mb:1, width: "100%"};

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
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Lesson7-8 練習問題
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
          <Avatar>{avatarName}</Avatar>

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

        <Box sx={{width: 20, height: "100vh"}} />
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, mb: 8 }}>
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>{tab === 0 && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {requirements.map((item, idx) => (
                <Box key={item.title}>
                  <Typography sx={{color: progress[idx] ? doneColor : "text.primary"}} variant="h5">{item.title}</Typography>
                  <Typography sx={{color: progress[idx] ? doneColor : "text.primary"}}>{item.desc}</Typography>
                </Box>
              ))}
            </Box>
          )}</Box>
        </Box>

        {tab === 1 && (
          <Box>
            <Typography variant="h4"  sx={{fontWeight: "bold"}}>進捗確認画面</Typography>

            <Box>
              {requirements.map((item, idx) => (
                <Stack key={item.title} direction="row" spacing={1}>
                  <Checkbox checked={progress[idx]} onChange={() =>
                    setProgress((prev) => prev.map((v, i) => (i === idx ? !v : v)))
                  }/>
                  <Box>
                    <Typography sx={{fontWeight: "bold"}}>{item.title}</Typography>
                    <Typography>{item.desc}</Typography>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Box>
        )}

        {tab === 2 && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 480 }}>
            <Typography variant="h4"  sx={{fontWeight: "bold"}}>設定画面</Typography>

            {/* 要件7：完了した要件の色変更 */}
            <Box>
              <Stack direction={"row"}>
                <Typography>１．完了した要件の色：</Typography>
                <Typography sx={{ color: doneColor}}>{doneColor}</Typography>
              </Stack>

              <TextField
                label="カラーコード"
                value={doneColorInput}
                onChange={(e) => setDoneColorInput(e.currentTarget.value)}
                sx={tfw}
              />

              <br/>
              <Button variant="contained" onClick={() => setDoneColor(doneColorInput)}>
                適用
              </Button>
            </Box>

            <br/>

            {/* 要件8：アバター表示名変更 */}
            <Box>
              <Stack direction={"row"}>
                <Typography>２．アバターの表示名：</Typography>
                <Typography>{avatarName}</Typography>
              </Stack>
              <TextField
                label="アバター名"
                value={avatarNameInput}
                onChange={(e) => setAvatarNameInput(e.currentTarget.value)}
                sx={tfw}
              />

              <br/>
              <Button variant="contained" onClick={() => setAvatarName(avatarNameInput)}>
                適用
              </Button>
            </Box>
          </Box>
        )}
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
    </Box>
  );
}

