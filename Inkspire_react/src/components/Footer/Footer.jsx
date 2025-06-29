import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <footer className="bg-[#64c3cd] border-t border-[#b2ebf2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#26548A]">
                
                {/* Left: Logo and Brand Text */}
                <div className="flex items-center space-x-3">
                    <Logo width="100px" />
                    <p className="text-sm text-[#26548A]">&copy; {new Date().getFullYear()} Inkspire</p>
                </div>

                {/* Right: Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-6 text-[#26548A]">
                    <li>
                        <Link to="/" className="hover:text-[#0C6ABD] transition-colors duration-200">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-[#0C6ABD] transition-colors duration-200">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-[#0C6ABD] transition-colors duration-200">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
