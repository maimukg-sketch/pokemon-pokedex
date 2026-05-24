//import type:types/pokemon.ts に定義した 型だけ を読み込んでいる。
import type { PokemonDetail, PokemonListResponse } from "../types/pokemon";

//APIのURL共通部分の変数化
const BASE = "https://pokeapi.co/api/v2";

// ポケモン一覧を取得する関数
// limit は取得件数。指定しない場合はデフォルトで 60 件取得する
// offset はページング用のパラメータ。
// 先頭から何件スキップしてデータを取得するかを指定する
//「: Promise<Pokemon~>」戻り値の型。
// この関数は、最終的に PokemonListResponse に解決される Promise を返す

//任意のポケモンのIDをリストから指定できるようにする。
//limit 60の中からしか名前検索できない。
//lastOffset修正必要
//お気に入りの機能（検索、絞り込み）componentsで作成。タイプ等の詳細検索実装検討。
//設定ページ作成＆言語変換
//ホームページ：言語設定
//更新したらお気に入り消えるやん 修正済み
// NavBar にお気に入り件数を出す
// 検索：フォルム違いはnameで紐付け。IDは9999上限でフォルム違いはヒットなしでポケモン図鑑通りの想定。

// 全件取得関数
export async function fetchAllPokemonList(): Promise<PokemonListResponse> {
  const first = await fetchPokemonList(1, 0);
  return fetchPokemonList(first.count, 0);
}

export async function fetchPokemonList(limit = 60, offset = 0): Promise<PokemonListResponse> {
    //fetch() は HTTP通信を行い、レスポンス情報を持つ Response オブジェクトを返す。
    //res には、成功可否やステータスコード、レスポンス本文を読むための情報が入っている。
    const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`);

    //res.ok は HTTPステータスが 200〜299 のとき true になる。
    //通信失敗や 404, 500 などの異常時は Error を投げて、呼び出し元で catch できるようにしている。
    if (!res.ok) throw new Error(`Failed to fetch list: ${res.status}`);

    //res.json() は、APIから返ってきたJSON文字列を JavaScript のオブジェクトに変換する。
    //TypeScriptに「この値を PokemonListResponse 型として扱う」と伝えている
    return (await res.json()) as PokemonListResponse;
}

//ポケモンの名前を引数（ひきすう）に受け取り、そのポケモン1体の詳細な情報を得る関数
//図鑑No、名前、身長、体重、タイプ、2Dキャラクター画像などの詳細情報を取得する
export async function fetchPokemonDetail(name: string): Promise<PokemonDetail> {

    // fetch() は API にリクエストを送り Response を取得する
    const res = await fetch(`${BASE}/pokemon/${name}`);
    if (!res.ok) throw new Error(`Failed to fetch detail: ${res.status}`);

    // sprites は画像データのまとまりで、front_default などが含まれる
    // 例：front_default（正面画像）、back_default（背面画像）などが含まれる
    return (await res.json()) as PokemonDetail;
}