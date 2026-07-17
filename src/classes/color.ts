import ntc from "../libs/ntc";

class Color {
  private hexCode: string;
  private nickname?: string;

  public constructor(hexCode?: string, nickname?: string) {
    this.hexCode = hexCode ? hexCode : this.randomHexCode();
    this.nickname = nickname ? nickname : "Anonymous";
  }

  get name(): string {
    let n_match = ntc.name(this.hexCode);
    let n_name = n_match[1]; // This is the text string for the name of the match
    return n_name;
  }

  public randomizeHexCode() {
    this.hexCode = this.randomHexCode();
  }

  private randomHexCode(): string {
  return `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, "0")}`;
}
}

export default Color;
