import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNav } from '../../redux/slices/navSlice.js';
import './toolBar.css';

function Topbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activatedNev, setActivatedNev] = useState(
    window.location.hash || '#home'
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 825);
    };
    const handleHash = () => {
      dispatch(setActiveNav(window.location.hash));
      setActivatedNev(window.location.hash);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleHash);

    handleResize();
    handleHash();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleHash);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the navbar open/close state
  };

  const closeNavbar = () => {
    setIsOpen(false); // Close the navbar
  };

  const renderLinks = () => (
    <>
      {!isMobile && (
        <h4 className="name" style={{ color: '#393737' }}>
          AREEB HANAS
        </h4>
      )}
      <div className={`routes ${isOpen ? 'open' : ''}`}>
        <a
          href="#home"
          onClick={() => {
            setActivatedNev('#home');
            closeNavbar();
          }}
          className={activatedNev === '#home' ? 'current-page' : 'nev-link'}
        >
          <h4>Home</h4>
        </a>
        <a
          href="#about"
          onClick={() => {
            setActivatedNev('#about');
            closeNavbar();
          }}
          className={activatedNev === '#about' ? 'current-page' : 'nev-link'}
        >
          <h4>About</h4>
        </a>
        <a
          href="#skills"
          onClick={() => {
            setActivatedNev('#skills');
            closeNavbar();
          }}
          className={activatedNev === '#skills' ? 'current-page' : 'nev-link'}
        >
          <h4>Skills</h4>
        </a>
        <a
          href="#portfolio"
          onClick={() => {
            setActivatedNev('#portfolio');
            closeNavbar();
          }}
          className={
            activatedNev === '#portfolio' ? 'current-page' : 'nev-link'
          }
        >
          <h4>Portfolio</h4>
        </a>
        <a
          href="#contact"
          onClick={() => {
            setActivatedNev('#contact');
            closeNavbar();
          }}
          className={activatedNev === '#contact' ? 'current-page' : 'nev-link'}
        >
          <h4>Contact</h4>
        </a>
      </div>
    </>
  );

  return (
    <div className="topbar">
      <div className="top-bar-alignment">
        {isMobile && (
          <div className="hamburger" onClick={toggleNavbar}>
            {isOpen ? (
              <div className="cross-wrapper">
                <div className="cross-icon"></div>
                <div className="cross-icon"></div>
              </div>
            ) : (
              <>
                <div className="hamburger-icon"></div>
                <div className="hamburger-icon"></div>
                <div className="hamburger-icon"></div>
              </>
            )}
          </div>
        )}
      </div>
      {!isMobile || isOpen ? (
        <div className={`container ${isOpen ? 'open' : ''}`}>
          {renderLinks()}
        </div>
      ) : null}
    </div>
  );
}

export default Topbar;
