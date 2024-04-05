import { buttonsData } from "@/app/data/dummyData";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="relative overflow-hidden py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center">
                <span className="ml-4 text-lg font-bold">PortFolio</span>
              </div>
            </a>
          </div>
          <div className="w-auto p-8">
            {/* <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  Return Policy
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul> */}
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              {buttonsData.map((item) => (
                <div className="w-auto p-1.5" key={item.id}>
                  <a href="#">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <item.icon size={20} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
