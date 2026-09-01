import React from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const ButtonWhatsMess = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      <div className="relative">
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
          <ChevronDown
            size={18}
            strokeWidth={3}
            className="text-green-500 animate-arrow"
          />
          <ChevronDown
            size={18}
            strokeWidth={3}
            className="text-blue-500 -mt-3 animate-arrow [animation-delay:0.15s]"
          />
          <ChevronDown
            size={18}
            strokeWidth={3}
            className="text-green-500 -mt-3 animate-arrow [animation-delay:0.3s]"
          />
          <ChevronDown
            size={18}
            strokeWidth={3}
            className="text-blue-500 -mt-3 animate-arrow [animation-delay:0.45s]"
          />
          <ChevronDown
            size={18}
            strokeWidth={3}
            className="text-green-500 -mt-3 animate-arrow [animation-delay:0.6s]"
          />
        </div>

        <a
          href="https://wa.me/8801727256612"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp size={31} />
        </a>
      </div>

      <a
        href="https://m.me/khanitsolution1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Messenger"
        className="w-14 h-14 rounded-full bg-[#0084FF] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaFacebookMessenger size={30} />
      </a>
    </div>
  );
};

export default ButtonWhatsMess;