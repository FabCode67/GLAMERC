import { MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="bg-teal-600 py-2 md:text-base text-sm px-3 text-white">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>
            <MailOutlined /> dentalimaging100@gmail.com
          </span>
          <span className='md:flex hidden'>
            <PhoneOutlined /> 90919 Madie Run Apt. 790
          </span>
        </div>
        <div>
          <a href="https://wa.me/250784012286" className="flex items-center md:space-x-2 space-x-1">
            <WhatsAppOutlined /> <span className='hidden md:flex'>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
