import React, { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { projects } from '../../assets/constants/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Work() {
  const [letterClass, setLetterClass] = useState('text-animate');

  const time = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  };

  useEffect(() => {
    return time();
  }, []);

  return (
    <>
      <div className="container work">
        <div className="text">
          <h1>
            <AnimatedLetters
              array={['M', 'y', ' ', 'w', 'o', 'r', 'k']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p style={{ fontSize: '14px' }}>
            I have worked with a range of technologies in the web development
            world. From Frontend to Design. As a frontend developer and
            designer, I care deeply about user experience when developing.
          </p>
        </div>

        <div className="grid-container">
          {projects.map((p, i) => {
            return (
              <div className="maincontainer" key={i}>
                <div className="thecard">
                  <img className="thefront" src={p.image} alt="projects"></img>
                  <div className="theback">
                    <h1>{p.title}</h1>
                    <p>{p.description}</p>
                    <div className="stacks">
                      {p.tags.map((t, i) => {
                        return <span key={i}>{t}</span>;
                      })}
                    </div>
                    <div>
                      <a target="_blank" rel="noreferrer" href={p.source}>
                        <FontAwesomeIcon
                          className="icon"
                          icon={faGithub}
                          color="#000"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
