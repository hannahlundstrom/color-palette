import { Pin, PinOff } from "lucide-react";
import Color from "../../classes/color";
import { Button } from "react-aria-components";
import ColorPreview from "./ColorPreview";

interface ColorCardProps {
  showActions: Boolean;
  color: Color;
  toggleLocked: (id: string) => void;
  updateHexCode: (id: string, hexCode: string) => void;
}

//TODO: Update this to use react-aria components such as <Text>
//TODO: Update color actions div to toolbar
function ColorCard({
  showActions,
  color,
  toggleLocked,
  updateHexCode,
}: ColorCardProps) {
  return (
    <article className="w-full h-full flex flex-col shadow-[0_0_5px_rgba(0,0,0,0.15)]">
      <ColorPreview color={color} updateHexCode={updateHexCode} />
      <div id="color-details" className="bg-white p-2 flex justify-between">
        <div id="color-info" className="flex flex-col justify-center">
          <span id="color-name">{color.name}</span>
          <span id="color-hex-code">{color.hexCode}</span>
          <span id="color-nickname">{color.nickname}</span>
        </div>

        <div id="color-actions" className="flex flex-col justify-center">
          {showActions && (
            <Button
              aria-label={color.locked ? "Unpin color" : "Pin color"}
              onPress={() => toggleLocked(color.id)}
            >
              {color.locked ? <PinOff size={25} /> : <Pin size={25} />}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ColorCard;
