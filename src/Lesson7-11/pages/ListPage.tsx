import * as React from "react";

// Routerの機能
// useNavigate → 画面遷移
// useSearchParams → URLにoffsetを保存することでページ位置を保持する
// useSearchParams → URLクエリ（?offset=60 など）を操作
import { useNavigate, useSearchParams } from "react-router-dom";

// API関数
import { fetchPokemonList, fetchAllPokemonList } from "../api/pokeApi";

// 型（TypeScript用）
import type { PokemonListItem } from "../types/pokemon";

// MUIコンポーネント
import {
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Stack,
  TextField
} from "@mui/material";

// 1ページあたりの取得件数
const LIMIT = 60;

export default function ListPage() {

  // 画面遷移用（Detailページへ）
  const navigate = useNavigate();

  // URLクエリ操作用
  // 例：/list?offset=60
  const [searchParams, setSearchParams] = useSearchParams();

  // ポケモン一覧データ
  const [items, setItems] = React.useState<PokemonListItem[]>([]);

  // エラーメッセージ
  const [error, setError] = React.useState<string | null>(null);

  // 全ポケモン数
  const [count, setCount] = React.useState(0);

  // allItems state を追加
  const [allItems, setAllItems] = React.useState<PokemonListItem[]>([]);

  // URLから検索文字を取得
  const queryFromUrl = searchParams.get("q") ?? "";

  // 検索機能
  const [query, setQuery] = React.useState(queryFromUrl);

  const normalizedQuery = query.trim().toLowerCase();

  const displayedItems =
    normalizedQuery === ""
      ? items
      : allItems.filter((p) => {
        const id = Number(p.url.split("/").filter(Boolean).pop());
        
        return (
            id < 10000 &&
            p.name.includes(normalizedQuery)
        );
    });


  // URLから offset を取得
  const offsetParam = Number(searchParams.get("offset"));

  const rawOffset =
    Number.isInteger(offsetParam) && offsetParam >= 0
      ? offsetParam
      : 0;

  // 最後のページ開始位置を計算
  const lastOffset = Math.floor((count - 1) / LIMIT) * LIMIT;

  // 実際に使う offset
  const offset =
    count > 0 && rawOffset > lastOffset
      ? lastOffset
      : rawOffset;


  // --- API取得処理 ---
  //初回だけ全件取得する useEffect
  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const data = await fetchAllPokemonList();
        if (!cancelled) {
          setAllItems(data.results);
        }
      } catch (e) {
        if (!cancelled) {
          setError(String(e));
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  React.useEffect(() => {

    // 非同期処理中に画面が消えた場合の安全対策
    let cancelled = false;

    (async () => {
      try {
        // APIからポケモン一覧取得
        // limit と offset によってページングされる
        const data = await fetchPokemonList(LIMIT, offset);

        // コンポーネントがまだ生きている場合のみ state 更新
        if (!cancelled) {
          setItems(data.results);
          setCount(data.count); // 全体数を保存
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

    // offset が変わるたびに再実行
  }, [offset]);

  // エラー表示
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        List Page
      </Typography>

      <TextField
        label="検索バー"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);

          setSearchParams({
            offset: String(offset),
            q: value
          });
        }}
        sx={{ m: 2 }}
      />

      {/* --- ポケモン一覧表示 --- */}
      <List>
        {displayedItems.map((p) => (
          <ListItemButton
            key={p.name}

            // クリックで詳細ページへ遷移
            // /detail/pikachu のようなURLになる
            onClick={() => navigate(`/detail/${p.name}`)}
          >            
          <ListItemText primary={p.name} />
          </ListItemButton>
        ))}
      </List>

      {/* --- ページングボタン --- */}
      {normalizedQuery === "" && (
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>

            {/* リストの先頭のページ */}
            <Button
              variant="outlined"
              onClick={() => setSearchParams({ offset: "0" ,q: query })}
            >
              Top
            </Button>

            {/* 前のページ */}
            <Button
              variant="contained"

              // offset=0 のときは戻れない
              disabled={offset === 0}

              onClick={() =>
                // offset を減らしてURL更新
                // URLが変わる → useEffect発火 → API再取得
                setSearchParams({
                  offset: String(Math.max(0, offset - LIMIT)),
                  q: query
                })
              }
            >
              Previous
            </Button>

            {/* 次のページ */}
            <Button
              variant="contained"


              disabled={offset >= lastOffset}

              onClick={() =>
                // offset を増やして次ページへ
                setSearchParams({
                  offset: String(offset + LIMIT),
                  q: query 
                })
              }
            >
              Next
            </Button>

            {/* リスト最後尾のページ */}
            <Button
              variant="outlined"
              onClick={() =>
                setSearchParams({ offset: String(lastOffset),
                                  q: query
                 })
              }
            >
              Last
            </Button>

          </Stack>
      )}
    </>
  );
}