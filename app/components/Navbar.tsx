import { MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="bg-teal-600 py-2 md:text-base text-sm px-1 text-white">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>
            <MailOutlined /> glameric@health.care
          </span>
          <span className='md:flex hidden'>
            <PhoneOutlined /> 90919 Madie Run Apt. 790
          </span>
        </div>
        <div>
          <WhatsAppOutlined /> Connect on WhatsApp
        </div>
      </div>
    </div>
  );
};

export default Navbar;
