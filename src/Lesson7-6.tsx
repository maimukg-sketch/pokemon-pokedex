import React from "react";
import {
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
} from "@mui/material";

export default function Lesson7_6() {
  return (
    <div>
      {/* タイトル */}
      <Typography variant="h4" gutterBottom>
        Lesson7-6 練習問題
      </Typography>

      <List sx={{ mb: 4 }}>
        <ListItem>
          <ListItemText>
              <Typography variant="h6" gutterBottom>
                要件１
              </Typography>
              <Typography>
            Lesson7-6.tsxを作成し、描画内容をすべて記載すること。
              </Typography>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
              <Typography variant="h6" gutterBottom>
                要件2
              </Typography>
              <Typography>
            要件１〜２をリストとして表示すること。
              </Typography>
          </ListItemText>
        </ListItem>
      </List>
              
      <Typography variant="h6" gutterBottom>
        要件３
      </Typography>

      <Typography gutterBottom>
        この下にカードを作成すること。<br/>
        カードの中には横並びで２種類の画像を表示すること。
      </Typography>
            



      {/* 要件３：画像カード */}
      <Card sx={{ p: 2, mb: 2 }}>
        <Card style={{ display: "flex"}}  sx={{ p: 2, mb: 3 }}>
            <Card sx={{ flex: 1 }}>
                  {/* １枚目の画像 */}
                    <CardMedia
                      component="img"
                      height="180"
                      image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"  
                      alt="1枚目の画像"
                  />
              <CardContent>
                    <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                      １枚目の画像
                    </Typography>
              </CardContent>
            </Card>

                  {/* ２枚目の画像 */}
            <Card sx={{ flex: 1 }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                      alt="2枚目の画像"
                    />
              <CardContent>
                    <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                      ２枚目の画像
                    </Typography>
              </CardContent>
            </Card>
        </Card>
      </Card>

      {/* 要件４ 見出し＋説明 */}
      <Typography variant="h6">
        要件４
      </Typography>
      <Typography>
        この下にテーブルを作成し、説明欄と表示欄を表示すること。
      </Typography>

      {/* 要件４：テーブル */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>説明</TableCell>
              <TableCell>表示</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 1行目 */}
            <TableRow>
              <TableCell>アバターの左上に３と表示</TableCell>
              <TableCell>
                <Badge
                  badgeContent={3}
                  color="primary"
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                  overlap="circular"
                >
                  <Avatar>U1</Avatar>
                </Badge>
              </TableCell>
            </TableRow>

            {/* 2行目 */}
            <TableRow>
              <TableCell>アバターを四角にして右上に＋マークを表示</TableCell>
              <TableCell>
                <Badge
                  badgeContent="+"
                  color="secondary"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  overlap="circular"
                >
                  <Avatar variant="rounded">U2</Avatar>
                </Badge>
              </TableCell>
            </TableRow>

            {/* 3行目 */}
            <TableRow>
              <TableCell>アバターをオンラインのように見せる</TableCell>
              <TableCell>
                <Badge
                  badgeContent=""
                  color="success"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  overlap="circular"
                >
                  <Avatar>U3</Avatar>
                </Badge>
              </TableCell>
            </TableRow>

            {/* 4行目 */}
            <TableRow>
              <TableCell>アバターをオフラインのように見せる</TableCell>
              <TableCell>
                <Badge
                  badgeContent=""
                  color="error"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  overlap="circular"
                >
                  <Avatar>U4</Avatar>
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
  );
}