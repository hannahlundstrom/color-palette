import {
  ColorPicker,
  Button,
  ColorArea,
  ColorField,
  ColorSlider,
  ColorSwatch,
  Dialog,
  DialogTrigger,
  Popover,
  ColorThumb,
  Label,
  SliderTrack,
  Input,
} from "react-aria-components";
import type Color from "../../classes/color";

interface ColorPreviewProps {
  color: Color;
  updateHexCode: (id: string, hexCode: string) => void;
}

function ColorPreview({ color, updateHexCode }: ColorPreviewProps) {
  return (
    <div className="flex-1 min-h-30">
      <ColorPicker
        defaultValue={color.hexCode}
        onChange={(newColor) => {
          updateHexCode(color.id, newColor.toString("hex"));
        }}
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
            placement="end top"
            className="rounded-xl border border-black/10 bg-white p-3 shadow-xl"
          >
            <Dialog className="flex flex-col gap-2">
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
                className="w-full max-w-56 aspect-square rounded-lg bg-neutral-300"
              >
                <ColorThumb className="top-[50%] left-[50%] rounded-full border-2 border-white box-border w-8 h-8" />
              </ColorArea>
              <ColorSlider
                colorSpace="hsb"
                channel="hue"
                className="font-sans grid grid-cols-[1fr_auto] items-center gap-2 w-56"
              >
                <Label>Hue</Label>
                <SliderTrack
                  className="group col-span-2 rounded-md w-full h-6"
                  style={({ defaultStyle, isDisabled }) => ({
                    ...defaultStyle,
                    background: isDisabled
                      ? undefined
                      : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
                  })}
                >
                  <ColorThumb className="top-[50%] left-[50%] rounded-full border-2 border-white box-border w-8 h-8" />
                </SliderTrack>
              </ColorSlider>
              <ColorField className="w-56 flex flex-col gap-1">
                <Label>Hex</Label>
                <Input className="border rounded-lg min-h-9 font-sans text-sm py-0 px-3 box-border"></Input>
              </ColorField>
            </Dialog>
          </Popover>
        </DialogTrigger>
      </ColorPicker>
    </div>
  );
}

export default ColorPreview;
