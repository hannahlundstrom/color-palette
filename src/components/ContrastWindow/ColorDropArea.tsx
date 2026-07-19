import { DropZone, Text } from "react-aria-components";
import Color from "../../classes/color";
import ColorCard from "../ColorCard/ColorCard";

interface ColorDropAreaProps {
  color: Color | undefined;
  setColor: React.Dispatch<React.SetStateAction<Color | undefined>>;
}

function ColorDropArea({ color, setColor }: ColorDropAreaProps) {
  return (
    <DropZone
      className="min-w-50 w-full h-full flex justify-center items-center"
      getDropOperation={(types) =>
        types.has("application/color") ? "copy" : "cancel"
      }
      onDrop={async (event) => {
        console.log("received drop!");
        let item = event.items.find(
          (item) => item.kind === "text" && item.types.has("application/color"),
        );

        if (!item || item.kind !== "text") {
          return;
        }

        const json = await item.getText("application/color");
        const colorData = JSON.parse(json);
        const color = new Color(
          undefined,
          colorData._hexCode,
          colorData._nickname,
        );
        setColor(color);
      }}
    >
      {color ? (
        <ColorCard showActions={false} color={color} toggleLocked={() => {}} />
      ) : (
        <Text
          slot="label"
          className="bg-white w-full h-full flex items-center justify-center border-2 border-gray-300 border-dashed shadow-[0_0_5px_rgba(0,0,0,0.15)]"
        >
          Drop a color here
        </Text>
      )}
    </DropZone>
  );
}

export default ColorDropArea;
