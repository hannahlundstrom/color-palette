import { useEffect, useState } from "react";
import Color from "../../classes/color";
import Toolbar from "./Toolbar";
import Grid from "./Grid";

//TODO: consider making toolbar sit to the left along the whole screen? would make buttons bigger
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

  const updateHexCode = (id: string, hexCode: string) => {
    setColors((colors) =>
      colors.map((color) => {
        if (color.id === id) {
          const clonedColor = color.clone();
          clonedColor.updateHexCode(hexCode);
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
    <section className="w-full flex flex-col flex-5">
      <Toolbar
        colorCount={colorCount}
        setColorCount={setColorCount}
        randomizeColors={randomizeColors}
      />
      <Grid
        colors={colors.slice(0, colorCount)}
        toggleLocked={toggleLocked}
        updateHexCode={updateHexCode}
      />
    </section>
  );
}

export default Palette;
