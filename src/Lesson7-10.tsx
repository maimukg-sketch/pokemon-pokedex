import * as React from "react";
import {useState} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Box,
  Paper,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  Button,
  Slider,
  Divider,
} from "@mui/material";

// 要件3（テキストの横にアイコン）
// 要件4（ボタン内にアイコン）
// 要件5（スライダー値でバッテリーアイコン切替）
// 要件6：自作SVGの星アイコン 

import { 
  DirectionsCar,
  Train,
  Flight,
  Email,
  Phone,
  BatteryFull,
  Battery50,
  Battery0Bar}  from "@mui/icons-material";

export default function Lesson7_10() {
    const [battery, setBattery] = useState<number>(100);
    const marks = [
            {value: 0, label: "0%"},
            {value: 50, label: "50%"},
            {value: 100, label: "100%"},
    ];

    function getBatteryIcon(){
      let BatteryIcon = BatteryFull;
      
      switch (battery) {
        case 100:
            BatteryIcon = BatteryFull;
            break;
    
        case 0:
            BatteryIcon = Battery0Bar;
            break;
    
        //breakせずに次の処理を書くと同じ結果をまとめることができる。
        case 50:
        default:
            BatteryIcon = Battery50;
            break;
      }
      return <BatteryIcon sx={{fontSize:40}} />;
    }

//useEfect利用も視野。より機能的。
    function BatterySection(v:number) {
      setBattery(v);
    }

//  if (battery == 100){
//    BatteryIcon = BatteryFull
//  } else if (battery == 0){
//    BatteryIcon = Battery0Bar
//  } else{
//    BatteryIcon = Battery50
//  }

  const StarIcon = ({ color = "black", size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 3L8 8H2L8 11L4 17L10 13L16 17L12 11L18 8H12Z" />
    </svg>
  );

  const rating = 3;

  const theme = createTheme({
    palette: {
        primary: {main: "#1976d2"},
        secondary: {main: "#000000"}
    },
    typography: {
        body1: { fontWeight: 500,
              fontSize: 10
        },
    }, 
  }
);

  return (
    <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Box>

                    <Box>
                        <AppBar>
                            <Toolbar>
                                <Typography variant="h5">Lesson7-10 練習問題</Typography>
                            </Toolbar>
                        </AppBar>
                        <Toolbar/>
                    </Box>

                    <Box sx={{ mt: 1 ,pl:5 , pr:5 }}>
                            <Typography variant="h5">要件 1</Typography>
                            <Typography variant="body1">
                                Lesson7-10.tsxを作成し、描画内容をすべて記述すること。
                            </Typography>
                            <Typography variant="h5" sx={{ mt: 2 }}>
                                要件 2
                            </Typography>
                            <Typography variant="body1">
                                各要件に合うようにカアイコンを表示すること。
                            </Typography>
                    </Box>

                    <Box sx={{ mt: 3 ,pl:5 , pr:5 }}>
                        <Stack direction="row" spacing={2}>
                            <Card sx={{ flex: 1 , p:3 }}>
                                <Typography variant="h5">要件 3</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    テキストの横にアイコンを表示すること。
                                </Typography>

                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DirectionsCar sx={{ color: "secondary.main" }}/>
                                        </ListItemIcon>
                                        <ListItemText primary="自動車" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <Train sx={{ color: "secondary.main" }}/>
                                        </ListItemIcon>
                                        <ListItemText primary="電車" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <Flight sx={{ color: "secondary.main" }}/>
                                        </ListItemIcon>
                                        <ListItemText primary="飛行機" />
                                    </ListItem>
                                </List>    
                            </Card>

                            <Card sx={{ flex: 1  , p:3 }}>
                                <Typography variant="h5">要件 4</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    ボタンを作成し、適切なアイコンを表示すること。
                                </Typography>
                                <Stack spacing={2}>
                                    <Button variant="contained" startIcon={<Email/>}>
                                        メール
                                    </Button>
                                    <Button variant="contained" startIcon={<Phone/>}>
                                        電話
                                    </Button>
                                </Stack>
                            </Card>
                        </Stack>
                    </Box>

                    <Box sx={{ mt: 3 ,pl:5 , pr:5 }}>
                        <Paper sx={{ p:2 }}>
                            <Typography variant="h5">要件 5</Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                スライダーを作成し、値に応じてバッテリー残量１００%／５０%／０%のアイコンを表示すること。
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                {getBatteryIcon()}
                                <Box sx={{ flex: 1 }}>
                                    <Slider
                                        value={battery}
                                        onChange={(_, v) => BatterySection(v as number)}
                                        step={50}
                                        marks={marks}
                                        min={0}
                                        max={100}
                                        valueLabelDisplay="auto"
                                        sx={{ width: 200 }} 
                                    />
                                </Box>
                            </Stack>
                        </Paper>
                    </Box>

                    <Box sx={{ mt: 3 ,pl:5 , pr:5 }}>
                        <Paper sx={{ p:2 }}>
                            <Typography variant="h5">要件 6</Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                SVGを使用して星型のアイコンを表示すること。
                            </Typography>

                            <Stack  direction="row" spacing={1} >
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        size={70}
                                        color={i < rating ? "#f59e0b" :  "#bdbdbd"}
                                    />
                                ))}
                            </Stack>
                        </Paper>
                    </Box>

                </Box>

            </ThemeProvider>
    </div>
  );
}

