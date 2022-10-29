class JSCE {
  static SHORT = /^#([0-9a-f]{3})$/i;
  static FULL = /^#([0-9a-f]{2}){3,4}$/i;
  static createColor(...colorData) {
    colorData = JSCE.testColorInput(...colorData);
    colorData.colorDataRaw = JSON.stringify(colorData);
    colorData.monochromaticCount = 1;
    Object.defineProperty(colorData, "r", {
      get() {
        let r = JSON.parse(colorData.colorDataRaw).rgba[0];
        return Number(r);
      },
      set(v) {
        colorData.monochromaticCount = 1;
        let raw = JSON.parse(colorData.colorDataRaw);
        raw.rgba[0] = v;
        colorData.colorDataRaw = JSON.stringify(
          JSCE.testColorInput(
            raw.rgba[0],
            raw.rgba[1],
            raw.rgba[2],
            raw.rgba[3]
          )
        );
        return v;
      },
    });
    Object.defineProperty(colorData, "complement", {
      get() {
        let [h, s, l, a] = [...JSON.parse(colorData.colorDataRaw).hsla];
        h += 180;
        h %= 360;
        let hex = JSCE.hslToHex(h, s, l, a);
        return hex;
      },
    });
    Object.defineProperty(colorData, "text", {
      get() {
        let [r, g, b, _] = [...JSON.parse(colorData.colorDataRaw).rgba];
        let [h, s, l, a] = [...JSON.parse(colorData.colorDataRaw).hsla];
        let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        console.log(luminance);
        luminance > 0.35 ? (l = 0) : (l = 100);
        s = 0;
        let hex = JSCE.hslToHex(h, s, l, a);
        return hex;
      },
    });
    Object.defineProperty(colorData, "monochromatic", {
      get() {
        let [h, s, l, a] = [...JSON.parse(colorData.colorDataRaw).hsla];
        let percent = 0.18 * colorData.monochromaticCount++;

        l = l > 50 ? l * (1 - percent) : l * (1 + percent);
        l %= 100;
        return JSCE.hslToHex(h, s, l, a);
      },
      set(v) {
        colorData.monochromaticCount = v;
      },
    });
    Object.defineProperty(colorData, "g", {
      get() {
        let g = JSON.parse(colorData.colorDataRaw).rgba[1];
        return Number(g);
      },
      set(v) {
        colorData.monochromaticCount = 1;
        let raw = JSON.parse(colorData.colorDataRaw);
        raw.rgba[1] = v;
        colorData.colorDataRaw = JSON.stringify(
          JSCE.testColorInput(
            raw.rgba[0],
            raw.rgba[1],
            raw.rgba[2],
            raw.rgba[3]
          )
        );
        return v;
      },
    });
    Object.defineProperty(colorData, "b", {
      get() {
        let b = JSON.parse(colorData.colorDataRaw).rgba[2];
        return Number(b);
      },
      set(v) {
        colorData.monochromaticCount = 1;
        let raw = JSON.parse(colorData.colorDataRaw);
        raw.rgba[2] = v;
        colorData.colorDataRaw = JSON.stringify(
          JSCE.testColorInput(
            raw.rgba[0],
            raw.rgba[1],
            raw.rgba[2],
            raw.rgba[3]
          )
        );
        return v;
      },
    });
    Object.defineProperty(colorData, "a", {
      get() {
        let a = JSON.parse(colorData.colorDataRaw).rgba[3];
        return Number(a);
      },
      set(v) {
        colorData.monochromaticCount = 1;
        let raw = JSON.parse(colorData.colorDataRaw);
        raw.rgba[3] = v;
        console.log(raw.rgba);
        colorData.colorDataRaw = JSON.stringify(
          JSCE.testColorInput(
            raw.rgba[0],
            raw.rgba[1],
            raw.rgba[2],
            raw.rgba[3]
          )
        );
        return v;
      },
    });
    Object.defineProperty(colorData, "h", {
      get() {
        let h = JSON.parse(colorData.colorDataRaw).hsla[0];
        return Number(h);
      },
      set(v) {
        colorData.monochromaticCount = 1;
        let raw = JSON.parse(colorData.colorDataRaw);
        raw.hsla[0] = v;
        raw.hsla[0] %= 360;
        let [h, s, l, a] = [...raw.hsla];
        let hex = JSCE.hslToHex(h, s, l, a);
        colorData.colorDataRaw = JSON.stringify(JSCE.testColorInput(hex));
        return v;
      },
    });
    Object.defineProperty(colorData, "s", {
      get() {
        colorData.monochromaticCount = 1;
        let s = JSON.parse(colorData.colorDataRaw).hsla[1];
        return Number(s);
      },
      set(v) {
        let raw = JSON.parse(colorData.colorDataRaw);
        raw.hsla[1] = v;
        raw.hsla[1] %= 100;
        let [h, s, l, a] = [...raw.hsla];
        let hex = JSCE.hslToHex(h, s, l, a);
        colorData.colorDataRaw = JSON.stringify(JSCE.testColorInput(hex));
        return v;
      },
    });
    Object.defineProperty(colorData, "l", {
      get() {
        let l = JSON.parse(colorData.colorDataRaw).hsla[2];
        return Number(l);
      },
      set(v) {
        colorData.monochromaticCount = 1;
        let raw = JSON.parse(colorData.colorDataRaw);
        raw.hsla[2] = v;
        raw.hsla[2] %= 100;
        let [h, s, l, a] = [...raw.hsla];
        let hex = JSCE.hslToHex(h, s, l + 1, a);
        console.log(hex);
        colorData.colorDataRaw = JSON.stringify(JSCE.testColorInput(hex));
        return v;
      },
    });
    Object.defineProperty(colorData, "rgba", {
      get() {
        let [r, g, b, a] = [...JSON.parse(colorData.colorDataRaw).rgba];
        return `rgba(${r},${g},${b},${a})`;
      },
    });
    Object.defineProperty(colorData, "hsla", {
      get() {
        let [h, s, l, a] = [...JSON.parse(colorData.colorDataRaw).hsla];
        return `hsla(${h},${s}%,${l}%,${a})`;
      },
    });
    Object.defineProperty(colorData, "hex", {
      get() {
        let hex = JSON.parse(colorData.colorDataRaw).hex;
        return `${hex}`;
      },
    });

    return colorData;
  }
  static toRGBA(hexValues) {
    let [r, g, b, a] = [...hexValues];
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    a = parseInt(a, 16);
    return [r, g, b, a];
  }
  static toHSLA(rgbaValues) {
    let [r, g, b, a] = [...rgbaValues];
    r /= 255;
    g /= 255;
    b /= 255;
    a = (a / 255).toFixed(2);
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta) {
      switch (cmax) {
        case r:
          h = ((g - b) / delta) % 6;
          break;
        case g:
          h = (b - r) / delta + 2;
          break;
        case b:
          h = (r - g) / delta + 4;
          break;
      }
    }
    h = Math.round(h * 60);
    h < 60 && (h = h + 360);
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h, s, l, a];
  }
  static hslToHex(h, s, l, ab) {
    let aa = (ab * 255).toString(16);
    l /= 100;
    h = Math.abs(h);
    s = Math.abs(s);
    l = Math.abs(l);
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}${aa}`;
  }
  static testColorInput(...input) {
    let RGBA = undefined,
      HSLA = undefined,
      HEX = undefined;
    if (typeof input[0] === "string" && input.length === 1) {
      if (input[0][0] != "#") input[0] = "#" + input[0];
      let full = false;
      if (JSCE.SHORT.test(input[0]) || (full = JSCE.FULL.test(input[0]))) {
        if (full) {
          HEX = input[0];
          let r = input[0][1] + input[0][2];
          let g = input[0][3] + input[0][4];
          let b = input[0][5] + input[0][6];
          let a = input[0]?.[7] + input[0]?.[8] || "FF";
          RGBA = JSCE.toRGBA([r, g, b, a]);
          HSLA = JSCE.toHSLA(RGBA);
        } else {
          let r = input[0][1] + input[0][1];
          let g = input[0][2] + input[0][2];
          let b = input[0][3] + input[0][3];
          let a = "FF";
          RGBA = JSCE.toRGBA([r, g, b, a]);
          HSLA = JSCE.toHSLA(RGBA);
        }
      } else {
        throw new Error("Invalid Hex String Submitted");
      }
    } else if (input.length === 4 && typeof input[2] === "number") {
      let [r, g, b, a] = [...input];
      RGBA = [r, g, b, a];

      r = r.toString(16);
      g = g.toString(16);
      b = b.toString(16);
      a = a.toString(16);
      r = r.padStart(2, "0");
      g = g.padStart(2, "0");
      b = b.padStart(2, "0");
      a = a.padStart(2, "0");

      HEX = `#${r}${g}${b}${a}`;
      HSLA = JSCE.toHSLA(RGBA);
    }
    return { hex: HEX, rgba: RGBA, hsla: HSLA };
  }
}
JSCE.Color = class Color {
  constructor(colorData) {
    this.value = colorData;
  }
};
