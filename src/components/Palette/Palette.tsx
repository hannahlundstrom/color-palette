import { useState } from "react"
import Toolbar from "./Toolbar"
import type { Color } from "../../types/color";
import ColorCard from "../ColorCard/ColorCard";

function Palette() {

const [colorCount, setColorCount] = useState(3);
const [colors, setColors] = useState<Color[]>([]);
//FOR TESTING PURPOSES
colors.push({hexCode: "#94DDBC", name: "Celadon", nickname: "Foreground"});
colors.push({hexCode: "#ED6A5E", name: "Vibrant Coral", nickname: "Background"});
colors.push({hexCode: "#30BCED", name: "Bright Sky", nickname: "Detail"});
colors.push({hexCode: "#AF3410", name: "Maybe", nickname: "Decoration"});
colors.push({hexCode: "#000000", name: "Green?", nickname: "Warning"});

  return (
    <section className="w-full flex flex-col flex-2">
      <Toolbar/>
      <div className="p-2.5 grid h-full grid-rows-[1fr] auto-rows-fr grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2.5">
        {colors.slice(0, colorCount).map(color => <ColorCard color={color}/>)}
      </div>
    </section>
  )
}

export default Palette
