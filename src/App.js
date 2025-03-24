import React, { useEffect, useState } from 'react';
import './App.css';
import profileImage from './images/PFP.jpg';
import Card from './card'; // Make sure the path matches where your Card.js is


function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Make the text visible after component mounts
  }, []);


  return (
    <div style={{ paddingBottom: '100px' }}>
      {/*Header*/}
      <a  href="https://www.linkedin.com/in/keenan-yang-5155682a2/"style={{position:'absolute', top:63, left:255}}>
        <img style={{width: 68, height: 68, left: 0, top: 0, position: 'absolute', borderRadius: 9999}} src={profileImage} alt="PFP" />
        <div style={{width: 8, height: 8, left: 82, top: 45, position: 'absolute', background: '#8AFF8E', borderRadius: 9999}} />
        <div style={{width:97, left: 94, top: 40, position: 'absolute', color: 'black', fontSize: 11.73, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word'}}>Looking For Work</div>
        <div style={{width:109, left: 82, top: 16, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Keenan Yang</div>
      </a>

      <div style={{position:'absolute', top:73, left:906 }}>
        <a href = "#experiences"style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word', textDecoration: 'none'}}>Experience</a>
        <a href = "#projects"style={{left: 135, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' , textDecoration: 'none'}}>Projects</a>
        <a href = "#contact" style={{left: 244, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' , textDecoration: 'none'}}>Contact</a>
      </div>
        
      {/*Introduction Title */}
      <div className={isVisible ? 'fade-in' : ''} style={{color: 'black', fontSize: 50, fontFamily: 'horizon', fontWeight: '700', position:'absolute', top:221, left:421}}>
        Keenan Yang
      </div>
      <div className={isVisible ? 'fade-in' : ''} style={{color: 'black', fontSize: 50, fontFamily: 'horizonOutlined', fontWeight: '300', position:'absolute', top:275, left:421}}>
        Ui/UX Designer
      </div>
      <div className={isVisible ? 'fade-in' : ''} style={{width:523, color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word', position:'absolute', top:342, left:421, textAlign: 'left'}}>
        I’m a Computer Science Student at Queen’s University and I am passionate about Front End Design and Software Development.
      </div>

      {/*Resume Button */}
      <div>
        <button className="resumeButton" style={{position:'absolute', top:427, left:419}}>Resume</button>
      </div>

      {/* Experience #Remember to turn the profiles into components!!!*/}
      <div id="experiences"style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Horizon', fontWeight: '700', wordWrap: 'break-word', position:'absolute', top:750, left:505}}>Experience</div>

      <div style={{width: '100%', height: '100%', position: 'absolute', top:908, left:712}}>
        <div style={{width: 18, height: 17, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
        <div style={{width: 153, height: 0, left: 9.50, top: 168, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1.83px #D9D9D9 solid', outlineOffset: '-0.91px'}}></div>
        <div style={{width: 18, height: 17, left: 0, top: 166, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
        <div style={{width: 153, height: 0, left: 9.50, top: 335, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left', outline: '1.83px #D9D9D9 solid', outlineOffset: '-0.91px'}}></div>
        <div style={{width: 18, height: 17, left: 0, top: 333, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
      </div>

      <div style={{width: '100%', height: '100%', position: 'absolute', top: 908, left:347}}>
        <div style={{left: 65, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>Junior UI/UX Designer</div>
        <div style={{left: 65, top: 30, position: 'absolute', color: '#878787', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>QTMA - Kingston</div>
        <div style={{left: 99, top: 85, position: 'absolute', color: '#878787', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>2024-2025</div>
        
        <div style={{width: 24, height: 24, left: 65, top: 85, position: 'absolute', overflow: 'hidden'}}>
            <div style={{width: 18, height: 20, left: 3, top: 2, position: 'absolute', outline: '2px #878787 solid', outlineOffset: '-1px'}} />       {/* Calendar Icon */}

        </div>
        <div style={{width: 45, height: 45, left: 0, top: 6, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />       {/* PFP */}
      </div>

      <div style={{width: '100%', height: '100%', position: 'absolute', top: 1061, left:809}}>
        <div style={{left: 65, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>AI Design Team Member</div>
        <div style={{left: 65, top: 30, position: 'absolute', color: '#878787', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>QMIND - Kingston</div>
        <div style={{left: 99, top: 85, position: 'absolute', color: '#878787', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>2024-2025</div>
        <div style={{width: 24, height: 24, left: 65, top: 85, position: 'absolute', overflow: 'hidden'}}>
            <div style={{width: 18, height: 20, left: 3, top: 2, position: 'absolute', outline: '2px #878787 solid', outlineOffset: '-1px'}} />
        </div>
        <div style={{width: 45, height: 45, left: 0, top: 6, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
      </div>

      <div style={{width: '100%', height: '100%', position: 'absolute', top: 1241, left:347}}>
        <div style={{left: 65, top: 0, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '900', wordWrap: 'break-word'}}>UI/UX Designer</div>
        <div style={{left: 65, top: 30, position: 'absolute', color: '#878787', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>QTMA - Kingston</div>
        <div style={{left: 99, top: 85, position: 'absolute', color: '#878787', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>2025-Present</div>
        <div style={{width: 24, height: 24, left: 65, top: 85, position: 'absolute', overflow: 'hidden'}}>
            <div style={{width: 18, height: 20, left: 3, top: 2, position: 'absolute', outline: '2px #878787 solid', outlineOffset: '-1px'}} />
        </div>
        <div style={{width: 45, height: 45, left: 0, top: 6, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
      </div>

      {/* Projects  #Remember to turn the profiles into components!!!*/}
      <div id="projects" style={{textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Horizon', fontWeight: '700', wordWrap: 'break-word', position:'absolute', top:1586, left:561}}>Projects</div>
      <div style={{position:'absolute', top:1700, left:329}}>
        <Card/>
      </div>

    </div>
  );
}


export default App;
