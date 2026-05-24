//Router とはURLに応じて表示するReactコンポーネントを切り替える仕組み
//ページ全体を再読み込みせず、同一ページ内でUIを切り替えている
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import NavBar from "./components/NavBar";
import { PokedexProvider } from "./context/PokedexContext";

export default function Lesson7_11() {
  return (
    <BrowserRouter>
        <PokedexProvider>

          {/* Routesの外にあるので、どのページでも常に表示される */}
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/detail/:name" element={<DetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />

            {/* 定義されていないURLにアクセスした場合はHomeへ戻す */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
        </PokedexProvider>
    </BrowserRouter>
  );
}