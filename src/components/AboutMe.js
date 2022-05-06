import React from 'react'

function AboutMe() {
  return (
      <>
    <p>
          My name is Glenn Larsen. I am a 31 year old man born and raised in
          Bergen, Norway. I am currently finishing my 2nd year in Frontend
          Development at Noroff in october 2022 while working part time for SIXT
          car rental.
        </p>

        <div className="cv">
          <a href="./Content/Glenn-Larsen-CV.pdf" download>Download CV</a>
        </div>
        </>
  )
}

export default AboutMe;