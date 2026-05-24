import { useState } from "react";
import { TextField, Checkbox, Switch, Slider, Radio, RadioGroup, Button, FormControlLabel} from "@mui/material";


export default function Lesson7_5() {
  //各フォームの管理状態
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [slider, setSlider] = useState(50);
  const [radio, setRadio] = useState("A");

  // 表示用
  const [result, setResult] = useState<any>(null);

  const handleClick = () => {
    setResult({name, agree, toggle, slider, radio});
  };

  return (
   <div>
     <h1>Lesson7-5 練習問題</h1>
 
     <h2>要件１</h2>
 
     <p>Lesson7-5.tsxを作成し、描画内容をすべて記載すること。</p>
 
     <h2>要件２</h2>
 
     <p>各フォームを作成すること。</p>
 
     <h2>要件３</h2>
 
     <p>ボタンをクリックした後に各フォームの値が表示されること。</p>
 
     {/* textField MUIの入力ホーム */}
     <TextField label="文字列を入力" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></TextField>
     
     <br/>
     <br/>

     {/* Checkbox */}
     <FormControlLabel 
         control={
             <Checkbox
                 checked={agree}
                 onChange={(e) => setAgree(e.target.checked)}
             />
         }
         label="同意しますか？"
     />
 
     <br />
     <br />
 
     {/* Switch */}
     <FormControlLabel 
         control={
             <Switch
                 checked={toggle}
                 onChange={(e) => setToggle(e.target.checked)}
             />
         }
         label="ON/OFF"
     />
 
     <br />
 
     {/* Slider onChangeの引数の型は例外としてReact.ChangeEvent<HTMLInputElement>ではない。*/}
     <Slider
         min={0}
         max={100}
         value={slider}
         onChange={(_, val) => setSlider(val as number)}
     />
     
     {/* Radio Group */}
     <RadioGroup
         row
         value={radio}
         onChange={(e) => setRadio(e.target.value)}
    >
         <FormControlLabel value="A" control={<Radio />} label="A" />
         <FormControlLabel value="B" control={<Radio />} label="B" />
         <FormControlLabel value="C" control={<Radio />} label="C" />
     </RadioGroup>
 
     {/* submit Button */}
     <Button
         variant="contained"
         color="primary"
         onClick={handleClick}
     >
         内容を決定
     </Button>
 
     {/* Result Output */}
     {result && (
         <div style={{ marginTop: 30 }}>
             <p>名前: {result.name}</p>
             <p>同意: {result.agree ? "はい" : "いいえ"}</p>
             <p>スイッチ: {result.toggle ? "ON" : "OFF"}</p>
             <p>スライダー: {result.slider}</p>
             <p>ラジオ選択: {result.radio}</p>
         </div>
     )}
   </div>
  );
}