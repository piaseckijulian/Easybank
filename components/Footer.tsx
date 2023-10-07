import { footerLinks } from '@/constants';
import { Button, Logo } from '.';
import { Facebook, Instagram, Pinterest, Twitter, YouTube } from './Icons';

const Footer = () => {
  return (
    <footer className="grid bg-darkBlue px-2 py-5 xs:px-16 md:px-40 md:py-10 lg:grid-cols-3">
      <div className="flexCenter flex-col lg:block">
        <Logo textColor="#fff" />

        <div className="mb-8 mt-8 flex gap-2 lg:mt-16">
          <Facebook />
          <YouTube />
          <Twitter />
          <Pinterest />
          <Instagram />
        </div>
      </div>

      <div className="flexCenter gap-4 max-lg:flex-col lg:gap-28">
        <ul className="flexCenter flex-col gap-4 lg:items-start">
          {footerLinks.left.map(({ title, href }) => (
            <li key={title}>
              <a
                href={href}
                className="text-center text-lightGrayish transition-all hover:text-primary lg:text-left"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flexCenter flex-col gap-4 lg:items-start">
          {footerLinks.right.map(({ title, href }) => (
            <li key={title}>
              <a
                href={href}
                className="text-center text-lightGrayish transition-all hover:text-primary lg:text-left"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flexCenter flex-col lg:block">
        <Button
          text="Request Invite"
          styles="lg:block lg:w-fit lg:ml-auto max-lg:mt-10"
        />
        <p className="mt-10 text-center text-grayish lg:text-right">
          &copy; Easybank. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
