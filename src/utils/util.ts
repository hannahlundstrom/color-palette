import type { Color } from "../types/color";

export function randomColor(): Color {
    return { hexCode: randomHexCode(), name: "Color Name", nickname: "Nickname" };
}

function randomHexCode(): string {
  return `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, "0")}`;
}