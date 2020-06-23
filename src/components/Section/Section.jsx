import React from 'react';
import './Section.css'
import { Zoom, Fade } from 'react-reveal';


export default function Section({ text, image, dir = 'row', top = 0 }) {
  return (
    <section>
      <div className='myselfSection' style={{ flexDirection: dir, marginTop: top }}>
        <div>
          <Zoom>
            <p>{text}</p>
          </Zoom>
        </div>
        <Fade>
          <img src={image} alt='Img' />
        </Fade>
      </div>
    </section>
  )
}