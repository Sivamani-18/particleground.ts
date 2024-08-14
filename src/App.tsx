import React from 'react';
import ParticleGround from 'particleground.ts';

const App: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: '#000000',
      }}
    >
      <ParticleGround />
      <div
        className='particle-ground-section'
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className='package-info'>
          <a href='https://www.npmjs.com/package/particleground.ts'>
            <img
              src='https://img.shields.io/npm/v/particleground.ts.svg?style=flat'
              alt='npm version'
            />
          </a>
          <a href='https://www.npmjs.com/package/particleground.ts'>
            <img
              src='https://img.shields.io/npm/dt/particleground.ts.svg?style=flat'
              alt='npm downloads'
            />
          </a>
          <a href='https://www.npmjs.com/package/particleground.ts'>
            <img
              src='https://img.shields.io/npm/l/particleground.ts.svg?style=flat'
              alt='npm license'
            />
          </a>
          <a href='https://www.npmjs.com/package/particleground.ts'>
            <img
              src='https://img.shields.io/bundlephobia/min/particleground.ts.svg'
              alt='npm bundle size'
            />
          </a>
          <a href='https://github.com/Sivamani-18/particleground.ts/stargazers'>
            <img
              src='https://img.shields.io/github/stars/Sivamani-18/particleground.ts.svg?style=social'
              alt='GitHub stars'
            />
          </a>
          <a href='https://github.com/Sivamani-18/particleground.ts/network/members'>
            <img
              src='https://img.shields.io/github/forks/Sivamani-18/particleground.ts.svg?style=social'
              alt='GitHub forks'
            />
          </a>
        </div>
        <div className='particle-ground-info'>
          <h1>PARTICLEGROUND</h1>
          <p>
            <span>ParticleGround.ts</span> is a React component library that
            creates a particle animation effect on a canvas, inspired by
            <span> jquery.particleground.js</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
