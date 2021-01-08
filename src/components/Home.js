import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import fb from '../images/icons8-facebook-circled-48.png'
import ig from '../images/icons8-instagram-48.png'
import youtube from '../images/icons8-play-button-48.png'
import linkedin from '../images/icons8-linkedin-48.png'
import { useHistory } from "react-router-dom";
import './home.css'



export default function Home(props){
const {logo, pic, pic2} = props
const [isLoggedIn, setIsLoggedIn] = useState(false);
const history = useHistory();

const handleRegister = () => {
    history.push("/register")
};

useEffect(() => {
  if (localStorage.getItem("token")) {
    setIsLoggedIn(true);
  }
}, []);

    return(
        <div className='home-page'>
            <div className='fitness-img-container'>
                <div className='orange-bar'>
                    <h4>The World is Your Gym</h4>
                    <h4>Welcome</h4>
                </div>
                <div className='text-container-browser-classes'>
                    <h1>Browse Classes</h1>
                    <p>Our expert instructors conduct classes literally anywhere. Take a yoga class on a mountaintop. Do a boot camp on the beach. Go to an abandoned mansion for mat pilates. The options are limitless.</p>
                    <Link to='/browse'>
                        <button id='browse-btn'>Browse</button>
                    </Link>
                </div>
            </div>
            <div className='about-section'>
                <div className='about-section-title'>
                    <h2>From yoga to HIIT and from bootcamp to supping. Choose from a large mix of on- and offline lessons with the Anywhere Fitness app.</h2>
                </div>
                <div className='about-why-af'>
                    <div className='about'>
                        <h2>#ACTIVETOGETHER</h2>
                        <h1>Why Anywhere Fitness</h1>
                    
                        <ul>
                            <li>
                                <h3>More active than ever</h3>
                                <p>With over 1,000+ locations across the US, daily new workouts and unlimited online lessons, you'll always find something that suits you.</p>
                            </li>
                            <li>
                                <h3>For everyone</h3>
                                <p>It's never been so fun and easy to discover new workouts and locations. Choose from any workout you want, whenever you want. Alone or with friends.</p>
                            </li>
                            <li>
                                <h3>Freedom in your choices</h3>
                                <p>Our flexible membership gives you the choice to exercise or quit every month, no matter what. This way you create your own safe workout routine.</p>
                            </li>
                        </ul>
                    </div>
                <div className='img-container1'>
                    <img src={pic} alt='fitness' />
                </div>
                </div>
                <div className='find-why-af'>
                    <div className='img-container2'>
                        <img src={pic2} alt='fitness' />
                    </div>
                    <div className='why'>
                        <h2>FIND YOUR FIT</h2>
                        <h1>How does it work?</h1>
                        <ul>
                            <li>
                                <h3>1. Find and book lessons</h3>
                                <p>Discover all the lessons and book a spot.</p>
                            </li>
                            <li>
                                <h3>2. Visit and check-in or stream</h3>
                                <p>Go to the location and check in with the app. Are you doing an online class? Then you will receive a stream link via the app and your inbox.</p>
                            </li>
                            <li>
                                <h3>3. Time to exercise!</h3>
                                <p>Sweat and Joy! Go loose at the location or stream the online lesson from your living room, garden or balcony.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <div className='col1'>
                    <img id='logo-img' src={logo} alt='af'></img>
                </div>
                <div className='col2'>
                    <h3>Discover AF</h3>
                    <ul>
                        {/* <li><a href='javascript:void(0)'>Locations</a></li>
                        <li><a href='javascript:void(0)'>Lessons</a></li>
                        <li><a href='javascript:void(0)'>Blog</a></li>
                        <li><a href='javascript:void(0)'>FAQ</a></li>
                        <li><a href='javascript:void(0)'>For Business</a></li> */}
                    </ul>
                </div>
                <div className='col3'>
                    <h3>Company</h3>
                    <ul>
                        {/* <li><a href='javascript:void(0)'>Our STory</a></li>
                        <li><a href='javascript:void(0)'>Jobs</a></li>
                        <li><a href='javascript:void(0)'>Partner Portal</a></li>
                        <li><a href='javascript:void(0)'>Contact</a></li> */}
                        
                    </ul>
                </div>
                <div className='col4'>
                    <h3>Let's get social</h3>
                    <ul>
                        {/* <li><a href='javascript:void(0)'><img id='fb' src={fb} alt='fitness' /></a></li>
                        <li><a href='javascript:void(0)'><img id='ig' src={ig} alt='ig-icon' /></a></li>
                        <li><a href='javascript:void(0)'><img id='youtube' src={youtube} alt='yt-icon' /></a></li>
                        <li><a href='javascript:void(0)'><img id='linkedin' src={linkedin} alt='li-icon' /></a></li> */}
                    </ul>
                </div>
                <div className='col5'>
                    
                </div>
            </footer>
            {!isLoggedIn && <div className='static-footer'>
                <div className='btn-container'>
                    <button className='for-user-type-client' onClick={handleRegister} >Register Here</button>
                    {/* <button className='for-user-type-instructor'>For Instructors</button> */}
                </div>
            </div>}
        </div>
    )
}