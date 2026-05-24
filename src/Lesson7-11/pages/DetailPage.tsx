import * as React from "react";

// Routerの機能
// useParams → URLパラメータ取得（/detail/pikachu の "pikachu" を取る）
// useNavigate → 画面遷移（戻る操作など）
import { useNavigate, useParams } from "react-router-dom";

// API関数
import { fetchPokemonDetail } from "../api/pokeApi";

// 型（TypeScript用）
import type { PokemonDetail } from "../types/pokemon";

// MUIコンポーネント
import { Box, Typography, Button } from "@mui/material";

import { usePokedex } from "../context/PokedexContext";

export default function DetailPage() {

  // URLから name を取得
  // 例：/detail/pikachu → name = "pikachu"
  const { name } = useParams<{ name: string }>();

  // ポケモン詳細データ
  const [detail, setDetail] = React.useState<PokemonDetail | null>(null);

  // エラーメッセージ
  const [error, setError] = React.useState<string | null>(null);

  // 戻る操作用
  const navigate = useNavigate();

  const { toggleFavorite, favorites } = usePokedex();

  const isFavorite = name ? favorites.includes(name) : false;

  // --- API取得処理 ---
  React.useEffect(() => {

    // name が無い場合は何もしない
    if (!name) return;

    // 非同期処理中に画面が消えた場合の安全対策
    let cancelled = false;

    (async () => {
      try {
        // APIからポケモン詳細を取得
        const data = await fetchPokemonDetail(name);

        // コンポーネントがまだ存在している場合のみ state 更新
        if (!cancelled) {
          setDetail(data);
        }

      } catch (e) {
        // エラー時
        if (!cancelled) {
          setError(String(e));
        }
      }
    })();

    // クリーンアップ（アンマウント時に呼ばれる）
    return () => {
      cancelled = true;
    };

  // name が変わるたびに再実行
  }, [name]);

  // --- 状態別の描画 ---

  // nameが取れなかった場合（URL不正など）
  if (!name) return <Typography color="error">name is missing</Typography>;

  // エラー表示
  if (error) return <Typography color="error">{error}</Typography>;

  // 読み込み中
  if (!detail) return <Typography>Loading...</Typography>;

  // --- 通常表示 ---
  return (
    <Box>

      <Typography variant="h4" sx={{ mb: 2 }}>
        Detail Page
      </Typography>

      {/* 基本情報 */}
      <Typography variant="h5">{detail.name}</Typography>
      <Typography>ID: {detail.id}</Typography>
      <Typography>Height: {detail.height}</Typography>
      <Typography>Weight: {detail.weight}</Typography>

      {/* 画像表示（存在する場合のみ） */}
      {detail.sprites.front_default && (
        <Box sx={{ mt: 2 }}>
          <img
            src={detail.sprites.front_default}
            alt={detail.name}
          />
        </Box>
      )}

      {/* タイプ一覧 */}
      <Box sx={{ mt: 2 }}>
        <Typography>
          Types: {detail.types.map((t) => t.type.name).join(", ")}
        </Typography>
      </Box>

      
      <Box sx={{ mt: 3 }}>
        {/* お気に入りボタン */}
        <Button
          variant="contained"
          color={isFavorite ? "secondary" : "primary"}
          onClick={() => name && toggleFavorite(name)}
        >
          {isFavorite ? "お気に入り解除" : "お気に入り追加"}
        </Button>

        {/* 戻るボタン */}
        <Button
          variant="contained"

          // 履歴を1つ戻る
          // → 元の /list?offset=xxx に戻る
          onClick={() => navigate(-1)}
        >
          Back to List
        </Button>
      </Box>

    </Box>
  );
}