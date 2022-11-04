import Link from 'next/link';

import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const designation = [
  'Programmer',
  'Front-End Web Dev',
  'React Developer',
  'Learner',
];

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [cursor, setCursor] = useState('|');
  const [masterIndex, setMasterIndex] = useState(1);
  const [word, setWord] = useState(designation[0]);
  const [splitText, setSplitText] = useState(designation[0].split(''));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (index < word.length) {
      setTimeout(() => {
        setText(text + splitText[index]);
        setIndex(index + 1);
      }, 100);
    } else if (index === word.length) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 550);
    } else if (index > word.length && index <= word.length * 2) {
      setTimeout(() => {
        setText(text.slice(0, -1));
        setIndex(index + 1);
      }, 100);
    } else {
      if (masterIndex < designation.length) {
        setWord(designation[masterIndex]);
        setText('');
        setIndex(0);
        setMasterIndex(masterIndex + 1);
        setSplitText(designation[masterIndex].split(''));
      } else {
        setWord(designation[0]);
        setText('');
        setIndex(0);
        setMasterIndex(1);
        setSplitText(designation[0].split(''));
      }
    }
    //eslint-disable-next-line
  }, [index, ready]);

  useEffect(() => {
    setTimeout(() => {
      if (cursor === '|') setCursor('');
      else setCursor('|');
    }, 200);
  }, [cursor]);

  return (
    <div className='home'>
      <div className='home--name'>Vikash Kumar</div>
      <div className='home--designation'>
        I'm a {ready && <span className='home--text'>{text}</span>}
        <span className='home--cursor'>{cursor}</span>
      </div>
    </div>
  );
};

export default Home;

// export default function Home() {
//   return (
//     <div className='container'>
//       <Head>
//         <title>Create Next App</title>
//         <link rel='icon' href='/favicon.ico' />
//       </Head>

//       <main>
//         <h1 className='title'>
//           Read <Link href='/posts/first-post'></Link>
//         </h1>

//         <p className='description'>
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className='grid'>
//           <a href='https://nextjs.org/docs' className='card'>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href='https://nextjs.org/learn' className='card'>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href='https://github.com/vercel/next.js/tree/master/examples'
//             className='card'>
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//             className='card'>
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer>
//         <a
//           href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
//           target='_blank'
//           rel='noopener noreferrer'>
//           Powered by{' '}
//           <img src='/vercel.svg' alt='Vercel Logo' className='logo' />
//         </a>
//       </footer>

//       <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         footer img {
//           margin-left: 0.5rem;
//         }

//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }

//         .title a {
//           color: #0070f3;
//           text-decoration: none;
//         }

//         .title a:hover,
//         .title a:focus,
//         .title a:active {
//           text-decoration: underline;
//         }

//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//         }

//         .title,
//         .description {
//           text-align: center;
//         }

//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//         }

//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }

//         .grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;

//           max-width: 800px;
//           margin-top: 3rem;
//         }

//         .card {
//           margin: 1rem;
//           flex-basis: 45%;
//           padding: 1.5rem;
//           text-align: left;
//           color: inherit;
//           text-decoration: none;
//           border: 1px solid #eaeaea;
//           border-radius: 10px;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }

//         .card:hover,
//         .card:focus,
//         .card:active {
//           color: #0070f3;
//           border-color: #0070f3;
//         }

//         .card h3 {
//           margin: 0 0 1rem 0;
//           font-size: 1.5rem;
//         }

//         .card p {
//           margin: 0;
//           font-size: 1.25rem;
//           line-height: 1.5;
//         }

//         .logo {
//           height: 1em;
//         }

//         @media (max-width: 600px) {
//           .grid {
//             width: 100%;
//             flex-direction: column;
//           }
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   );
// }
