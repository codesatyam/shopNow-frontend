import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold">Get to Know Us</h3>
          <ul className="mt-2">
            <li><a href='#' className="mt-1 text-gray-400 hover:text-white hover:underline">Home</a></li>
            <li><a href='#' className="mt-1 text-gray-400 hover:text-white hover:underline">About Us</a></li>
            <li><a href='#' className="mt-1 text-gray-400 hover:text-white hover:underline">Careers</a></li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold">Connect with Us</h3>
          <ul className="mt-2">
            <li className=' hover:underline'><i className="fas fa-envelope text-white mr-2"></i>
              <a href="mailto:satyam84ya129@gmail.com" className="text-gray-400 hover:text-white">coderecse5@gmail.com</a>
            </li>
            <li className=' hover:underline'>
              <i className="fas fa-phone text-white mr-2"></i>
              <a href="tel:7905562832" className="text-gray-400 hover:text-white">+917905562832</a>
            </li>
            <li className='hover:underline'>
              <i className="fab fa-linkedin-in text-white mr-2"></i>
              <a href="https://www.linkedin.com/in/satyam58/" className="text-gray-400 hover:text-white">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold">Social Media</h3>
          <ul className="mt-2 flex justify-center sm:justify-start">
            <li><a href="#" className="text-gray-400 hover:text-white mr-4 hover:underline">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white mr-4 hover:underline">Twitter</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
      <hr className="mt-8 sm:hidden" />
      <div className="container mx-auto text-center sm:text-left">
        <p className="py-2 mb-0 text-gray-400">&copy; ShopNow 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
