import React, {useState, useEffect, useRef} from 'react';
import HomeMenu from './Components/HomeMenu';
import Dashboard from './Components/Dashboard';
import './App.css';
import LandingOpener from './Components/LandingOpener';
import About from './Components/About';
import Prizes from './Components/Prizes';
import { useSpring, animated } from '@react-spring/web';


function App() {
  const [user, setUser] = useState(false);
  const {getCookie} = require('./Backend/getNickName');

  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  
  useEffect(()=>{
    if(getCookie('token')){
      setUser(true)
    }else{
      setUser(false)
    }
  }, [user]);


  const useIntersectionObserver = (options) =>{
    const [inView, setInView] = useState(false)
    const ref = useRef()
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setInView(entry.isIntersecting)
      }, options)
  
      if (ref.current) {
        observer.observe(ref.current)
      }
  
      return () => {
        observer.disconnect()
      }
    }, [options])
  
    return [ref, inView]
  };

  const [element1Ref, element1InView] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: windowSize > 1100 ? 0.85 : 0.35,
  });
  const [element2Ref, element2InView] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  })
  const element1Props = useSpring({
    to: element1InView ? { opacity: 1, transform:"translateY(0)" } : { opacity: 0, transform: "translateY(-100px)" },
    config: windowSize > 1100 ? { duration: 400 } : { duration: 600 } ,
  });
  const element2Props = useSpring({
    to: element2InView ? { opacity: 1, transform:"translateY(0)" } : { opacity: 0, transform: "translateY(-100px)" },
    config: windowSize > 1100 ? { duration: 400 } : { duration: 600 },
  })
  return (
      <div>  
        {!user ?
          <div>
              <div className='gradient__bg' >
                <HomeMenu />
                <LandingOpener/>
              </div>
              <animated.div ref={element1Ref} style={element1Props}>
                <About/>
              </animated.div>
              <animated.div ref={element2Ref} style={element2Props}>
                <Prizes/>
              </animated.div>
          </div>
        :
        <div>
            <Dashboard />
        </div>
        }
      </div>
  );
}

export default App;
