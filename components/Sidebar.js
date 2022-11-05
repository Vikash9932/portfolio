import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { MdWorkOutline, MdOutlineWeb, MdClose } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsCloudDownload } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import ContextFile from './context';

const SideBarContent = () => {
  const { path, setPath, icon, setIcon } = useContext(ContextFile);
  const router = useRouter();
  // console.log('router', router);
  // console.log('path inside sidebar', path, icon);
  useEffect(() => {
    setPath(router.pathname);
    //eslint-disable-next-line
  }, [router]);

  return (
    <div className={icon ? 'hide sidebar' : 'sidebar'}>
      <div className='sidebar--image'>
        <Image src='/images/me.jpg' alt='Me' width={100} height={100} />
      </div>
      <div className='sidebar--cancel'>
        <MdClose color='lightGreen' size='35' onClick={() => setIcon(!icon)} />
      </div>
      <div className='sidebar--name'>Vikash Kumar</div>
      <div className='sidebar--social'>
        <a
          href='https://github.com/vikash9932'
          target='_blank'
          rel='noreferrer'>
          <AiOutlineGithub size='25' />
        </a>
        <a
          href='https://www.linkedin.com/in/vikash-kumar-729702103'
          target='_blank'
          rel='noreferrer'>
          <AiOutlineLinkedin size='25' />
        </a>
        <a href='/assets/cv.pdf' download>
          <BsCloudDownload size='25' />
        </a>
      </div>
      <div className='sidebar--nav'>
        <Link
          href='/'
          className={path === '/' ? 'selectedRoute' : 'notSelectedRoute'}
          onClick={() => setIcon(true)}>
          <div>
            <AiOutlineHome size='25' />
          </div>
          <p>Home</p>
        </Link>
        <Link
          href='/about'
          className={path === '/about' ? 'selectedRoute' : 'notSelectedRoute'}
          onClick={() => setIcon(true)}>
          <div>
            <CgProfile size='25' />
          </div>
          <p>About</p>
        </Link>

        <Link
          href='/work'
          className={path === '/work' ? 'selectedRoute' : 'notSelectedRoute'}
          onClick={() => {
            setPath('/work');
            setIcon(true);
          }}>
          <div>
            <MdWorkOutline size='25' />
          </div>
          <p>Work</p>
        </Link>

        <Link
          href='/projects'
          className={
            path === '/projects' ? 'selectedRoute' : 'notSelectedRoute'
          }
          onClick={() => setIcon(true)}>
          <div>
            <MdOutlineWeb size='25' />
          </div>
          <p>Projects</p>
        </Link>
        <Link
          href='/contact'
          className={path === '/contact' ? 'selectedRoute' : 'notSelectedRoute'}
          onClick={() => setIcon(true)}>
          <div>
            <AiOutlineMail size='25' />
          </div>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const { icon, setIcon } = useContext(ContextFile);
  // console.log('path inside sidebar', path);

  return (
    <>
      <div className='sidebar--logo' onClick={() => setIcon(!icon)}>
        {icon && <GiHamburgerMenu color='lightGreen' size='35' />}
      </div>
      {/* {!icon && <SideBarContent />} */}
      {/* <div className='show'> */}
      {/* <div className={icon ? 'hide' : 'show'}> */}
      <SideBarContent />
      {/* </div> */}
    </>
  );
};

export default Sidebar;
