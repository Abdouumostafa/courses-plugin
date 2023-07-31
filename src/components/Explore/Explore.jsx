import  './Explore.css'
import pic1 from './piccourse.png'
import pic2 from './author.png'
import { useState } from 'react'

const Explore = () => {
  const [All,setAll]=useState(true)
  const [Marketing,setMarketing]=useState(false)
  const [Business,setBusiness] =useState(false)
  const [Development,setDevelopment]=useState(false)
  const [ArtandDesigns,setArtandDesign]=useState(false)


  const handelAll=()=>{
    setAll(curr=>!curr)
  }
  const handelMarketing=()=>{
    setMarketing(curr=>!curr)

  }
  const handelBusiness=()=>{
    setBusiness(curr=>!curr)
  }
  const handelDevelopment=()=>{
    setDevelopment(curr=>!curr)
  }
  const handelArtandDesign=()=>{
    setArtandDesign(curr=>!curr)
  }
  return (

<div className='MainExplore'>

  <div className='Row-1EX'>
    <div className='Text-1'><span>Explore courses from great leaders</span></div>
    <div className='Text-2'><span>Mentors around the world teach millions of participants<br/> on Win way. We provide the tools and skills</span></div>
  </div>

  <div className='Row-2EX'>
    <div className='BtnCategory'>
      <button className='btncat' onClick={handelAll}>All</button>
      <button className='btncat' onClick={handelMarketing}>Marketing</button>
      <button className='btncat' onClick={handelBusiness}>Business</button>
      <button className='btncat' onClick={handelDevelopment}>Development</button>
      <button className='btncat' onClick={handelArtandDesign}>Art & Design</button>

    </div>
  </div>

  <div className='Row-3EX'>
{
All?
<>
<div className='MainCard'>

<div className='First'>
<div className='ImgOfCourse'>
   <img className='ImgOfCoures' src={pic1}></img>
</div>
<div className='CategoryOfCourse'><span>UI-UX Design</span></div>
<div className='TitleOfCourse'><span>Introduction to UI-UX</span></div>
<div className='DescriptionOfCoures'><span>This course aims to give you and teach you the basics of UI-UX....</span></div>
</div>

<div className='Second'>
  <div className='Seconde-1'>
    <div className='colSec-1'>
      <img className='PictureOfAuthor' src={pic2}></img>
    </div>
    <div className='colSec-2'>
      <div className='NameOfAuther'><span>Ahmed</span></div>
      <div className='PositionOfAuther'><span>Mentor</span></div>
    </div>

  </div>
  <div className='Seconde-2'>
    <div className='RatingCourse'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 100 16" fill="none">
           <path  d="M8.60779 12.8589L13.7124 16L12.3578 10.08L16.8677 6.09684L10.9288 5.58316L8.60779 0L6.28676 5.58316L0.3479 6.09684L4.8578 10.08L3.50318 16L8.60779 12.8589Z" fill="#FAA307"/>
           <path  d="M29.2577 12.8589L34.3623 16L33.0077 10.08L37.5176 6.09684L31.5787 5.58316L29.2577 0L26.9367 5.58316L20.9978 6.09684L25.5077 10.08L24.1531 16L29.2577 12.8589Z" fill="#FAA307"/>
           <path  d="M49.9073 12.8589L55.012 16L53.6573 10.08L58.1672 6.09684L52.2284 5.58316L49.9073 0L47.5863 5.58316L41.6475 6.09684L46.1574 10.08L44.8027 16L49.9073 12.8589Z" fill="#FAA307"/>
           <path  d="M70.5572 12.8589L75.6619 16L74.3072 10.08L78.8171 6.09684L72.8783 5.58316L70.5572 0L68.2362 5.58316L62.2974 6.09684L66.8073 10.08L65.4526 16L70.5572 12.8589Z" fill="#FAA307"/>
           <path  d="M91.2069 12.8589L96.3115 16L94.9569 10.08L99.4668 6.09684L93.5279 5.58316L91.2069 0L88.8859 5.58316L82.947 6.09684L87.4569 10.08L86.1023 16L91.2069 12.8589Z" fill="#FAA307"/>
      </svg>
      <span className='numrating'> (2000)</span></div>
    <div className='PriceCourse'><span className='OldPrice'> 200</span><span className='NewPrice'> $100</span></div>
  </div>

</div>
</div>

<div className='MainCard'>

<div className='First'>
<div className='ImgOfCourse'>
   <img className='ImgOfCoures' src={pic1}></img>
</div>
<div className='CategoryOfCourse'><span>UI-UX Design</span></div>
<div className='TitleOfCourse'><span>Introduction to UI-UX</span></div>
<div className='DescriptionOfCoures'><span>This course aims to give you and teach you the basics of UI-UX....</span></div>
</div>

<div className='Second'>
  <div className='Seconde-1'>
    <div className='colSec-1'>
      <img className='PictureOfAuthor' src={pic2}></img>
    </div>
    <div className='colSec-2'>
      <div className='NameOfAuther'><span>Ahmed</span></div>
      <div className='PositionOfAuther'><span>Mentor</span></div>
    </div>

  </div>
  <div className='Seconde-2'>
    <div className='RatingCourse'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 100 16" fill="none">
           <path  d="M8.60779 12.8589L13.7124 16L12.3578 10.08L16.8677 6.09684L10.9288 5.58316L8.60779 0L6.28676 5.58316L0.3479 6.09684L4.8578 10.08L3.50318 16L8.60779 12.8589Z" fill="#FAA307"/>
           <path  d="M29.2577 12.8589L34.3623 16L33.0077 10.08L37.5176 6.09684L31.5787 5.58316L29.2577 0L26.9367 5.58316L20.9978 6.09684L25.5077 10.08L24.1531 16L29.2577 12.8589Z" fill="#FAA307"/>
           <path  d="M49.9073 12.8589L55.012 16L53.6573 10.08L58.1672 6.09684L52.2284 5.58316L49.9073 0L47.5863 5.58316L41.6475 6.09684L46.1574 10.08L44.8027 16L49.9073 12.8589Z" fill="#FAA307"/>
           <path  d="M70.5572 12.8589L75.6619 16L74.3072 10.08L78.8171 6.09684L72.8783 5.58316L70.5572 0L68.2362 5.58316L62.2974 6.09684L66.8073 10.08L65.4526 16L70.5572 12.8589Z" fill="#FAA307"/>
           <path  d="M91.2069 12.8589L96.3115 16L94.9569 10.08L99.4668 6.09684L93.5279 5.58316L91.2069 0L88.8859 5.58316L82.947 6.09684L87.4569 10.08L86.1023 16L91.2069 12.8589Z" fill="#FAA307"/>
      </svg>
      <span className='numrating'> (2000)</span></div>
    <div className='PriceCourse'><span className='OldPrice'> 200</span><span className='NewPrice'> $100</span></div>
  </div>

</div>
</div>

<div className='MainCard'>

<div className='First'>
<div className='ImgOfCourse'>
   <img className='ImgOfCoures' src={pic1}></img>
</div>
<div className='CategoryOfCourse'><span>UI-UX Design</span></div>
<div className='TitleOfCourse'><span>Introduction to UI-UX</span></div>
<div className='DescriptionOfCoures'><span>This course aims to give you and teach you the basics of UI-UX....</span></div>
</div>

<div className='Second'>
  <div className='Seconde-1'>
    <div className='colSec-1'>
      <img className='PictureOfAuthor' src={pic2}></img>
    </div>
    <div className='colSec-2'>
      <div className='NameOfAuther'><span>Ahmed</span></div>
      <div className='PositionOfAuther'><span>Mentor</span></div>
    </div>

  </div>
  <div className='Seconde-2'>
    <div className='RatingCourse'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 100 16" fill="none">
           <path  d="M8.60779 12.8589L13.7124 16L12.3578 10.08L16.8677 6.09684L10.9288 5.58316L8.60779 0L6.28676 5.58316L0.3479 6.09684L4.8578 10.08L3.50318 16L8.60779 12.8589Z" fill="#FAA307"/>
           <path  d="M29.2577 12.8589L34.3623 16L33.0077 10.08L37.5176 6.09684L31.5787 5.58316L29.2577 0L26.9367 5.58316L20.9978 6.09684L25.5077 10.08L24.1531 16L29.2577 12.8589Z" fill="#FAA307"/>
           <path  d="M49.9073 12.8589L55.012 16L53.6573 10.08L58.1672 6.09684L52.2284 5.58316L49.9073 0L47.5863 5.58316L41.6475 6.09684L46.1574 10.08L44.8027 16L49.9073 12.8589Z" fill="#FAA307"/>
           <path  d="M70.5572 12.8589L75.6619 16L74.3072 10.08L78.8171 6.09684L72.8783 5.58316L70.5572 0L68.2362 5.58316L62.2974 6.09684L66.8073 10.08L65.4526 16L70.5572 12.8589Z" fill="#FAA307"/>
           <path  d="M91.2069 12.8589L96.3115 16L94.9569 10.08L99.4668 6.09684L93.5279 5.58316L91.2069 0L88.8859 5.58316L82.947 6.09684L87.4569 10.08L86.1023 16L91.2069 12.8589Z" fill="#FAA307"/>
      </svg>
      <span className='numrating'> (2000)</span></div>
    <div className='PriceCourse'><span className='OldPrice'> 200</span><span className='NewPrice'> $100</span></div>
  </div>

</div>
</div>

<div className='MainCard'>

<div className='First'>
<div className='ImgOfCourse'>
   <img className='ImgOfCoures' src={pic1}></img>
</div>
<div className='CategoryOfCourse'><span>UI-UX Design</span></div>
<div className='TitleOfCourse'><span>Introduction to UI-UX</span></div>
<div className='DescriptionOfCoures'><span>This course aims to give you and teach you the basics of UI-UX....</span></div>
</div>

<div className='Second'>
  <div className='Seconde-1'>
    <div className='colSec-1'>
      <img className='PictureOfAuthor' src={pic2}></img>
    </div>
    <div className='colSec-2'>
      <div className='NameOfAuther'><span>Ahmed</span></div>
      <div className='PositionOfAuther'><span>Mentor</span></div>
    </div>

  </div>
  <div className='Seconde-2'>
    <div className='RatingCourse'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 100 16" fill="none">
           <path  d="M8.60779 12.8589L13.7124 16L12.3578 10.08L16.8677 6.09684L10.9288 5.58316L8.60779 0L6.28676 5.58316L0.3479 6.09684L4.8578 10.08L3.50318 16L8.60779 12.8589Z" fill="#FAA307"/>
           <path  d="M29.2577 12.8589L34.3623 16L33.0077 10.08L37.5176 6.09684L31.5787 5.58316L29.2577 0L26.9367 5.58316L20.9978 6.09684L25.5077 10.08L24.1531 16L29.2577 12.8589Z" fill="#FAA307"/>
           <path  d="M49.9073 12.8589L55.012 16L53.6573 10.08L58.1672 6.09684L52.2284 5.58316L49.9073 0L47.5863 5.58316L41.6475 6.09684L46.1574 10.08L44.8027 16L49.9073 12.8589Z" fill="#FAA307"/>
           <path  d="M70.5572 12.8589L75.6619 16L74.3072 10.08L78.8171 6.09684L72.8783 5.58316L70.5572 0L68.2362 5.58316L62.2974 6.09684L66.8073 10.08L65.4526 16L70.5572 12.8589Z" fill="#FAA307"/>
           <path  d="M91.2069 12.8589L96.3115 16L94.9569 10.08L99.4668 6.09684L93.5279 5.58316L91.2069 0L88.8859 5.58316L82.947 6.09684L87.4569 10.08L86.1023 16L91.2069 12.8589Z" fill="#FAA307"/>
      </svg>
      <span className='numrating'> (2000)</span></div>
    <div className='PriceCourse'><span className='OldPrice'> 200</span><span className='NewPrice'> $100</span></div>
  </div>

</div>
</div>

<div className='MainCard'>

<div className='First'>
<div className='ImgOfCourse'>
   <img className='ImgOfCoures' src={pic1}></img>
</div>
<div className='CategoryOfCourse'><span>UI-UX Design</span></div>
<div className='TitleOfCourse'><span>Introduction to UI-UX</span></div>
<div className='DescriptionOfCoures'><span>This course aims to give you and teach you the basics of UI-UX....</span></div>
</div>

<div className='Second'>
  <div className='Seconde-1'>
    <div className='colSec-1'>
      <img className='PictureOfAuthor' src={pic2}></img>
    </div>
    <div className='colSec-2'>
      <div className='NameOfAuther'><span>Ahmed</span></div>
      <div className='PositionOfAuther'><span>Mentor</span></div>
    </div>

  </div>
  <div className='Seconde-2'>
    <div className='RatingCourse'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 100 16" fill="none">
           <path  d="M8.60779 12.8589L13.7124 16L12.3578 10.08L16.8677 6.09684L10.9288 5.58316L8.60779 0L6.28676 5.58316L0.3479 6.09684L4.8578 10.08L3.50318 16L8.60779 12.8589Z" fill="#FAA307"/>
           <path  d="M29.2577 12.8589L34.3623 16L33.0077 10.08L37.5176 6.09684L31.5787 5.58316L29.2577 0L26.9367 5.58316L20.9978 6.09684L25.5077 10.08L24.1531 16L29.2577 12.8589Z" fill="#FAA307"/>
           <path  d="M49.9073 12.8589L55.012 16L53.6573 10.08L58.1672 6.09684L52.2284 5.58316L49.9073 0L47.5863 5.58316L41.6475 6.09684L46.1574 10.08L44.8027 16L49.9073 12.8589Z" fill="#FAA307"/>
           <path  d="M70.5572 12.8589L75.6619 16L74.3072 10.08L78.8171 6.09684L72.8783 5.58316L70.5572 0L68.2362 5.58316L62.2974 6.09684L66.8073 10.08L65.4526 16L70.5572 12.8589Z" fill="#FAA307"/>
           <path  d="M91.2069 12.8589L96.3115 16L94.9569 10.08L99.4668 6.09684L93.5279 5.58316L91.2069 0L88.8859 5.58316L82.947 6.09684L87.4569 10.08L86.1023 16L91.2069 12.8589Z" fill="#FAA307"/>
      </svg>
      <span className='numrating'> (2000)</span></div>
    <div className='PriceCourse'><span className='OldPrice'> 200</span><span className='NewPrice'> $100</span></div>
  </div>

</div>
</div>

<div className='MainCard'>

<div className='First'>
<div className='ImgOfCourse'>
   <img className='ImgOfCoures' src={pic1}></img>
</div>
<div className='CategoryOfCourse'><span>UI-UX Design</span></div>
<div className='TitleOfCourse'><span>Introduction to UI-UX</span></div>
<div className='DescriptionOfCoures'><span>This course aims to give you and teach you the basics of UI-UX....</span></div>
</div>

<div className='Second'>
  <div className='Seconde-1'>
    <div className='colSec-1'>
      <img className='PictureOfAuthor' src={pic2}></img>
    </div>
    <div className='colSec-2'>
      <div className='NameOfAuther'><span>Ahmed</span></div>
      <div className='PositionOfAuther'><span>Mentor</span></div>
    </div>

  </div>
  <div className='Seconde-2'>
    <div className='RatingCourse'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 100 16" fill="none">
           <path  d="M8.60779 12.8589L13.7124 16L12.3578 10.08L16.8677 6.09684L10.9288 5.58316L8.60779 0L6.28676 5.58316L0.3479 6.09684L4.8578 10.08L3.50318 16L8.60779 12.8589Z" fill="#FAA307"/>
           <path  d="M29.2577 12.8589L34.3623 16L33.0077 10.08L37.5176 6.09684L31.5787 5.58316L29.2577 0L26.9367 5.58316L20.9978 6.09684L25.5077 10.08L24.1531 16L29.2577 12.8589Z" fill="#FAA307"/>
           <path  d="M49.9073 12.8589L55.012 16L53.6573 10.08L58.1672 6.09684L52.2284 5.58316L49.9073 0L47.5863 5.58316L41.6475 6.09684L46.1574 10.08L44.8027 16L49.9073 12.8589Z" fill="#FAA307"/>
           <path  d="M70.5572 12.8589L75.6619 16L74.3072 10.08L78.8171 6.09684L72.8783 5.58316L70.5572 0L68.2362 5.58316L62.2974 6.09684L66.8073 10.08L65.4526 16L70.5572 12.8589Z" fill="#FAA307"/>
           <path  d="M91.2069 12.8589L96.3115 16L94.9569 10.08L99.4668 6.09684L93.5279 5.58316L91.2069 0L88.8859 5.58316L82.947 6.09684L87.4569 10.08L86.1023 16L91.2069 12.8589Z" fill="#FAA307"/>
      </svg>
      <span className='numrating'> (2000)</span></div>
    <div className='PriceCourse'><span className='OldPrice'> 200</span><span className='NewPrice'> $100</span></div>
  </div>

</div>
</div>

<div className='MainCard'>

<div className='First'>
<div className='ImgOfCourse'>
   <img className='ImgOfCoures' src={pic1}></img>
</div>
<div className='CategoryOfCourse'><span>UI-UX Design</span></div>
<div className='TitleOfCourse'><span>Introduction to UI-UX</span></div>
<div className='DescriptionOfCoures'><span>This course aims to give you and teach you the basics of UI-UX....</span></div>
</div>

<div className='Second'>
  <div className='Seconde-1'>
    <div className='colSec-1'>
      <img className='PictureOfAuthor' src={pic2}></img>
    </div>
    <div className='colSec-2'>
      <div className='NameOfAuther'><span>Ahmed</span></div>
      <div className='PositionOfAuther'><span>Mentor</span></div>
    </div>

  </div>
  <div className='Seconde-2'>
    <div className='RatingCourse'>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 100 16" fill="none">
           <path  d="M8.60779 12.8589L13.7124 16L12.3578 10.08L16.8677 6.09684L10.9288 5.58316L8.60779 0L6.28676 5.58316L0.3479 6.09684L4.8578 10.08L3.50318 16L8.60779 12.8589Z" fill="#FAA307"/>
           <path  d="M29.2577 12.8589L34.3623 16L33.0077 10.08L37.5176 6.09684L31.5787 5.58316L29.2577 0L26.9367 5.58316L20.9978 6.09684L25.5077 10.08L24.1531 16L29.2577 12.8589Z" fill="#FAA307"/>
           <path  d="M49.9073 12.8589L55.012 16L53.6573 10.08L58.1672 6.09684L52.2284 5.58316L49.9073 0L47.5863 5.58316L41.6475 6.09684L46.1574 10.08L44.8027 16L49.9073 12.8589Z" fill="#FAA307"/>
           <path  d="M70.5572 12.8589L75.6619 16L74.3072 10.08L78.8171 6.09684L72.8783 5.58316L70.5572 0L68.2362 5.58316L62.2974 6.09684L66.8073 10.08L65.4526 16L70.5572 12.8589Z" fill="#FAA307"/>
           <path  d="M91.2069 12.8589L96.3115 16L94.9569 10.08L99.4668 6.09684L93.5279 5.58316L91.2069 0L88.8859 5.58316L82.947 6.09684L87.4569 10.08L86.1023 16L91.2069 12.8589Z" fill="#FAA307"/>
      </svg>
      <span className='numrating'> (2000)</span></div>
    <div className='PriceCourse'><span className='OldPrice'> 200</span><span className='NewPrice'> $100</span></div>
  </div>

</div>
</div>

</>
:
<></>


}
  </div>

  <div className='Row-4EX'>
    <button className='morecourses'>More Courses</button>
  </div>

</div>   
 )
}

export default Explore
