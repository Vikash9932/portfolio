import { useState } from 'react';

import '../styles/globals.css';
import '../styles/Home.css';
import '../styles/Sidebar.css';
import '../styles/About.css';
import '../styles/Contact.css';
import '../styles/Projects.css';
import '../styles/Work.css';
import Sidebar from '../components/Sidebar.js';

import ContextFile from '../components/context';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [path, setPath] = useState('/');
  const [icon, setIcon] = useState(true);

  return (
    <div className='app'>
      <ContextFile.Provider value={{ path, setPath, icon, setIcon }}>
        <Sidebar />
        <Component {...pageProps} />
      </ContextFile.Provider>
    </div>
  );
}
