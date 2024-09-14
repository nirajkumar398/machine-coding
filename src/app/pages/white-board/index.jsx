// src/components/Whiteboard.js
import React, { useRef, useState, useEffect } from "react";
// import "./Whiteboard.css"; // Importing CSS for styling the whiteboard

const Whiteboard = () => {
  // Reference to the canvas element
  const canvasRef = useRef(null);

  // Reference to the 2D drawing context of the canvas
  const contextRef = useRef(null);

  // State to track if the user is actively drawing
  const [isDrawing, setIsDrawing] = useState(false);

  // Initialize the canvas and context when the component mounts

  const initializeCanvas = () => {
    const canvas = canvasRef.current;

    // Set the canvas size to twice the window dimensions to ensure high DPI rendering
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;

    // Adjust the canvas display size to match the window dimensions
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // Get the 2D drawing context and scale it to fit the screen
    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round"; // Set round edges for the brush strokes
    context.strokeStyle = "black"; // Default stroke color
    context.lineWidth = 5; // Default brush size
    contextRef.current = context;
  };
  
  useEffect(() => {
    initializeCanvas();
  }, []);

  // Start drawing when the mouse is pressed down
  const handleMouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath(); // Begin a new drawing path
    contextRef.current.moveTo(offsetX, offsetY); // Move to the starting point
    setIsDrawing(true); // Set drawing state to true
  };

  // Finish drawing when the mouse is released
  const handleMouseUp = () => {
    contextRef.current.closePath(); // Close the drawing path
    setIsDrawing(false); // Set drawing state to false
  };

  // Draw continuously as the mouse moves
  const handleMouseMove = ({ nativeEvent }) => {
    if (!isDrawing) return; // If not drawing, exit early

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY); // Draw a line to the current mouse position
    contextRef.current.stroke(); // Apply the stroke
  };

  return (
    <canvas
      ref={canvasRef} // Attach the canvas element reference
      onMouseDown={handleMouseDown} // Start drawing on mouse down
      onMouseUp={handleMouseUp} // Finish drawing on mouse up
      onMouseMove={handleMouseMove} // Draw as the mouse moves
      className="whiteboard" // Add CSS styling for the canvas
    />
  );
};

export default Whiteboard;
