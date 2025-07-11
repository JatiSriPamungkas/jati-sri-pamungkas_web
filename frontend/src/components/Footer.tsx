import { Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";
import ListHoverNavbar from "./ListHoverNavbar";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around items-center bg-jati-2 h-50">
        <div className="flex flex-col gap-4">
          <h1 id="contact" className="font-bold text-2xl">
            Contact
          </h1>
          <a
            href="mailto:jatispamungkas357@gmail.com"
            target="_blank"
            className="flex items-center gap-4"
          >
            <MdEmail className="!w-7 !h-7" />
            jatispamungkas357@gmail.com
          </a>
          <a
            href="https://wa.me/081280295818"
            target="_blank"
            className="flex items-center gap-4"
          >
            <Phone className="!w-7 !h-7" /> 081280295818
          </a>
        </div>

        <ListHoverNavbar
          listHoverNavbar={["Profile", "Skills", "Education", "Project"]}
        />
      </div>
    </>
  );
};

export default Footer;
