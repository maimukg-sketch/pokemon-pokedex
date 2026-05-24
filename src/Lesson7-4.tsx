import { useState } from "react";
import Button from "@mui/material/Button";

export default function Lesson7_4() {
 //クリックした回数 カウントの初期値を0に設定：useState(0)、setCountを使って更新できるようにする
 const [count, setCount] = useState(0);

 //押されたボタン番号の更新、初期値はnull「何も押されていない状態」。取りうる値のデータ型が<number | null>なしか数
 const [btnNumber, setBtnNumber] = useState<number | null>(null);

 //ボタンが押された時の処理の関数。機能は「押された回数を１増やす」「押されたボタンの番号を記録」。(num: number)は呼び出し時に受け取る変数
 const handleClick = (num: number) => {
  setCount(count + 1);
  setBtnNumber(num);
 }

 return (
  <div>
    <h1>Lesson7-4 練習問題</h1>

    <h2>要件１</h2>

    <p>Lesson7-4.tsxを作成し、描画内容をすべて記載すること。</p>

    <h2>要件２</h2>

    <p>MUIのButtonを使い、クリックした回数を取得すること。</p>

    <h2>要件３</h2>

    <p>押したボタンによって表示されるボタン番号が変わること。</p>

    <ol>
      <li>背景色あり、プライマリカラー</li>
      <br/>
      <li>文字のみ</li>
      <br/>
      <li>枠線のみ、セカンダリカラー</li>
      <br/>
      <li>背景色＝＃Ｅ０ＦＦＦＦ</li>
    </ol>

    <br/>
    <br/>

    {/*　?? は null・undefined だけを判定する　ボタン番号がnull・undefinedなら”なし”それ以外ならそのまま表示　*/}
    <p>クリックした回数：{count}回、ボタン番号：{btnNumber ?? "なし"}</p>

    {/*ボタン１　背景色あり、プライマリカラー*/}
    <Button variant="contained" color="primary" onClick={() => handleClick(1)}>ボタン1</Button>

    {/*ボタン２　文字のみ*/}
    <Button variant="text" onClick={() => handleClick(2)}>ボタン2</Button>
    
    {/*ボタン３　枠線のみ、セカンダリカラー*/}
    <Button variant="outlined" color="secondary" onClick={() => handleClick(3)}>ボタン3</Button>
    
    {/*ボタン４　背景色＝＃E０FFFF*/}
    <Button variant="contained" onClick={() => handleClick(4)} sx={{backgroundColor: "#E0FFFF", color: "black"}}>ボタン4</Button>

  </div>
 )

}