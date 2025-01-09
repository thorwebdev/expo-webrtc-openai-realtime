'use dom';
import React from 'react';
import { Visualizer } from 'react-sound-visualizer';

export default function AudioVizDOMComponent({
  audio,
}: {
  audio: MediaStream;
  dom: import('expo/dom').DOMProps;
}) {
  return (
    <Visualizer audio={audio} mode="current" autoStart={true} heightNorm={5}>
      {({ canvasRef }) => (
        <>
          <canvas ref={canvasRef} width={500} height={100} />
        </>
      )}
    </Visualizer>
  );
}
