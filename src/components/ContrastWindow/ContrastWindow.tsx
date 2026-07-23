import { useState } from "react";
import { calcAPCA } from "apca-w3";
import Color from "../../classes/color";
import ColorDropArea from "./ColorDropArea";
import ContrastPreview from "./ContrastPreview";
import { Button, Label } from "react-aria-components";
import { ArrowUpDown } from "lucide-react";
import clsx from "clsx";

function ContrastWindow() {
  const [backgroundColor, setBackgroundColor] = useState<Color | undefined>();
  const [foregroundColor, setForegroundColor] = useState<Color | undefined>();
  let contrastLc: string | number = 0;
  if (backgroundColor && foregroundColor) {
    contrastLc = calcAPCA(backgroundColor.hexCode, foregroundColor.hexCode);
  }
  const swapColors = () => {
    const tempColor = backgroundColor;
    setBackgroundColor(foregroundColor);
    setForegroundColor(tempColor);
  };

  return (
    <section
      aria-label="Contrast preview window"
      className="bg-gray-100 w-fit max-w-200 flex flex-col items-center p-6 gap-6"
    >
      <Label>Background color</Label>
      <ColorDropArea color={backgroundColor} setColor={setBackgroundColor} />
      <Button
        aria-label="Swap background and foreground colors"
        onPress={swapColors}
      >
        <ArrowUpDown size={20} />
      </Button>
      <Label>Foreground color</Label>
      <ColorDropArea color={foregroundColor} setColor={setForegroundColor} />
      <div
        aria-hidden={!backgroundColor || !foregroundColor}
        className={clsx({ invisible: !backgroundColor || !foregroundColor })}
      >
        <ContrastPreview
          backgroundColor={backgroundColor}
          foregroundColor={foregroundColor}
        />
        <p>Your Lc score is {contrastLc}</p>
      </div>
    </section>
  );
}

export default ContrastWindow;
