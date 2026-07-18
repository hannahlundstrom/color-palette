import { useState } from "react";
import Color from "../../classes/color";
import ColorCard from "../ColorCard/ColorCard";
import ColorDropArea from "./ColorDropArea";

function ContrastWindow() {
  const [colorOne, setColorOne] = useState<Color>(new Color());
  const [colorTwo, setColorTwo] = useState<Color>();

  return (
    <section
      aria-label="Contrast preview window"
      className="bg-gray-100 flex-2 w-full max-w-200 flex flex-col p-6 gap-6"
    >
      <ColorDropArea color={colorOne} title={"Color 1"} />
      <ColorDropArea color={colorTwo} title={"Color 2"} />
    </section>
  );
}

export default ContrastWindow;
