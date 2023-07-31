import './Category.css'
import pic1 from './piccourse.png'
import pic2 from './author.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



import { useState } from 'react'
const Category = () => {
  const [All,setAll]=useState(true)
  const [Marketing,setMarketing]=useState(false)
  const [Business,setBusiness] =useState(false)
  const [Development,setDevelopment]=useState(false)
  const [ArtandDesigns,setArtandDesign]=useState(false)
  const [isopenrating,setisopenrating]=useState(false)
  const [isopenduration,setopenduration]=useState(false)
  const [isopenlang,setopenlang]=useState(false)
  const [isopenlevel,setopenlevel]=useState(false)
  const [isopenprice,setopenprice]=useState(false)
  const [isopenfeatures,setopenfeatures]=useState(false)
  const [isopencat,setopencat]=useState(false)






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
  const handelopenrating=()=>{
    setisopenrating(curr=>!curr)
  }
  const handelopenduration=()=>{
    setopenduration(curr=>!curr)
  }
  const handelopenlevel=()=>{
    setopenlevel(curr=>!curr)
  }
  const handelopenlang=()=>{
    setopenlang(curr=>!curr)
  }
  const handelopenprice=()=>{
    setopenprice(curr=>!curr)
  }
  const handelopencat=()=>{
    setopencat(curr=>!curr)
  }
  const handelopenfet=()=>{
    setopenfeatures(curr=>!curr)
  }
 
 
 
  return ( 
    <div className="MainCategory">

      <div className='BigCol'>

        <div className="Col-1Category">

<div className='Line-3Category'>
  <button className="Filterbtn">Filter</button>
</div>

<div className="Filter">

  <div className='Rating'>

    <div className='Line1-Filter'>
      <div className='rating'><span >Rating</span></div>
      <button className='closeandopenfilter' onClick={handelopenrating} >{isopenrating?<KeyboardArrowUpIcon sx={{ color: 'black' }} />:<KeyboardArrowDownIcon sx={{ color: 'black' }}/>}</button>
    </div>

    <div className='Line2-Filter'>
      {isopenrating?
      <>
        <div className='FilterRating'>
      <input type='checkbox'/>
     <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 100 16" fill="none">
   <path  d="M8.60779 12.8589L13.7124 16L12.3578 10.08L16.8677 6.09684L10.9288 5.58316L8.60779 0L6.28676 5.58316L0.3479 6.09684L4.8578 10.08L3.50318 16L8.60779 12.8589Z" fill="#FAA307"/>
   <path  d="M29.2577 12.8589L34.3623 16L33.0077 10.08L37.5176 6.09684L31.5787 5.58316L29.2577 0L26.9367 5.58316L20.9978 6.09684L25.5077 10.08L24.1531 16L29.2577 12.8589Z" fill="#FAA307"/>
   <path  d="M49.9073 12.8589L55.012 16L53.6573 10.08L58.1672 6.09684L52.2284 5.58316L49.9073 0L47.5863 5.58316L41.6475 6.09684L46.1574 10.08L44.8027 16L49.9073 12.8589Z" fill="#FAA307"/>
   <path  d="M70.5572 12.8589L75.6619 16L74.3072 10.08L78.8171 6.09684L72.8783 5.58316L70.5572 0L68.2362 5.58316L62.2974 6.09684L66.8073 10.08L65.4526 16L70.5572 12.8589Z" fill="#FAA307"/>
   <path  d="M91.2069 12.8589L96.3115 16L94.9569 10.08L99.4668 6.09684L93.5279 5.58316L91.2069 0L88.8859 5.58316L82.947 6.09684L87.4569 10.08L86.1023 16L91.2069 12.8589Z" fill="#FAA307"/>
     </svg>
     <span className='numstar'>5</span>
     <span className='numrating'>(2000)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
       <svg xmlns="http://www.w3.org/2000/svg" width="77" height="16" viewBox="0 0 77 16" fill="none">
<path  d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.58316L8 0L5.752 5.58316L0 6.09684L4.368 10.08L3.056 16L8 12.8589Z" fill="#FAA307"/>
<path  d="M28.0684 12.8589L33.0124 16L31.7004 10.08L36.0684 6.09684L30.3164 5.58316L28.0684 0L25.8204 5.58316L20.0684 6.09684L24.4364 10.08L23.1244 16L28.0684 12.8589Z" fill="#FAA307"/>
<path  d="M48.1367 12.8589L53.0807 16L51.7687 10.08L56.1367 6.09684L50.3847 5.58316L48.1367 0L45.8887 5.58316L40.1367 6.09684L44.5047 10.08L43.1927 16L48.1367 12.8589Z" fill="#FAA307"/>
<path  d="M68.2041 12.8589L73.1481 16L71.8361 10.08L76.2041 6.09684L70.4521 5.58316L68.2041 0L65.9561 5.58316L60.2041 6.09684L64.5721 10.08L63.2601 16L68.2041 12.8589Z" fill="#FAA307"/>
       </svg>
       <span className='numstar'>+4</span>
     <span className='numrating'>(1800)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
       <svg xmlns="http://www.w3.org/2000/svg" width="57" height="16" viewBox="0 0 57 16" fill="none">
<path  d="M8.02721 12.8589L12.988 16L11.6716 10.08L16.0544 6.09684L10.2829 5.58316L8.02721 0L5.77156 5.58316L0 6.09684L4.38286 10.08L3.06639 16L8.02721 12.8589Z" fill="#FAA307"/>
<path d="M28.0956 12.8589L33.0564 16L31.7399 10.08L36.1228 6.09684L30.3512 5.58316L28.0956 0L25.8399 5.58316L20.0684 6.09684L24.4512 10.08L23.1348 16L28.0956 12.8589Z" fill="#FAA307"/>
<path  d="M48.1639 12.8589L53.1247 16L51.8083 10.08L56.1911 6.09684L50.4196 5.58316L48.1639 0L45.9083 5.58316L40.1367 6.09684L44.5196 10.08L43.2031 16L48.1639 12.8589Z" fill="#FAA307"/>
       </svg>
       <span className='numstar'>+3</span>
     <span className='numrating'>(1400)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="16" viewBox="0 0 37 16" fill="none">
<path  d="M8.02721 12.8589L12.988 16L11.6716 10.08L16.0544 6.09684L10.2829 5.58316L8.02721 0L5.77156 5.58316L0 6.09684L4.38286 10.08L3.06639 16L8.02721 12.8589Z" fill="#FAA307"/>
<path d="M28.0956 12.8589L33.0564 16L31.7399 10.08L36.1228 6.09684L30.3512 5.58316L28.0956 0L25.8399 5.58316L20.0684 6.09684L24.4512 10.08L23.1348 16L28.0956 12.8589Z" fill="#FAA307"/>
        </svg>
       <span className='numstar'>+2</span>
     <span className='numrating'>(700)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<path  d="M8.02721 12.8589L12.988 16L11.6716 10.08L16.0544 6.09684L10.2829 5.58316L8.02721 0L5.77156 5.58316L0 6.09684L4.38286 10.08L3.06639 16L8.02721 12.8589Z" fill="#FAA307"/>
      </svg>
       <span className='numstar'>+1</span>
     <span className='numrating'>(100)</span>

      </div>

   
      </>
      :
      <></>}
    
    </div>

  </div>

  <div className='Durations'>

     <div className='Line1-Filter'>
      <div className='rating'><span >Durations</span></div>
      <button className='closeandopenfilter' onClick={handelopenduration} >{isopenduration?<KeyboardArrowUpIcon sx={{ color: 'black' }} />:<KeyboardArrowDownIcon sx={{ color: 'black' }}/>}</button>
      </div>

     <div className='Line2-Filter'>
      {isopenduration?
      <>
       <div className='FilterRating'>
      <input type='checkbox'/>
  
     <span className='numhours'>1-3 Hours</span>
     <span className='numrating'>(2000)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
  
     <span className='numhours'>1-3 Hours</span>
     <span className='numrating'>(2000)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
  
     <span className='numhours'>1-3 Hours</span>
     <span className='numrating'>(2000)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
  
     <span className='numhours'>1-3 Hours</span>
     <span className='numrating'>(2000)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
  
     <span className='numhours'>1-3 Hours</span>
     <span className='numrating'>(2000)</span>

      </div>
      </>
    :
    <></>
    }
     

     </div>

  </div>

  <div className='Categories'>
     <div className='Line1-Filter'>
      <div className='rating'><span >Categories</span></div>
      <button className='closeandopenfilter' onClick={handelopencat} >{isopencat?<KeyboardArrowUpIcon sx={{ color: 'black' }} />:<KeyboardArrowDownIcon sx={{ color: 'black' }}/>}</button>
    </div>

    <div className='Line2-Filter'>
      {isopencat?
      <>
       <div className='FilterRating'>
      <input type='checkbox'/>
    
     <span className='titlecat'>Flutter</span>
     <span className='numrating'>(2000)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
    
     <span className='titlecat'>Flutter</span>
     <span className='numrating'>(2000)</span>

      </div>  

      <div className='FilterRating'>
      <input type='checkbox'/>
    
     <span className='titlecat'>Flutter</span>
     <span className='numrating'>(2000)</span>

      </div>

        <div className='FilterRating'>
      <input type='checkbox'/>
    
     <span className='titlecat'>Flutter</span>
     <span className='numrating'>(2000)</span>

      </div>

        <div className='FilterRating'>
      <input type='checkbox'/>
    
     <span className='titlecat'>Flutter</span>
     <span className='numrating'>(2000)</span>

      </div>


      </>
      :
      <></>
      }
     
   
    </div>
  </div>

  <div className='Level'>
  <div className='Line1-Filter'>
      <div className='rating'><span >Level</span></div>
      <button className='closeandopenfilter' onClick={handelopenlevel} >{isopenlevel?<KeyboardArrowUpIcon sx={{ color: 'black' }} />:<KeyboardArrowDownIcon sx={{ color: 'black' }}/>}</button>
    </div>

    <div className='Line2-Filter'>
      {isopenlevel ?
       <>
       <div className='FilterRating'>
      <input type='checkbox'/>
     
     <span className='titlelevel'>Beginner</span>
     <span className='numrating'>(2000)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
     
     <span className='titlelevel'>Beginner</span>
     <span className='numrating'>(2000)</span>

      </div> 

       <div className='FilterRating'>
      <input type='checkbox'/>
     
     <span className='titlelevel'>Beginner</span>
     <span className='numrating'>(2000)</span>

      </div> 

       <div className='FilterRating'>
      <input type='checkbox'/>
     
     <span className='titlelevel'>Beginner</span>
     <span className='numrating'>(2000)</span>

      </div> 

       <div className='FilterRating'>
      <input type='checkbox'/>
     
     <span className='titlelevel'>Beginner</span>
     <span className='numrating'>(2000)</span>

      </div>
      </>
      :
      <></>
      }
      

   
    </div>
  </div>

  <div className='Language'>
    <div className='Line1-Filter'>
      <div className='rating'><span >Language</span></div>
      <button className='closeandopenfilter' onClick={handelopenlang} >{isopenlang?<KeyboardArrowUpIcon sx={{ color: 'black' }} />:<KeyboardArrowDownIcon sx={{ color: 'black' }}/>}</button>
    </div>

    <div className='Line2-Filter'>
      {isopenlang? 
      <>
       <div className='FilterRating'>
      <input type='checkbox'/>
   
     <span className='titlelang'>English</span>
     <span className='numrating'>(2000)</span>

      </div>

      <div className='FilterRating'>
      <input type='checkbox'/>
   
     <span className='titlelang'>English</span>
     <span className='numrating'>(2000)</span>

      </div>   

      <div className='FilterRating'>
      <input type='checkbox'/>
   
     <span className='titlelang'>English</span>
     <span className='numrating'>(2000)</span>

      </div>  
      
       <div className='FilterRating'>
      <input type='checkbox'/>
   
     <span className='titlelang'>English</span>
     <span className='numrating'>(2000)</span>

       </div>  

       <div className='FilterRating'>
      <input type='checkbox'/>
   
     <span className='titlelang'>English</span>
     <span className='numrating'>(2000)</span>

      </div>

      </>
       :<></>
       }
     

   
    </div>
  </div>

  <div className='Price'>
  <div className='Line1-Filter'>
      <div className='rating'><span >Price</span></div>
      <button className='closeandopenfilter' onClick={handelopenprice} >{isopenprice?<KeyboardArrowUpIcon sx={{ color: 'black' }} />:<KeyboardArrowDownIcon sx={{ color: 'black' }}/>}</button>
    </div>

    <div className='Line2-Filter'>
      {isopenprice?
      <>
      <div className='FilterRating'>
      <input type='checkbox'/>
    
     <span className='numstar'>5</span>
     <span className='numrating'>(2000)</span>

      </div>
      </>
      :
      <></>}
      

      
   
    </div>
  </div>

  <div className='Features'>
  <div className='Line1-Filter'>
      <div className='rating'><span >Features</span></div>
      <button className='closeandopenfilter' onClick={handelopenfet} >{isopenfeatures?<KeyboardArrowUpIcon sx={{ color: 'black' }} />:<KeyboardArrowDownIcon sx={{ color: 'black' }}/>}</button>
    </div>

    <div className='Line2-Filter'>
    {isopenfeatures?
     <>
     <div className='FilterRating'>
      <input type='checkbox'/>
     
     <span className='numstar'>5</span>
     <span className='numrating'>(2000)</span>

      </div>
    </>
    :
    <></>
    }
      

    
   
    </div>
  </div>

</div>

        </div>

        <div className="Col-2Category">

<div className="Line-1Category">

  <div className='Textline1'><span>Programing</span></div>
  <button className='btncat-2'>Most Popular</button>

</div>

<div className='BtnCategory'>
<button className='btncat-all' onClick={handelAll}>All</button>
<button className='btncat' onClick={handelMarketing}>Marketing</button>
<button className='btncat' onClick={handelBusiness}>Business</button>
<button className='btncat' onClick={handelDevelopment}>Development</button>
<button className='btncat' onClick={handelArtandDesign}>Art & Design</button>

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

</>
:
<></>


}
 </div>

        </div>

      </div>

      <div className='Pagination'>
      <Pagination count={10} shape="rounded" />

      </div>

     

    </div>

   );
}
 
export default Category;