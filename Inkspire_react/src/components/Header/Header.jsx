import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  
  //SCROLL KRNE PAR COLOR CHANGE
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust threshold if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`sticky top-0 z-50 py-4 border-b-2 border-b-[#0C6ABD] shadow-sm transition-colors duration-300 ${
        scrolled ? 'bg-[#B2EBF3]' : 'bg-[#E0F7FA]'}`}>
      <Container>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
          <div className='flex items-center'>
            <Link to='/'> 
              <Logo width='70px'/>

              </Link>
          </div>
          <ul className='hidden md:flex flex-1 justify-end items-center space-x-6'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='text-black hover:text-red-400 transition-all duration-300 font-medium rounded-md px-3 py-2 transform hover:scale-105'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header