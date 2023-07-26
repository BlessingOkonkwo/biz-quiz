import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    
  return (
    <div className="flex justify-between items-center border-b p-4 shadow-md sticky top-0 bg-white">
      <div>
        <Link to='/'>
            <h1 className="md:text-[] font-['Pacifico']">
                BIZQUIZZ
            </h1>
        </Link>
      </div>

      <div>
        <ul className="flex justify-center gap-12">
            <li>
              <Link>Quizzes</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Help</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
