import NavigationBar from "../components/Navigation/NavigationBar";
import HelpForm from "../components/Help/HelpForms";
import Footer from "../components/Footer/footer";
import { FaDiscord, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function HelpPage() {
  return (
    <div>
      <NavigationBar />
      <div className="min-h-screen flex items-start mt-10 justify-center p-8 bg-black text-white">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: Client Form */}
          <HelpForm />

          {/* Right: SEO Content */}
          <div className="space-y-6 text-sm">
            <div>
              <h1 className="text-4xl font-bold mb-6">Looking for help?</h1>
              <h2 className="font-semibold mb-1">Have any questions about our company or services?</h2>
              <p>
                We’re here to help! Please feel free to ask us anything about our company or the services we provide. We'll do our best to provide you with the information you need.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">Do we issue refunds?</h2>
              <p>
                Due to the virtual nature of our products/services, we do not offer refunds. However, we're here to address any questions or concerns you may have before making a purchase.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">Did you find a bug or glitch in our system?</h2>
              <p>
                We take bug reports seriously. Please provide us with more details about the issue you may encounter. Any information you can provide will help us investigate and resolve the problem.
              </p>
            </div>

            <div>
              <h2 className="font-semibold mb-1">Want to contact us directly?</h2>
              <div className="mt-4 flex gap-4 items-center">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 border rounded-full text-indigo-400 border-indigo-500 hover:bg-indigo-600 hover:text-white transition"
                >
                  <FaDiscord className="text-lg" />
                  Join Discord
                </a>
                <a href="#" className="text-xl text-gray-400 hover:text-red-500 transition"><FaYoutube /></a>
                <a href="#" className="text-xl text-gray-400 hover:text-blue-500 transition"><FaTwitter /></a>
                <a href="#" className="text-xl text-gray-400 hover:text-pink-500 transition"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
