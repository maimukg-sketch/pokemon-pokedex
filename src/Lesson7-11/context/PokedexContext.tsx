import * as React from "react";

// Contextで扱う型
type PokedexContextType = {
  favorites: string[];
  addFavorite: (name: string) => void;
  removeFavorite: (name: string) => void;
  toggleFavorite: (name: string) => void;
};

// Context作成
const PokedexContext = React.createContext<PokedexContextType | undefined>(undefined);

//　localStorageキー　お気に入り保存
const STORAGE_KEY = "pokedex_favorites";

// Provider
export function PokedexProvider({ children }: { children: React.ReactNode }) {

    // localStorageとはブラウザの中の保存領域
    // 初期値をlocalStorageから取得 
    // stored = localStorageから取り出した生データ（文字列）
    // だからJSON.parseする
  const [favorites, setFavorites] = React.useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // favoritesが変わるたびに保存
  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // 追加（重複防止）
  // UI側でも追加/解除を切り替えているが、
  // Context側でも重複しないようにデータを保護する
  const addFavorite = (name: string) => {
    setFavorites((prev) =>
      //favorites 配列が重複しないよう判別
      //デメリットとしては判別するのにデータ量が重くなることだが、ポケモン件数（1000~2000）くらいであればほぼ誤差
      prev.includes(name) ? prev : [...prev, name]
    );
  };

  // 削除
  const removeFavorite = (name: string) => {
    setFavorites((prev) => prev.filter((n) => n !== name));
  };

  // トグル（追加 or 削除）
  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name]
    );
  };

  return (
    <PokedexContext.Provider
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

// カスタムHook（使いやすくする）
export function usePokedex() {
  const context = React.useContext(PokedexContext);
  if (!context) {
    throw new Error("usePokedex must be used within PokedexProvider");
  }
  return context;
}