import ParticlesBg from "particles-bg";
import './App.css'
import profileImg from './assets/profile.png'
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import TextLoop from "react-text-loop";
import Typist from "react-typist";
import { useState } from "react";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    hideWhenDone: true,
  }

  const [darkmode, setdarkmode] = useState(false);

  return (
    <div>
      <div className={`card ${darkmode ? 'dark' : ''}`}>
        <div className="toggle-btn" onClick={() => setdarkmode(!darkmode)}></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center ">
            <img src={profileImg} className="avatar" alt="avatar" />
            <div className="bg_content rd_12 p_8">
              <h1>@irvannih_</h1>
              <p className='mt-16'>Muhammad Irvan</p>
              <Typist cursor={config_cursor}>
                Don't worry about failure, but worry about the chance that you miss. 🙈
              </Typist>
            </div>

            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with{' '}
              <TextLoop interval={800}>
                <span className='highlight'>Figma</span>
                <span className='highlight'>HTML</span>
                <span className='highlight'>CSS</span>
                <span className='highlight'>JavaScript</span>
                <span className='highlight'>React</span>
                <span className='highlight'>Flutter</span>
                <span className='highlight'>MySQL</span>
              </TextLoop>
            </div>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.instagram.com/irvannih_/">
              <AiOutlineInstagram size={25} />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://github.com/irvan99x">
              <AiOutlineGithub size={25} />
              <span>Github</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.linkedin.com/in/m-irvann/">
              <AiOutlineLinkedin size={25} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.heyirvan.site/">
              <AiOutlineLink size={25} />
              <span>Website</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.facebook.com/irvannih0/">
              <AiOutlineFacebook size={25} />
              <span>Facebook</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="mailto:mirvan3107@gmail.com?subject=Hello&body=Hello Irvan">
              <AiOutlineMail size={25} />
              <span>Email</span>
            </a>
          </div>
          <div className="footer">
            <i>made with love 💕</i>
          </div>
        </div>
      </div>
      <ParticlesBg type="circle" bg={true} />
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
