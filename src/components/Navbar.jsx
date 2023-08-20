import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs' ;
import { RiChat4Line, RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';



const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter' >
    <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const {currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize} = useStateContext();


  //To track the width of our device 
  useEffect(()=> {
    const handleResize = () => setScreenSize(window.innerWidth); //setting screen size to the viewing window
    window.addEventListener('resize', handleResize);//resize will track all our resize options and if it resizes we're gonna call th handleResize function 
    
    handleResize();  // calling this iinitially to figure out the initial width.
    
    return () => window.removeEventListener('resize', handleResize); // In react whenever we use addEventListener you also want to remove the eventListener in the end.  


  }, []);


  //Hiding the navbar initially on small devices
  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false);
    }
    else{
      setActiveMenu(true);
    }
  }, [screenSize]); 

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={() => setActiveMenu((preActiveMenu) => !preActiveMenu)} color={currentColor} icon={<AiOutlineMenu/>}/>

      <div className='flex'>
        <NavButton title='Cart' customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart/>}/>
        <NavButton title='Chat' dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<RiChat4Line/>}/>
        <NavButton title='Notifications' dotColor="#03C9D7" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line/>}/>

        <TooltipComponent content="Profile" position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick()}>
            <img src={avatar} alt="" className='rounded-full w-8 h-8'/>
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Yuvraj</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.UserProfile && <UserProfile/>}
      </div>

    </div>
  )
}

export default Navbar