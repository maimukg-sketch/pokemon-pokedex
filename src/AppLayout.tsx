import React from "react";
import {
  Container,
  Box,
  Stack,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";

export default function AppLayout() {
  return (
    <Container maxWidth="lg">
      <Paper elevation={4} sx={{ mb: 2, p: 2 }}>
        <Typography variant="h5">ヘッダー</Typography>
      </Paper>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">サイドバー</Typography>
            <Stack spacing={2} direction="column">
              <Button variant="contained">ボタン1</Button>
              <Button variant="contained">ボタン2</Button>
            </Stack>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">メインコンテンツ</Typography>
            <Stack spacing={2} direction="row">
              <Box sx={{ p: 1, bgcolor: "grey"}}>
                <Typography>Box1</Typography>
              </Box>
              <Box sx={{ p: 1, bgcolor: "grey"}}>
                <Typography>Box2</Typography>
              </Box>
            </Stack>
            <Box sx={{ mt: 2, p: 1, bgcolor: "grey"}}>
              <Typography>Box3</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      <Paper elevation={8} sx={{ p: 2 }}>
        <Typography variant="body2" align="center">
          フッター
        </Typography>
      </Paper>
    </Container>
  );
}
