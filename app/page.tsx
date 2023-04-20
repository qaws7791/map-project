import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import './style.css'
import {CgMenu } from 'react-icons/cg'
const inter = Inter({ subsets: ['latin'] })
import Script from 'next/script'
import './style-border.css'

export default function Home() {


  
  return (
    <>
    <Script src="/script.js" strategy='lazyOnload'/>

    <header className="header">
      <a href="#" className="logo">
        <Image src="/logo.png" alt="logo" width={50} height={50}/>
      </a>

      <ul className="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="header-icons">
        <button className="btn-primary login-btn btn ">Login</button>
        <div id='menu-icon'><CgMenu/></div>
        
      </div>
    </header>

    <section className="home" id="home">
      <div className="home-text">
        <h6>Best online learning platform</h6>
        <h1>Accessible Online Courses For All</h1>
        <p>Own your future learning new skills online</p>
        <div className="btns">
          <button className="btn-primary btn">Start</button>
          <button className="btn-second btn">Explore</button>
        </div>


      </div>

      <div className="home-img">
        <img src="/main.png" alt="" />
      </div>
    </section>

    <section className="categories" id="categories">
      <div className="center-text">
        <h5>CATEGORIES</h5>
        <h2>Popular Categories</h2>
      </div>

      <div className="categories-content">
        <div className="box">
          <img src="https://picsum.photos/300" alt="" />
          <h3>Angular Development</h3>
          <p>5 Courses</p>
        </div>

        <div className="box">
          <img src="https://picsum.photos/300" alt="" />
          <h3>Angular Development</h3>
          <p>5 Courses</p>
        </div>

        <div className="box">
          <img src="https://picsum.photos/300" alt="" />
          <h3>Angular Development</h3>
          <p>5 Courses</p>
        </div>

        <div className="box">
          <img src="https://picsum.photos/300" alt="" />
          <h3>Angular Development</h3>
          <p>5 Courses</p>
        </div>
      </div>
    </section>

    <section className="contact" id="contact">
      <div className="main-content">
        <div className="contact-content">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </div>

        <div className="contact-content">
          <li><a href="#home">Home</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>

        <div className="contact-content">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Instructor</a></li>
          <li><a href="#">Dashboard</a></li>
        </div>

        <div className="contact-content">
          <li>
            <a href="#"
              >San Francisco,<br />
              California, CA 94108</a
            >
          </li>
          <li><a href="#">dreamslms@example.com</a></li>
          <li><a href="#">01646895741</a></li>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="last-text">
        <p>© 2022 Tahmid Ahmed. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}
