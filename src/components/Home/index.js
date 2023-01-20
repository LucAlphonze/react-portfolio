import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    var nameStr = ' Luca';
    var jobStr = 'Fullstack Developer';

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameStr.split('')} idx={15} />
                    <img src={LogoTitle} alt='developer' />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobStr.split('')} idx={22} />
                </h1>
                <h2>
                    Fullstack Developer / Otras cosas para rellenar
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>)
}

export default Home;