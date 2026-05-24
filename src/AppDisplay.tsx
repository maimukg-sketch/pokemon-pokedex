import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Badge,
} from "@mui/material";

export default function AppDisplay() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        ＭＵＩ 表示コンポーネント
      </Typography>

      <Card>
        <CardMedia
          component="img"
          height="180"
          image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        />
        <CardContent>
          <Typography variant="h6">タイトル</Typography>
          <Typography variant="body2" color="text.secondary">
            ここに説明文が入る。
          </Typography>
          <Button size="small" variant="contained">
            詳細を見る
          </Button>
        </CardContent>
      </Card>

      <List>
        <ListItem>
          <ListItemText primary="受信トレイ" secondary="5件の未読" />
        </ListItem>
        <ListItem>
          <ListItemText primary="送信済み" />
        </ListItem>
        <ListItem>
          <ListItemText primary="下書き" />
        </ListItem>
      </List>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>アバター</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>年齢</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar alt="山田太郎" src="https://source.unsplash.com/random/100x100?man" />
            </TableCell>
            <TableCell>山田太郎</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Avatar alt="佐藤花子" src="https://source.unsplash.com/random/100x100?woman" />
            </TableCell>
            <TableCell>佐藤花子</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <br/><br/>
      <Badge badgeContent={3} color="primary">
        <Avatar alt="通知">N</Avatar>
      </Badge>
      
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<Avatar>+</Avatar>}
      >
        <Avatar alt="ユーザー" src="https://source.unsplash.com/random/100x100?person" />
      </Badge>
    </div>
  );
}
