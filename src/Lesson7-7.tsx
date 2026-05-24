import React from "react";
import { useState } from "react";
import { 
  TextField,
  Checkbox, 
  Switch, 
  Slider, 
  Radio, 
  RadioGroup, 
  FormControlLabel,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardMedia,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Badge,
  Container,
  Stack,
  Button,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";

export default function Lesson7_7() {
    //要件３：件数入力
    const [inputCount, setInputCount] = useState<number>(1);
    //要件５：バッジに値を反映（ボタンで更新）
    const [badgeCount, setBadgeCount] = useState<number>(1);
    //ボタンををした時に値を反映させる用
    const handleApplyCount = () =>{
        setBadgeCount(inputCount);
    }

    //要件３・５：オンライン。オフライン切り替え
    const [isOnline, setIsOnline] = useState<boolean>(true);
    const handleButtonOnline = () =>{
        setIsOnline((prev) => !prev);
    }

    return(
        <div>
            <Box sx={{ bgcolor:"#E0FFFF", mx:3, p:2}}>
                {/* 要件１−２まとめて背景色を #E0FFFF */}
                    <Typography variant="h4" gutterBottom>Lesson7-7 練習問題</Typography>
                    <Typography variant="h5">要件１</Typography>
                    <Typography sx={{mb:3}}>Lesson7-7.tsxを作成し、描画内容をすべて記載すること。</Typography>
                    <Typography variant="h5">要件２</Typography>
                    <Typography sx={{mb:3}}>要件２より上をひとまとまりにし、背景色を #E0FFFF にすること。</Typography>
            </Box>

            {/* 要件３、４横並び */}
            <Box sx={{ mx:3, py:1}}>
                <Grid container spacing={2}>
                    {/* 要件３ */}
                    <Grid item xs={7}>
                        <Paper sx={{ mb:2, p:2, height: "80%" }}>
                            <Typography variant="h5">要件３</Typography>
                            <Typography>各フォームを表示すること。</Typography>

                            <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                              <Grid item xs={6}>
                                <TextField
                                  label="件数"
                                  size="small"
                                  fullWidth
                                  value={inputCount}
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setInputCount(Number(e.target.value))
                                  }
                                  type="number"
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <Button
                                  variant="contained"
                                  fullWidth
                                  onClick={handleApplyCount}
                                >
                                  件数を反映
                                </Button>
                              </Grid>
                            </Grid>
                              
                            <Button
                              variant="contained"
                              fullWidth
                              onClick={handleButtonOnline}
                            >
                              オンライン / オフラインを変更
                            </Button>
                        </Paper>
                    </Grid>
                              
                    {/* 要件４ */}
                    <Grid item  xs={5}>
                        <Paper sx={{mb:2, p:2, height: "80%" }}>
                            <Typography variant="h5">要件４</Typography>
                            <Typography>横並びに２種類の画像を表示すること。</Typography>
                            <Stack direction="row" spacing={2}>
                                <Card sx={{ width: 120 }}>
                                  <CardMedia
                                    component="img"
                                    height="100"
                                    image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
                                    alt="1枚目"
                                  />
                                </Card>

                                   {/* CardMedia側のサイズと設定が異なっていても設定はCSSが優先されるのでwidth=120 */}
                                <Card sx={{ width: 120 }}>
                                  <CardMedia
                                    component="img"
                                    height="100"
                                    image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                                    alt="2枚目"
                                  />
                                </Card>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            {/* 要件５ */}
            <Paper sx={{ mx:3, p:2}}>
                <Typography variant="h5">要件５</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>アバターを表示し、要件３のボタンを押した結果を反映させること。</Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>アバター</TableCell>
                      <TableCell>処理</TableCell>
                    </TableRow>
                  </TableHead>
                                    
                  <TableBody>
                    {/* 件数を反映 → バッジ表示 */}
                    <TableRow>
                      <TableCell>
                        <Badge
                          badgeContent={badgeCount}
                          color="primary"
                          anchorOrigin={{ vertical: "top", horizontal: "right" }}
                          overlap="circular"
                        >
                          <Avatar variant="square">田</Avatar>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        件数を反映がクリックされた時に、右上に数字を表示。
                      </TableCell>
                    </TableRow>
                                    
                    {/* オンライン/オフライン切替 → ドット表示 */}
                    <TableRow>
                      <TableCell>
                        <Badge
                          variant="dot"
                          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                          overlap="circular"
                          sx={{
                            "& .MuiBadge-badge": {
                              right: -2,
                              bottom: -2,
                              // オンラインなら緑、オフラインならグレー。三項演算子（条件演算子）isOnline が true なら A　false なら B
                              bgcolor: isOnline ? "#2e7d32" : "#9e9e9e",
                              color: isOnline ? "#2e7d32" : "#9e9e9e",
                            },
                          }}
                        >
                          <Avatar>佐</Avatar>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        オンライン / オフラインを変更がクリックされた時に、右下のオンライン/オフライン表示を変更。
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
            </Paper>
        </div>
    );

}