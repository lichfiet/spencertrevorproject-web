import React, { useRef, useEffect } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Sky blue background
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green ground
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // The robot arm and box
    ctx.fillStyle = '#D3D3D3';
    ctx.fillRect(100, canvas.height / 2 - 50, 50, 50); // Arm base
    ctx.fillRect(150, canvas.height / 2 - 30, 100, 10); // Arm
    ctx.fillRect(250, canvas.height / 2 - 50, 50, 50); // Box

    // Laser beam
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(150, canvas.height / 2 - 25);
    ctx.lineTo(250, canvas.height / 2 - 25);
    ctx.stroke();
  }, []);

  return (
    <canvas ref={canvasRef} width={600} height={400} style={{ display: 'block', margin: 'auto', backgroundColor: '#fff' }} />
  );
};

export default Canvas;