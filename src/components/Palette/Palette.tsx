import { useState } from "react"
import Toolbar from "./Toolbar"
import Color from "../../classes/color";
import ColorCard from "../ColorCard/ColorCard";

function Palette() {

const [colorCount, setColorCount] = useState(3);
const [colors, setColors] = useState<Color[]>([]);

for (let i = colors.length; i < colorCount; i++) {
  colors.push(new Color());
}

  return (
    <section className="w-full flex flex-col flex-2">
      <Toolbar colorCount={colorCount} setColorCount={setColorCount}/>
      <div className="p-2.5 grid h-full grid-rows-[1fr] auto-rows-fr grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2.5">
        {colors.slice(0, colorCount).map(color => <ColorCard color={color}/>)}
      </div>
    </section>
  )
}

export default Palette
