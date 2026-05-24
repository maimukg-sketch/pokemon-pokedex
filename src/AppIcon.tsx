import React from "react";
import { Button, Typography, Paper, Container, Stack } from "@mui/material";
import { Save, Delete } from "@mui/icons-material";

function AppIcon() {
  const MyCustomIcon = ({ color = "black", size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15 8H9L12 2Z" />
      <circle cx="12" cy="16" r="4" />
    </svg>
  );

  return (
    <div>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h6">
          アイコンサンプル
        </Typography>

        <Paper>
          <Button variant="contained" color="primary" startIcon={<Save />}>
            保存
          </Button>

          <Button variant="outlined" color="error" endIcon={<Delete />}>
            削除
          </Button>
        </Paper>

        <Button variant="outlined" color="secondary" endIcon={<MyCustomIcon color="blue" size={48} />}>
          自作アイコン
        </Button>
        
      </Stack>
    </div>
  );
}

export default AppIcon;
