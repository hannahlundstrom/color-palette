import { useState } from "react"
import Toolbar from "./Toolbar"
import type { Color } from "../../types/color";
import ColorCard from "../ColorCard/ColorCard";

function Palette() {

const [colorCount, setColorCount] = useState(3);
const [colors, setColors] = useState<Color[]>([]);
//FOR TESTING PURPOSES
colors.push({hexCode: "#FFFFFF", name: "White", nickname: "Foreground"});
colors.push({hexCode: "#A3670E", name: "Name", nickname: "Background"});
colors.push({hexCode: "#003456", name: "IDK", nickname: "Detail"});
colors.push({hexCode: "#AF3410", name: "Maybe", nickname: "Decoration"});
colors.push({hexCode: "#000000", name: "Green?", nickname: "Warning"});

  return (
    <section className="bg-red-600 w-full flex flex-col flex-2">
      <Toolbar/>
      <div className="">
        {colors.slice(0, colorCount).map(color => <ColorCard color={color}/>)}
      </div>
    </section>
  )
}

export default Palette
