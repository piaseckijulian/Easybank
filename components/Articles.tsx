import { articles } from '@/constants';
import Image from 'next/image';

const Articles = () => {
  return (
    <section className="bg-gray px-5 pt-44 xs:px-10 lg:px-28">
      <h1 className="mb-14 text-center text-4xl text-darkBlue lg:text-left">
        Latest Articles
      </h1>

      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        {articles.map(({ img, creator, title, content }) => (
          <article className="rounded-lg bg-white" key={title}>
            <Image
              src={img}
              alt={title}
              width={500}
              height={500}
              className="h-[200px] w-full rounded-t-lg object-cover md:h-[250px]"
            />
            <div className="px-[10px] pb-8">
              <p className="mb-2 mt-8 text-xs text-grayish">{creator}</p>
              <h3 className="mb-4 cursor-pointer text-2xl leading-tight text-darkBlue transition-all hover:text-primary">
                {title}
              </h3>
              <p className="text-grayish">{content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Articles;
