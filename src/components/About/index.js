import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const Container = styled.div``;

const TextCont = styled.div``;

const CubeCont = styled.div`
  width: 50%;
  height: 100%;
  top: 0;
  padding-top: 18%;
  max-lines: 0;
  position: absolute;
  right: 0;
  overflow: hidden;
`;

const Cube = styled.div``;

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <Container className="container about">
        <TextCont className="text">
          <h1>
            <AnimatedLetters
              array={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm a very higly-motivated frontend developer looking for a role in
            IT company with the opportunity to work with the latest technologies
            and expose myself to diverse projects.
          </p>
          <p>
            I'm confident, naturally curious, and always want to imporve myself
            to become a better developer than yesterday.
          </p>
          <p>
            If I define myself in one sentence, that would be a family person, a
            sports fanatic, animal lover, and tech-obsessed!!!
          </p>
        </TextCont>

        <CubeCont>
          <Cube className="cubespin">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color="#44883e" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </Cube>
        </CubeCont>
      </Container>
      <Loader type="pacman" />
    </>
  );
}