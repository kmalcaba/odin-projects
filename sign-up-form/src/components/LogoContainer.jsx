import bg from "../media/bg-image.jpg";
import logo from "../media/odin-lined.png";

const LogoContainer = () => {
  return (
    <div className='relative flex flex-col'>
      <img src={bg} alt='Black keyboard' className='max-h-screen' />
      <div className='absolute p-8 w-full flex justify-center items-center bg-black opacity-75 top-20'>
        <img src={logo} alt='Odin Project Logo' className='w-12 inline-block' />
        <h1 className='text-4xl inline-block mx-5 text-white'>Welcome</h1>
      </div>
    </div>
  );
};

export default LogoContainer;
