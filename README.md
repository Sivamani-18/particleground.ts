[![npm version](https://img.shields.io/npm/v/particleground.ts.svg?style=flat)](https://www.npmjs.com/package/particleground.ts)
[![npm downloads](https://img.shields.io/npm/dt/particleground.ts.svg?style=flat)](https://www.npmjs.com/package/particleground.ts)
[![npm license](https://img.shields.io/npm/l/particleground.ts.svg?style=flat)](https://www.npmjs.com/package/particleground.ts)
[![npm bundle size](https://img.shields.io/bundlephobia/min/particleground.ts.svg)](https://www.npmjs.com/package/particleground.ts)
[![GitHub stars](https://img.shields.io/github/stars/Sivamani-18/particleground.ts.svg?style=social)](https://github.com/Sivamani-18/particleground.ts/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Sivamani-18/particleground.ts.svg?style=social)](https://github.com/Sivamani-18/particleground.ts/network/members)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?style=flat)](https://sivamani-18.github.io/particleground.ts/)

# ParticleGround.ts

`ParticleGround.ts` is a React component library that creates a particle animation effect on a canvas, inspired by `jquery.particleground.js`.

Visit the project site: [Particleground.ts](https://sivamani-18.github.io/particleground.ts/)

![CPT2408140930-1068x578](https://github.com/user-attachments/assets/7ba4ed01-7ab4-4551-8ba5-4d0098cc751b)


## Installation

Install via npm and yarn:

```bash
npm install particleground.ts
```

```bash
yarn add particleground.ts
```

## Usage

```tsx
import React from 'react';
import ParticleGround from 'particleground.ts';

const App = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh',overflow: 'hidden',
        backgroundColor: '#000000', }}>
      <ParticleGround />
    </div>
  );
};

export default App;
```

## Props

| Prop Name           | Type               | Default Value | Description |
|---------------------|--------------------|---------------|-------------|
| `minSpeedX`         | `number`           | `0.1`         | Minimum horizontal speed. |
| `maxSpeedX`         | `number`           | `0.7`         | Maximum horizontal speed. |
| `minSpeedY`         | `number`           | `0.1`         | Minimum vertical speed. |
| `maxSpeedY`         | `number`           | `0.7`         | Maximum vertical speed. |
| `directionX`        | `'center' \| 'left' \| 'right'` | `'center'`   | Direction of horizontal movement. |
| `directionY`        | `'center' \| 'up' \| 'down'`   | `'center'`   | Direction of vertical movement. |
| `density`           | `number`           | `10000`       | Particle density. |
| `dotColor`          | `string`           | `'#666666'`   | Color of the particles. |
| `lineColor`         | `string`           | `'#666666'`   | Color of the lines connecting particles. |
| `particleRadius`    | `number`           | `7`           | Radius of the particles. |
| `lineWidth`         | `number`           | `1`           | Width of the lines connecting particles. |
| `curvedLines`       | `boolean`          | `false`       | Enable or disable curved lines. |
| `proximity`         | `number`           | `100`         | Distance at which particles connect. |
| `parallax`          | `boolean`          | `true`        | Enable or disable parallax effect. |
| `parallaxMultiplier`| `number`           | `5`           | Strength of the parallax effect. |
| `onInit`            | `() => void`       | `() => {}`    | Callback for initialization. |
| `onDestroy`         | `() => void`       | `() => {}`    | Callback for cleanup. |

## Demo

You can view a live demo of the `Particleground.ts` library [here](https://sivamani-18.github.io/particleground.ts/).

Or clone the repository and run the demo locally:

```bash
git clone https://github.com/Sivamani-18/particleground.ts.git
cd particleground.ts
npm install
npm start
```

This will start a local development server where you can see the `Particleground.ts` in action.

## License

Licensed under the MIT License.
