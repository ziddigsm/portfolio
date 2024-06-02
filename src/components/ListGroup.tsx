import React, { useEffect, useState } from 'react';
import './Listgroup.css'; // Import the CSS file

interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [typewriterText, setTypewriterText] = useState<string>('');

  useEffect(() => {
    let index = 0;
    const timerId = setInterval(() => {
      setTypewriterText((prev) => prev + text);
      index++;
      if (index === text.length) {
        clearInterval(timerId);
      }
    }, 100);
    return () => clearInterval(timerId);
  }, [text]);

  return <div className="typewriter">{typewriterText}</div>;
};

export default Typewriter;
