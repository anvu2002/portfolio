import React, { useState } from 'react';
import { motion } from  'framer-motion';

import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { fadeIn, textVariant } from '../utils/motion';


const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>
  ]);
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <>
      <div className="mt-20 flex flex-wrap gap-10">
        <Terminal name='React Terminal Usage Example' colorMode={ ColorMode.Dark }  onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }>
          { terminalLineData }
        </Terminal>
    </div>
    </>
    
  )
};

export default TerminalController