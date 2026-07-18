import { useEffect, useState, type SetStateAction } from "react";
import Color from "../../classes/color";
import ColorCard from "../ColorCard/ColorCard";
import { GridList, GridListItem } from "react-aria-components";
import PaletteToolbar from "./PaletteToolbar";

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
      <PaletteToolbar
        colorCount={colorCount}
        setColorCount={setColorCount}
        randomizeColors={randomizeColors}
      />
      {/*TODO: Probably update selectionMode to include some selection functionality!*/}
      <GridList
        aria-label="Colors"
        selectionMode="none"
        layout="grid"
        items={colors.slice(0, colorCount)}
        className="grid h-full grid-rows-[1fr] auto-rows-fr grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
      >
        {(color) => (
          <GridListItem textValue={color.name}>
            <ColorCard
              key={color.id}
              color={color}
              toggleLocked={toggleLocked}
            />
          </GridListItem>
        )}
      </GridList>
    </section>
  );
}

export default Palette;
