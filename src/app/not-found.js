import { Poppins } from "next/font/google";
import Image from "next/image"; // ✅ Import the Image component
import image from "../images/hmmbo.png";

const roboto = Poppins({
  weight: "800",
  subsets: ["latin"],
});

export default function Custom404() {
  return (
    <div className="flex min-h-screen items-center justify-center text-right select-none">
      <h1
        className={`${roboto.className}  mt-32 text-[6rem] md:text-[11rem] leading-[80px] md:leading-[130px] items-end tracking-[-0.55rem] md:tracking-[-0.65rem] bg-gradient-to-r from-[#20B478] to-[#58B83A] bg-clip-text text-transparent text-center`}
      >
        404!!
        <br />
        <span className="text-[#5277db] text-[2rem] md:text-[6rem] tracking-[0rem]">
          PAGE NOT FOUND
        </span>
      </h1>
      <Image
        src={image}
        alt="HMMBO Studios Logo"
        width={200}
        height={200}
        className="-ml-8 mt-4 hidden sm:block align-baseline" // ✅ Adjusted for baseline alignment
      />
    </div>
  );
}
