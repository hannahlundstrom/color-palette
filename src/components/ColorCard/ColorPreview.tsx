import {
  ColorPicker as AriaColorPicker,
  Button,
  ColorArea,
  ColorField,
  ColorSlider,
  ColorSwatch,
  Dialog,
  DialogTrigger,
  Popover,
} from "react-aria-components";
import type Color from "../../classes/color";

function ColorPreview({
  color,
  updateHexCode,
}: {
  color: Color;
  updateHexCode: (id: string, hexCode: string) => void;
}) {
  return (
    <div className="flex-1 min-h-30">
      <AriaColorPicker
        value={color.hexCode}
        onChange={(newColor) =>
          updateHexCode(color.id, newColor.toString("hex"))
        }
      >
        <DialogTrigger>
          <Button className="w-full h-full cursor-pointer">
            <ColorSwatch
              aria-label="Color preview"
              color={color.hexCode}
              colorName={color.name}
              className="w-full h-full"
            />
          </Button>
          <Popover
            placement="top start"
            className="z-50 mt-2 rounded-xl border border-black/10 bg-white p-3 shadow-xl"
          >
            <Dialog className="flex flex-col gap-3 outline-none">
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
                className="h-48 w-64 rounded-lg"
              />
              <ColorSlider colorSpace="hsb" channel="hue" className="w-64" />
              <ColorField className="w-64" />
            </Dialog>
          </Popover>
        </DialogTrigger>
      </AriaColorPicker>
    </div>
  );
}

export default ColorPreview;
