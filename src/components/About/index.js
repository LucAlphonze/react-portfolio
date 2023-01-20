import { faCss3, faGitAlt, faHtml5, faJs, faJsSquare, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

let abt = 'About me'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={abt.split('')} idx={15} />
                </h1>
                <p>
                    I'm a very ambitious fullstack developer looking for a role in a established IT
                    company with the opportunity to work with the latest technologies on challenging
                    and diverse projects.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually working on improving
                    my skills one design problem at a time.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'><FontAwesomeIcon icon={faJsSquare} color="#EFD81D"
                    /></div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" /></div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" /></div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" /></div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#DD0031" /></div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNode} color="#6cc24a" /></div>
                </div>
            </div>
        </div>
    )
}

export default About; 