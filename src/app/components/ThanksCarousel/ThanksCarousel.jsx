import { Poppins } from 'next/font/google';

const roboto = Poppins({
  weight: '800',
  subsets: ['latin'],
});

import { items } from './items-data';
import TCard from './ThanksCard';

const Thanks = () => {
  // Only show first 3 items
  const displayItems = items.slice(0, 3);

  return (
    <div className={`${roboto.className} p-4 flex text-center flex-col justify-center mb-[100px] items-center  w-full select-none`}>
      <h3 className="self-center font-sans font-black text-3xl md:text-7xl leading-[68px] text-primary mb-12">
      THANKS FOR THE
      <span className="text-secondary-gradient"> TUTORIALS</span>
      </h3>

      <div className="w-full px-80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {displayItems.map((item, index) => (
            <div 
              key={index}
              className="flex justify-center w-full"
            >
              <TCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                url={item.url}
                borderColor="var(--color-secondary)"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thanks;
