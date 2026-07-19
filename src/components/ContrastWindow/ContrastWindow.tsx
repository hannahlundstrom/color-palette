import { useState } from "react";
import Color from "../../classes/color";
import ColorDropArea from "./ColorDropArea";
import ContrastPreview from "./ContrastPreview";

function ContrastWindow() {
  const [colorOne, setColorOne] = useState<Color>();
  const [colorTwo, setColorTwo] = useState<Color>();

  return (
    <section
      aria-label="Contrast preview window"
      className="bg-gray-100 flex-2 w-full max-w-200 flex flex-col p-6 gap-6"
    >
      <ColorDropArea color={colorOne} setColor={setColorOne} />
      <ColorDropArea color={colorTwo} setColor={setColorTwo} />
      {colorOne && colorTwo && (
        <ContrastPreview
          backgroundColor={colorOne}
          foregroundColor={colorTwo}
        />
      )}
      {colorOne && colorTwo && (
        <ContrastPreview
          backgroundColor={colorTwo}
          foregroundColor={colorOne}
        />
      )}
    </section>
  );
}

export default ContrastWindow;
