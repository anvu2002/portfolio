import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalInput, TerminalOutput } from 'react-terminal-ui';
import './Terminal.css';

const TerminalController = () => {
  const [colorMode, setColorMode] = useState(ColorMode.Dark);
  const [lineData, setLineData] = useState([
    <TerminalOutput>Yes! I'm a shell &#128075;</TerminalOutput>,
    <TerminalOutput></TerminalOutput>
  ]);

  const toggleColorMode = () => {
    setColorMode(prevMode => prevMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light);
  };

  const onInput = (input) => {
    let ld = [...lineData];
    ld.push(<TerminalInput>{input}</TerminalInput>);
    if (input.toLocaleLowerCase().trim() === 'view-source') {
      window.open('https://github.com/anvu2002/portfolio/', '_blank');
    } else if (input.toLocaleLowerCase().trim() === 'clear') {
      ld = [];
    } else if (input.toLocaleLowerCase().trim() === 'whoami') {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    } else if (input.toLocaleLowerCase().trim() === 'resume') {
      window.open('/resume.pdf', '_blank');
    } else if (input.toLocaleLowerCase().trim() === 'linkedin') {
      window.open('https://www.linkedin.com/in/an-vu-169817242/', '_blank');
    } else if (input.toLocaleLowerCase().trim() === 'my-startup') {
      window.open('https://klinkapp.com/contact', '_blank');
    } else if (input) {
      ld.push(<TerminalOutput>["view-source", "my-startup", "linkedin", "resume", "whoami", "clear"]</TerminalOutput>);
    }
    setLineData(ld);
  };

  return (
    <div className="terminal-card">
      {/* <div className="d-flex flex-row-reverse p-2">
        <input 
            type="checkbox" 
            className="theme-checkbox" 
            checked={colorMode === ColorMode.Dark} 
            onChange={toggleColorMode} 
          />
      </div> */}
      <Terminal
        name={`guest@cyberanvu: ~ ${new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`}
        colorMode={colorMode}
        onInput={onInput}
        height="300px"
        prompt="$"
      >
        {lineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
