import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import Color from "../../classes/color";
import ColorCard from "../ColorCard/ColorCard";

function Palette() {
  const [colorCount, setColorCount] = useState(3);
  const [colors, setColors] = useState<Color[]>([]);

  const randomizeColors = () => {
    setColors((colors) =>
      colors.map((color) => {
        const newColor = color.clone();
        newColor.randomizeHexCode();
        return newColor;
      }),
    );
  };

  const toggleLocked = (id: string) => {
    setColors((colors) =>
      colors.map((color) => {
        if (color.id === id) {
          const clonedColor = color.clone();
          clonedColor.toggleLocked();
          return clonedColor;
        }
        return color;
      }),
    );
  };

  useEffect(() => {
    setColors((prev) => {
      if (prev.length >= colorCount) {
        return prev;
      }

      return [
        ...prev,
        ...Array.from({ length: colorCount - prev.length }, () => new Color()),
      ];
    });
  }, [colorCount]);

  return (
    <section className="w-full flex flex-col flex-2">
      <Toolbar
        colorCount={colorCount}
        setColorCount={setColorCount}
        randomizeColors={randomizeColors}
      />
      <div className="p-2.5 grid h-full grid-rows-[1fr] auto-rows-fr grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2.5">
        {colors.slice(0, colorCount).map((color) => (
          <ColorCard key={color.id} color={color} toggleLocked={toggleLocked} />
        ))}
      </div>
    </section>
  );
}

export default Palette;
