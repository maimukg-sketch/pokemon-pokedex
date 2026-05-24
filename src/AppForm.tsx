import React, { useState } from "react";
import { TextField, Checkbox, Switch, Slider} from "@mui/material";

export default function AppForm() {
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  const [onOff, setOnOff] = useState(true);
  const [level, setLevel] = useState(50);

  return (
    <div>
      <h1>入力フォーム例</h1>

      <TextField 
        label="名前を入力" 
        variant="outlined" 
        value={name}
        onChange={(e:any) => setName(e.target.value)} 
      />
      <br /><br />

      <Checkbox 
        checked={agree}
        onChange={(e:any) => setAgree(e.target.checked)} 
      /> 
      同意します
      <br /><br />

      <Switch 
        checked={onOff}
        onChange={(e:any) => setOnOff(e.target.checked)} 
      /> 
      ON/OFF
      <br /><br />

      <Slider 
        value={level}
        onChange={(e:any, newValue:number|number[]) => setLevel(newValue as number)} 
      />
    </div>
  );
}
