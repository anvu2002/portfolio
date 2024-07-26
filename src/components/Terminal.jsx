import React, { useState, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import Terminal, { ColorMode, TerminalInput, TerminalOutput } from 'react-terminal-ui';
import './Terminal.css';

const TerminalController = (props = {}) => {
  const [colorMode, setColorMode] = useState(ColorMode.Dark);
  const [lineData, setLineData] = useState([
    <TerminalOutput>Give it a try! &#128075;</TerminalOutput>,
    <TerminalOutput></TerminalOutput>,
    // <TerminalOutput>The following example commands are provided:</TerminalOutput>,
    // <TerminalOutput>'view-source' will navigate to the React Terminal UI GitHub source.</TerminalOutput>,
    // <TerminalOutput>'view-react-docs' will navigate to the React docs.</TerminalOutput>,
    // <TerminalOutput>'clear' will clear the terminal.</TerminalOutput>,
    // <TerminalOutput>'whoami' will scroll to the About section.</TerminalOutput>,
    // <TerminalOutput>'resume' will open the resume PDF.</TerminalOutput>,
    // <TerminalOutput>'linkedin' will open the LinkedIn profile.</TerminalOutput>,
    // <TerminalOutput>'startup' will open the klinkapp.com/contacts page.</TerminalOutput>,
  ]);

  function toggleColorMode(e) {
    e.preventDefault();
    setColorMode(colorMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light);
  }

  function onInput(input) {
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
    } else if (input.toLocaleLowerCase().trim() === 'startup') {
      window.open('https://klinkapp.com/contact', '_blank');
    } else if (input) {
      ld.push(<TerminalOutput>view-source, startup, linkedin, resume, whoami, clear </TerminalOutput>);
    } 
    setLineData(ld);
  }

  const redBtnClick = () => {
    console.log('Clicked the red button.');
  };

  const yellowBtnClick = () => {
    console.log('Clicked the yellow button.');
  };

  const greenBtnClick = () => {
    console.log('Clicked the green button.');
  };

  const btnClasses = ['btn'];
  if (colorMode === ColorMode.Light) {
    btnClasses.push('btn-dark');
  } else {
    btnClasses.push('btn-light');
  }

  return (
    <div className="terminal-card">
      <div className="d-flex flex-row-reverse p-2">
        <button className={btnClasses.join(' ')} onClick={toggleColorMode}>
          {colorMode === ColorMode.Light ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      <Terminal
        name={`<interactive shell> - ${new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`}
        colorMode={colorMode}
        onInput={onInput}
        redBtnCallback={redBtnClick}
        yellowBtnCallback={yellowBtnClick}
        greenBtnCallback={greenBtnClick}
        height="300px"
        prompt="$"
      >
        {lineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
