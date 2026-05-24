import * as React from "react";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Card,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Paper,
  Checkbox,
  Stack,
  styled,
  FormControl,
  FormControlLabel,
  Button,
  FormLabel,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", // checkbox未チェック：緑
    },
    secondary: {
      main: "#9c27b0", //  checkboxチェック中：紫
    },
    success: {
      main: "#3f51b5", // 成功ボタン：青
    },
    warning: {
      main: "#fdd835", // 成功ボタン：黄
    },
    background:{
      default: "#e0e0e0", //画面背景：グレー
      paper: "#e0ffff", //Paper背景：水色
    },
    text: {
      primary: "#111"
    }
  },

  typography: {
    h6: { fontWeight: 550,
          fontSize: 30,
     },
    body1: { fontSize: 14 },
  },

  components: {

    //すべての <AppBar> コンポーネントに共通のデフォルトスタイルをテーマで設定
    MuiAppBar: {
        defaultProps: {
            color: "primary"
        },
    },

    //既存でguttersが左右paddingを持っているので最終的にそこに上書きされてしまう。
    MuiToolbar: {
    },

    //すべての <Paper> コンポーネントに共通のデフォルトスタイルをテーマで設定
    MuiPaper: {
        defaultProps: {
            //影（立体感）
            elevation: 0,
        },
        styleOverrides: {
            root: {
                borderRadius: 0, 
                padding: "16px",
            },
        },
    },

    //Stack
    MuiStack: {
        styleOverrides: {
            root: {
                padding: 20,
                fontWeight: 700,
                boxShadow: "2"
            },
        },
    },

    //Card
    MuiCard: {
        defaultProps: {
            //影（立体感）
            elevation: 3,
        },
        styleOverrides: {
            root: {
                borderRadius: 20, 
                padding: 20,
                fontWeight: 700,
                minWidth: 200
            },
        },
    },

    //ボタン
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 20,
                paddingTop: 15,
                paddingBottom: 15,
                fontWeight: 700,
                boxShadow: "2",
            },
        },
    },
  }
});

const Req5Paper = styled(Paper)(({ theme }) => ({
    //pxだと強制調整が入るので短辺の半分の長さに角の長さが揃えられる。
    borderRadius: 999, 
    margin: theme.spacing(2),
    padding: theme.spacing(3),
}))

export default function Lesson7_9() {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Box>

                    <Box>
                        <AppBar>
                            <Toolbar>
                                <Typography variant="h6">Lesson7-9 練習問題</Typography>
                            </Toolbar>
                        </AppBar>
                        <Toolbar/>
                    </Box>

                    <Box sx={{ mt: 3 ,pl:2 , pr:2 }}>
                        <Paper>
                            <Typography variant="h6">要件 1</Typography>
                            <Typography variant="body1">
                                Lesson7-9.tsxを作成し、描画内容をすべて記述すること。
                            </Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                要件 2
                            </Typography>
                            <Typography variant="body1">
                                各要件に合うようにカスタムテーマを作成すること。
                            </Typography>
                        </Paper>
                    </Box>

                    <Box>
                        <Stack direction="row" spacing={2}>
                            <Card sx={{ flex: 1 , p:2 }}>
                                <Typography variant="h6">要件 3</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    ボタンを2つ作成し、それぞれカスタムテーマで変更した色を適用すること。
                                </Typography>
                                <Stack spacing={2}>
                                    <Button variant="contained" color="success">
                                        成功ボタン
                                    </Button>
                                    <Button variant="contained" color="warning">
                                        失敗ボタン
                                    </Button>
                                </Stack>
                            </Card>
                            <Card sx={{ flex: 1 }}>
                                <Typography variant="h6">要件 4</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    カードを2枚配置し、それぞれ異なる方法で設定すること。
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <Card>デフォルト</Card>
                                    {/* ここは要件4の「CSS指定」なので sx でOK */}
                                    <Card sx={{ bgcolor: "#76ff03", minWidth: 200}}>CSS指定</Card>
                                </Stack>
                            </Card>
                        </Stack>
                    </Box>

                    <Req5Paper>
                        <FormControl>
                            <Typography variant="h6">要件 5</Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                チェックボックスを作成し、チェックを入れると色が変更されるようにすること。
                            </Typography>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(e) => setChecked(e.target.checked)}
                                        color={checked ? "secondary" : "primary"}
                                    />
                                }
                                label={"未チェック（プライマリー・緑）／ チェック中（セカンダリー・紫）"}
                            />
                        </FormControl>
                    </Req5Paper>

                </Box>

            </ThemeProvider>
        </div>
    )
}