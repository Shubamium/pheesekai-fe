// CursorSparkle.tsx
'use client'
import React, { useState, useEffect } from 'react';
import './CursorSparkle.css';
// CursorFireworks.tsx

const Cursor: React.FC = () => {
  const [particles, setParticles] = useState<{ x: number; y: number; key: number }[]>([]);
  const [particleKey, setParticleKey] = useState(0);

  const createParticle = (x: number, y: number) => {
    const newParticle = { x, y, key: particleKey };
    setParticleKey((prevKey) => prevKey + 1);
    setParticles((prevParticles) => [...prevParticles, newParticle]);

    // Remove particle after animation duration (1s)
    setTimeout(() => {
      setParticles((prevParticles) => prevParticles.filter((p) => p.key !== newParticle.key));
    }, 1000);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      createParticle(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fireworks-container">
      {particles.map((particle) => (
        <div key={particle.key} className="firework-particle" style={{ left: particle.x, top: particle.y }} />
      ))}
    </div>
  );
};

export default Cursor;
