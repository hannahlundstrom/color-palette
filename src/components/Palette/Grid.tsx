import { GridList, GridListItem, useDragAndDrop } from "react-aria-components";
import ColorCard from "../ColorCard/ColorCard";
import type Color from "../../classes/color";

interface GridProps {
  colors: Color[];
  toggleLocked: (id: string) => void;
}

//TODO: Probably update selectionMode to include some selection functionality!
function Grid({ colors, toggleLocked }: GridProps) {
  let { dragAndDropHooks } = useDragAndDrop<Color>({
    getItems(_, values) {
      return values.map((item) => {
        return {
          "application/color": JSON.stringify(item),
        };
      });
    },
  });

  return (
    <GridList
      aria-label="Color palette grid"
      selectionMode="none"
      layout="grid"
      dragAndDropHooks={dragAndDropHooks}
      items={colors}
      className="grid h-full grid-rows-[1fr] auto-rows-fr grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
    >
      {(color) => (
        <GridListItem textValue={color.name}>
          <ColorCard
            key={color.id}
            showActions={true}
            color={color}
            toggleLocked={toggleLocked}
          />
        </GridListItem>
      )}
    </GridList>
  );
}

export default Grid;
