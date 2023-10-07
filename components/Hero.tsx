import Image from 'next/image';
import { Button } from './';

const Hero = () => {
  return (
    <section className="flexBetween flex-col !items-start bg-gray lg:h-[70vh] lg:flex-row">
      <div className="order-2 text-center lg:order-[0] lg:ml-20 lg:mt-32 lg:text-left xl:ml-28 ">
        <h1 className="mb-6 text-4xl leading-tight text-darkBlue xs:text-5xl">
          Next generation <br className="hidden xs:block" /> digital banking
        </h1>

        <p className="mb-10 px-5 text-xl text-grayish xs:px-10 sm:text-lg md:px-20 lg:max-w-[400px] lg:p-0">
          Take your financial life online. Your Easybank account will be a one-stop-shop
          for spending, saving, budgeting, investing, and much more.
        </p>

        <Button text="Request Invite" />
      </div>

      <div className="relative order-1 max-lg:w-full lg:static lg:order-[0]">
        <Image
          src="/assets/bg-intro-desktop.png"
          alt=""
          width={500}
          height={500}
          className="hero__img-desktop hidden lg:block"
        />

        <Image
          src="/assets/image-mockups-desktop.png"
          alt=""
          width={500}
          height={500}
          className="hero__phones-desktop hidden lg:block"
        />

        <Image
          src="/assets/bg-intro-mobile.svg"
          alt=""
          width={500}
          height={500}
          className="hero__img-mobile block lg:hidden"
        />

        <Image
          src="/assets/image-mockups-mobile.png"
          alt=""
          width={500}
          height={500}
          className="hero__phones-mobile block lg:hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
