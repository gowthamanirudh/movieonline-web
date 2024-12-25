import React from 'react';

const Footer=()=>{
    return(
    <footer className="bg-blue-800 text-white py-2">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Movie Web. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="#"
              className="hover:underline"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:underline"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:underline"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;