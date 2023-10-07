import { benefits } from '@/constants';
import Image from 'next/image';

const About = () => {
  return (
    <section className="relative top-20 z-[5] bg-lightGrayish px-10 py-20 text-center lg:px-28 lg:text-left">
      <h2 className="mb-5 text-3xl text-darkBlue sm:text-4xl">Why choose Easybank?</h2>
      <p className="text-grayish lg:max-w-[570px]">
        We leverage Open Banking to turn your bank account into your financial hub.
        Control your finances like never before.
      </p>

      <div className="mt-20 flex flex-col justify-between gap-6 lg:flex-row">
        {benefits.map(({ title, desc, image }) => (
          <div key={title}>
            <Image
              src={image}
              alt={title}
              width={70}
              height={70}
              className="block max-lg:m-auto"
            />
            <h3 className="mt-4 text-2xl text-darkBlue lg:mt-8">{title}</h3>
            <p className="mt-4 text-grayish">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
