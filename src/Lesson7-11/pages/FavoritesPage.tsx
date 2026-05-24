import * as React from "react";
import { useNavigate } from "react-router-dom";
import { usePokedex } from "../context/PokedexContext";
import {
  List,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";

export default function FavoritesPage() {

  const { favorites } = usePokedex();
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Favorites
      </Typography>

      {favorites.length === 0 ? (
        <Typography color="text.secondary">
          お気に入りはありません
        </Typography>
      ) : (
        <List>
          {favorites.map((name) => (
            <ListItemButton
              key={name}
              onClick={() => navigate(`/detail/${name}`)}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          ))}
        </List>
      )}
    </>
  );
}