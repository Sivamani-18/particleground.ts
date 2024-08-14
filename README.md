# ParticleGround.ts

`ParticleGround.ts` is a React component library that creates a particle animation effect on a canvas, inspired by `jquery.particleground.js`.

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

You can view a live demo of the `Particleground.ts` library [here](https://your-demo-url.com).

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
```

### Steps for Setting Up the Demo

1. **Deploy on Vercel/Netlify:**
   - If you want to host the demo, you can deploy it using Vercel or Netlify by connecting your GitHub repository. They both offer free hosting with a simple setup process.

2. **Add a Demo Page:**
   - You can create a demo page in your project. For instance, in a Next.js setup, create a `pages/demo.tsx` that utilizes the `ParticleGround` component.

3. **Update the Demo Link:**
   - After deployment, update the demo link in the `README.md` with the URL provided by Vercel or Netlify.

This approach will allow users to quickly see how `Particleground.ts` works and try it out directly.