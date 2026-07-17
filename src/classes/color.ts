import ntc from "../libs/ntc";

class Color {
  private _id: string;
  private _hexCode: string;
  private _nickname?: string;
  private _locked: boolean;

  public constructor(id?: string, hexCode?: string, nickname?: string, locked?: boolean) {
    this._id = id ? id : crypto.randomUUID();
    this._hexCode = hexCode ? hexCode : this.randomHexCode();
    this._nickname = nickname ? nickname : "Anonymous";
    this._locked = locked ? locked : false;
  }

  get id() {
    return this._id;
  }
  
  get hexCode() {
    return this._hexCode;
  }

  get nickname() {
    return this._nickname;
  }

  get locked() {
    return this._locked;
  }

  get name() {
    let n_match = ntc.name(this._hexCode);
    let n_name = n_match[1]; // This is the text string for the name of the match
    return n_name;
  }

  public clone() {
    return new Color(this._id, this._hexCode, this._nickname, this._locked);
  }

  public toggleLocked() {
    this._locked = !this._locked;
  }

  public randomizeHexCode() {
    if (this._locked) return;
    this._hexCode = this.randomHexCode();
  }

  private randomHexCode(): string {
  return `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .toUpperCase()
    .padStart(6, "0")}`;
}
}

export default Color;
