export default class Vector {
    public u: number;
    public v: number;
    public waveHeight?: number; 
  
    constructor(u?: number, v?: number, waveHeight?: number) {
      this.u = u || 0;
      this.v = v || 0;
      this.waveHeight = waveHeight;
    }
  
    get intensity() {
      return Math.sqrt(this.u * this.u + this.v * this.v);
    }
  }
  