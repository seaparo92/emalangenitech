import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SplashPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/images/welcome emalangenitech.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <button
          onClick={() => navigate('/home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <img
            src="/images/EMALANGENI TECH ICON.png"
            alt="Enter Emalangeni Tech"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 24px rgba(255,255,255,0.5))',
              transition: 'transform 0.2s ease, filter 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)';
              (e.currentTarget as HTMLImageElement).style.filter = 'drop-shadow(0 0 36px rgba(255,255,255,0.8))';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLImageElement).style.filter = 'drop-shadow(0 0 24px rgba(255,255,255,0.5))';
            }}
          />
          <span
            style={{
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            Enter Site
          </span>
        </button>
      </div>
    </div>
  );
};
