import { Minus, Plus, Save, Shuffle } from "lucide-react";
import {
  Button,
  Group,
  Input,
  Label,
  NumberField,
  Toolbar as AriaToolbar,
} from "react-aria-components";

interface ToolbarProps {
  colorCount: number;
  setColorCount: React.Dispatch<React.SetStateAction<number>>;
  randomizeColors: () => void;
}

function Toolbar({ colorCount, setColorCount, randomizeColors }: ToolbarProps) {
  return (
    <AriaToolbar
      aria-label="Color palette toolbar"
      className="bg-gray-200 p-1 px-6 flex justify-between gap-6"
    >
      <Group aria-label="Colors" className="flex gap-6">
        <NumberField
          value={colorCount}
          onChange={setColorCount}
          minValue={1}
          maxValue={50}
          isWheelDisabled={true}
        >
          <Label className="sr-only">Color amount</Label>
          <Group className="flex">
            <Button slot="decrement">
              <Minus size={20} />
            </Button>
            <Input className="w-6 text-center" />
            <Button slot="increment">
              <Plus size={20} />
            </Button>
          </Group>
        </NumberField>
        <Button aria-label="Randomize colors" onPress={randomizeColors}>
          <Shuffle size={20} />
        </Button>
      </Group>

      <Group aria-label="Saving" className="flex gap-1">
        <Button aria-label="Save color palette">
          <Save size={20} />
        </Button>
      </Group>
    </AriaToolbar>
  );
}

export default Toolbar;
