# IH-Leaflet-Velocity-TS

A **TypeScript fork** of [leaflet-velocity-ts](https://github.com/0nza1101/leaflet-velocity-ts), which itself is based on the original [leaflet-velocity](https://github.com/onaci/leaflet-velocity) plugin for Leaflet.

This plugin allows for the visualization of velocity fields such as wind or ocean currents in Leaflet maps. This fork extends the functionality with a 🌊 **new wave visualization mode**.

![Screenshot](/screenshots/velocity.gif?raw=true)

---

## 🧬 Project Lineage

- 📦 **[leaflet-velocity](https://github.com/onaci/leaflet-velocity)** – Original plugin developed under CSIRO license.
- 🧪 **[leaflet-velocity-ts](https://github.com/0nza1101/leaflet-velocity-ts)** – TypeScript rewrite with performance and compatibility improvements.
- 🌊 **ih-leaflet-velocity-ts** – This fork adds **wave representation** capabilities.

---

## 🔄 Differences from the Original Repositories

Compared to `leaflet-velocity-ts`, this fork adds:

- 🌊 **Wave Mode**:
  - Wave-style particle animations.
  - Wave height visualization with dynamic sizing and color scaling.
  - Support for additional wave-specific display options.

- 🛠️ API Extensions:
  - New options for configuring wave particle behavior.
  - Updated control panel to include wave data display (height, etc.).

  ![Screenshot](/screenshots/waves-velocity.gif?raw=true)


---

## ✨ Usage

To use this fork, install or copy the package into your project. Import and use the plugin as follows:

```javascript
const velocityLayer = L.velocityLayer({
  displayValues: true,
  displayOptions: {
    velocityType: "Global Wind",
    position: "bottomleft",
    emptyString: "No data",
    angleConvention: "bearingCW",
    showCardinal: true,
    speedUnit: "m/s",
    directionString: "Direction",
    speedString: "Speed",
    heightString: "Height",   // 🌊 Wave-specific
    heightUnit: "m"           // 🌊 Wave-specific
  },
  data: data, // see demo/*.json or use a compatible data service

  minVelocity: 0,
  maxVelocity: 10,
  velocityScale: 0.005,
  colorScale: [],
  opacity: 0.97,
  paneName: "overlayPane",
  particlelineWidth: 1.9,

  // 🌊 WAVE MODE CONFIG
  waveMode: true,
  wavesParticlesSeparation: 3.5
});
```

## 🌊 Wave Mode Details

When `waveMode` is enabled:

- **Particles** animate with wave-like appearance rather than simple motion streaks.
- **Wave Height** is read from the third data parameter (typically `[u, v, height]`) and used to scale the wave particles by size and color.
- **Control Panel** includes height data (if available), displaying wave intensity alongside speed and direction.

### Additional Wave Options

| Option                    | Type     | Default | Description                                                        |
|---------------------------|----------|---------|--------------------------------------------------------------------|
| `waveMode`                | `boolean`| `false` | Enable wave visualization mode.                                    |
| `wavesParticlesSeparation`| `number` | `3.5`   | Controls the spacing between particles in wave mode.               |
| `heightString`            | `string` | `"Height"` | Label prefix for wave height in the control.                    |
| `heightUnit`              | `string` | `"m"`   | Unit of wave height displayed in the control.                      |

---

## 📦 Public methods

| Method       | Params     | Description                        |
| ------------ | ---------- | ---------------------------------- |
| `setData`    | `{Object}` | Update the layer with new data     |
| `setOptions` | `{Object}` | Update the layer with new options  |

---

## 🧪 Development

```bash
npm install
npm run watch
```

## 📚 License and Credits

This project is a fork of [leaflet-velocity-ts](https://github.com/0nza1101/leaflet-velocity-ts), which itself is a fork of [leaflet-velocity](https://github.com/onaci/leaflet-velocity), originally developed by CSIRO.

### License Summary

**ih-leaflet-velocity-ts** is released under the **CSIRO License**.


### Original License Notice from CSIRO

> Redistribution and use in source and binary forms, with or without modification, are permitted under specific terms. See the full [CSIRO License](https://github.com/onaci/leaflet-velocity/blob/master/LICENSE.md) for details.

---

## 🤝 Contributions

This fork is open to contributions. Feel free to open an issue or submit a pull request if you'd like to suggest improvements or report bugs.


