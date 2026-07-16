import type { Color } from "../../types/color"

function ColorCard({color}: {color: Color}) {

  return (
    <article className="w-full h-full flex flex-col outline-solid">
      <div id="color-preview" className="flex-1" style={{ backgroundColor: color.hexCode }}>
      </div>
      <div id="color-details" className="bg-white flex justify-between">
        <div id="color-info" className="flex flex-col">
            <span id="color-name">{color.name}</span>
            <span id="color-hex-code">{color.hexCode}</span>
            <span id="color-nickname">{color.nickname}</span>
        </div>
        <div id="color-actions" className="flex flex-col">
            <span>Lock / Unlock</span>
        </div>
      </div>
    </article>
  )
}

export default ColorCard
