import { FaDiscord, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const roboto = Poppins({
  weight: '700',
  subsets: ['latin'],
});

const roboto2 = Poppins({
    weight: '700',
    subsets: ['latin'],
  });

export default function About() {
  return (
    <div className={`${roboto.className} flex min-h-screen flex-col items-center justify-center p-4 select-none`}>
      <h2 className="text-4xl md:text-6xl lg:text-8xl text-center text-secondary-gradient">
        WHO ARE WE??
      </h2>
      <p className={`${roboto2.className} max-w-7xl text-lg md:text-2xl lg:text-3xl text-center leading-relaxed mt-6 text-primary bg-gradient-to-br`}>
        We are a team of developers creating tech that's both helpful and impactful. <span className="text-secondary-gradient font-bold"> Since 2022</span>, we've developed <span className="text-secondary-gradient font-bold">Minecraft plugins</span> with over <span className="text-secondary-gradient font-bold">15k downloads</span> and <span className="text-secondary-gradient font-bold">550+ paid copies sold</span>. We're looking to expand into other domains soon.
      </p>
    </div>
  );
}
