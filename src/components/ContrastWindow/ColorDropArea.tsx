import type Color from "../../classes/color";
import ColorCard from "../ColorCard/ColorCard";

interface ColorDropAreaProps {
  color: Color | undefined;
  title: string;
}

function ColorDropArea({ color, title }: ColorDropAreaProps) {
  return (
    <div className="min-w-50 w-full h-full flex justify-center items-center">
      {color ? (
        <ColorCard showActions={false} color={color} toggleLocked={() => {}} />
      ) : (
        <p className="bg-white w-full h-full flex items-center justify-center border-2 border-gray-300 border-dashed shadow-[0_0_5px_rgba(0,0,0,0.15)]">
          Drop a color here
        </p>
      )}
    </div>
  );
}

export default ColorDropArea;
