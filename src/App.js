import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='h-screen bg-cream'>
      <div className='flex h-screen justify-center content-center items-center'>
        <div className='flex flex-col sm:flex-row  justify-center content-center '>
          <div className='bg-[url("/public/images/image-product-mobile.jpg")] sm:bg-[url("/public/images/image-product-desktop.jpg")] bg-cover bg-center bg-no-repeat w-full sm:w-[320px] min-h-[240px] rounded-tl-lg sm:rounded-bl-lg rounded-tr-lg sm:rounded-tr-none'></div>
          <div className='bg-white w-[320px] p-6 rounded-bl-lg rounded-br-lg sm:rounded-bl-none sm:rounded-r-lg'>
            <p className='font-montserrat text-sm sm:text-normal font-thin text-darkgrayishblue tracking-4'>
              PERFUME
            </p>
            <h1 className='font-fraunces text-verydarkblue text-3xl sm:text-4xl pt-3 pb-3 sm:pt-6 sm:pb-6'>
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className='text-darkgrayishblue tracking-wide text-sm'>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
              <div className='flex items-center pt-4 sm:pt-8  '>
                <p className='sm:text-4xl text-3xl text-darkcyan font-bold pr-4 font-fraunces'>
                  $149.99
                </p>
                <p className='line-through '>$169.99</p>
              </div>
              <button className=' font-montserrat font-medium bg-darkcyan flex w-full p-3 mt-5 text-white justify-center items-center rounded-lg active:bg-green-900'>
                <span className='pr-2'>
                  <img src='/images/icon-cart.svg' alt='cart icon' />
                </span>
                Add to Cart
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
