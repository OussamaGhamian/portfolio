import React from 'react'
import agent_file from './Oussama Ghamian CV.pdf';
import Logo from './components/Logo/Logo'
import Section from './components/Section/Section'
import { Zoom, Fade, Bounce } from 'react-reveal';
import Particles from 'react-particles-js';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import About from '@material-ui/icons/Info';
import Tech from '@material-ui/icons/Code';
import Cv from '@material-ui/icons/Description';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import FavoriteBorderIcon from '@material-ui/icons/Favorite';
import { Link, animateScroll as scroll } from "react-scroll";
import LoadingScreen from 'react-loading-screen'
import './App.css'
import ProgrammerHeroImg from './images/programming.svg'
import Programmer1HeroImg from './images/programming1.svg'
import BugsFixer from './images/bugsFixer.svg'
import TeamWorker from './images/TeamWorker.svg'
import Hire from './images/hire.svg'
import Me from './images/me.svg'

export default function App() {
  const [logosName, setLogosName] = React.useState(['html5', 'css3', 'sass', 'bootstrap', 'javascript', 'php', 'react', 'laravel', 'nodejs', 'wordpress', 'mysql', 'linux', 'github', 'gitlab', 'git', 'visualstudio', 'trello']);
  const [menuOpen, setMenuOpen] = React.useState(true)
  const [nav, setNav] = React.useState(['home', 'about', 'tech', 'cv', 'home']);
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  const shuffle = () => {
    let shuffledArr = logosName.sort(() => Math.random() - 0.5)
    setLogosName([...shuffledArr])
  }

  return (
    <div className='App'>
      {loading ? <LoadingScreen
        loading={loading}
        bgColor="black"
        spinnerColor="#9ee5f8"
        textColor="white"
        text="Your chance to get me in your team is Loading"
      /> : (<><section class="container">
        <div class="skewed"></div>
      </section>
        <section class="sideNav">
          {menuOpen ? (<Zoom>

            {nav.map((navItem, i) => <Link
              className='link'
              activeClass="active"
              to={navItem}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            ><div className='circle'>{i == 0 ? <Home /> : i == 1 ? <About /> : i == 2 ? <Tech /> : i == 3 ? <Cv /> : <ArrowUpwardIcon onClick={() => setMenuOpen(!menuOpen)} />}</div></Link>)}

          </Zoom>) : <Zoom className='fixed'><MenuIcon onClick={() => setMenuOpen(!menuOpen)} /> </Zoom>}
        </section>
        <Particles
          className="particles"
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#000",
                  blur: 1
                }
              },
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1000
                }
              }
            }
          }}
        />
        <div className='banner' id='home'>
          <Bounce><p>Oussama <span id='fName'>AlGhamian</span>
            <p>Logically Minded && Creative At <span><FavoriteBorderIcon /></span></p>
          </p></Bounce>
          <Fade> <img src={Me} alt='me' /></Fade>
        </div>
        <h1 id='about'>Why<span>me</span><Fade>?</Fade></h1>
        <Section text='Full Stack Web Developer' image={ProgrammerHeroImg} dir='row-reverse' top={100} />
        <Section text='Fully Organized' image={Programmer1HeroImg} />
        <Section text='Team Worker' image={TeamWorker} dir='row-reverse' />
        <Section text='Bugs Fixer' image={BugsFixer} />
        <section className='cv' id='tech'>
          <Zoom>
            <p>What's in my GitHub?</p>
            <a href='https://github.com/OussamaGhamian' target='_blank'> <Logo classNm={`devicon-github-plain colored`} /></a>
          </Zoom>
        </section>
        <section>
          <div className='logoSection' >
            <h1>Familiar <span>with</span><Fade>&more</Fade></h1>
            <Zoom>
              <div className="logos" onMouseOver={() => setTimeout(() => shuffle(), 50)}>
                {logosName.map((logoName, index) => <Logo key={index} classNm={`devicon-${logoName}-plain colored`} />)}
              </div>
            </Zoom>
          </div>
        </section>
        <section className='cv' id='cv'>
          <Zoom>
            <a href={agent_file} download="Oussama Ghamian CV.pdf"><img src={Hire} height={150} /></a>
            <p>Hire me? Get my <span>CV</span></p>
          </Zoom>
        </section>
        <footer>
          <div>
            <a href='https://wa.me/96176664873' target="_blank"><WhatsAppIcon /></a>
            <a href='https://www.facebook.com/SAM001998' target="_blank"><FacebookIcon /></a>
            <a href='mailto=oussamaalghamian@gmail.com'><EmailIcon /></a>
          </div>
          <p>Created with <Zoom><span><FavoriteBorderIcon /></span></Zoom> by Oussama Ghamian &copy; {new Date().getFullYear()}</p>
        </footer>
      </>)}
    </div >
  )
}
