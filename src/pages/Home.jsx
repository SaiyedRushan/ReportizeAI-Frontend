import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

export default function Home() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 10,
      speed: 100,
    });
  }, []);

  return (
    <div className="">
      {/* hero section */}
      <section className="bg-gray-200 text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Effortless Ontario Report Card Generation</h1>
          <p className="text-lg">Create professional report cards with ease.</p>

          <Button className="m-5">
            <a href="#plans"> Get Started</a>
          </Button>
        </div>
      </section>
      {/* features section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">Easy-to-use interface for filling in report card information</li>
            <li className="text-lg mb-2">Generates report cards using the Ontario template</li>
            <li className="text-lg mb-2">Save progress feature for convenience</li>
            <li className="text-lg mb-2">Professional version includes AI comments generator</li>
            <li className="text-lg mb-2">AI Report Card Generator</li>
          </ul>
        </div>
      </section>
      {/* plans section */}
      <section id="plans" className="py-20 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Plan</h2>
          <div className="flex flex-wrap justify-center">
            {/* free card */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 card" data-tilt>
                <h3 className="text-2xl font-semibold mb-4">Free</h3>
                <p className="text-lg mb-4">Basic features to get you started. 10 Report card credits. Manage your class and students.</p>
                <Button>
                  <Link to={"/pricing"}>Sign Up</Link>
                </Button>
              </div>
            </div>

            {/* standard card */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 card">
                <h3 className="text-2xl font-semibold mb-4">Standard</h3>
                <p className="text-lg mb-4">20 Report card credits and class and student management.</p>
                <Button>
                  <Link to={"/pricing"}>Sign Up</Link>
                </Button>
              </div>
            </div>

            {/* professsional card */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 card">
                <h3 className="text-2xl font-semibold mb-4">Professional</h3>
                <p className="text-lg mb-4">40 Report card credits. And state-of-the-art AI to help you write better and more personalized feedback faster.</p>
                <Button>
                  <Link to={"/pricing"}>Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Ontario Report Card Generator</p>
        </div>
      </footer>
    </div>
  );
}
