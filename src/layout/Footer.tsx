import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">Get to Know Us</h3>
           <ul className="mt-2">
            <li><a href='#' className="mt-1 text-gray-400 hover:text-white hover:underline">Home</a></li>
            <li><a href='#' className="mt-1 text-gray-400 hover:text-white hover:underline">About Us</a></li>
            <li><a href='#' className="mt-1 text-gray-400 hover:text-white hover:underline">Careers</a></li>
            </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Connect with Us</h3>
          <ul className="mt-2 ">
            <li className=' hover:underline'><i className="fas fa-envelope text-white mr-2"></i>
             <a href="mailto:satyam84ya129@gmail.com" className="text-gray-400 hover:text-white block sm:inline">satyam84ya129@gmail.com</a></li>
          <li className=' hover:underline'>
  <i className="fas fa-phone text-white mr-2"></i>
  <a href="tel:7905562832" className="text-gray-400 hover:text-white block sm:inline">7905562832</a>
</li>

           <li className='hover:underline'>
  <i className="fab fa-linkedin-in text-white mr-2"></i>
  <a href="https://www.linkedin.com/in/satyam58/" className="text-gray-400 hover:text-white">LinkedIn</a>
</li>

          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Social Media</h3>
          <ul className="mt-2 flex">
            <li><a href="#" className="text-gray-400 hover:text-white mr-4 hover:underline">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white mr-4 hover:underline">Twitter</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="col-lg-6 col-sm-7 copy text-center">
         <p className=" py-2 mb-0 f_400">©ShopNow 2024 All rights reserved.</p>

</div>
    </footer>
  );
};

export default Footer;
