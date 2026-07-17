import Color from "../../classes/color";

function ColorCard({
  color,
  toggleLocked,
}: {
  color: Color;
  toggleLocked: (id: string) => void;
}) {
  return (
    <article className="w-full h-full rounded-md flex flex-col shadow-[0_0_5px_rgba(0,0,0,0.15)]">
      <div
        id="color-preview"
        className="flex-1 rounded-t-md min-h-20"
        style={{ backgroundColor: color.hexCode }}
      ></div>
      <div
        id="color-details"
        className="bg-gray-100 p-2 flex justify-between rounded-b-md"
      >
        <div id="color-info" className="flex flex-col justify-center">
          <span id="color-name">{color.name}</span>
          <span id="color-hex-code">{color.hexCode}</span>
          <span id="color-nickname">{color.nickname}</span>
        </div>
        <div id="color-actions" className="flex flex-col justify-center">
          <button onClick={() => toggleLocked(color.id)}>
            {color.locked ? "Unlock" : "Lock"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ColorCard;
