import React from 'react'
import Home from './Home'
import Projects from './Project'
import Skill from './Skill'
import Contact from './Contact'
import About from './About'

const Hero = () => {
  return (
    <div>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skill /></section>
      <section id="contact"><Contact /></section>

    </div>
  )
}

export default Hero
