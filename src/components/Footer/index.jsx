import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiBehanceFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="Footer container text-center wow fadeInDown">
        <h6>
          All Copywrites are reserved for Hani Mohsen Collection Co. 2022
        </h6>
        <div className="icons">
          <a
            href="https://www.facebook.com/Collection2050"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>

          <a
            href="https://www.instagram.com/Hanimohsen31/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram />
          </a>

          <a
            href="https://www.behance.net/hanimohsen3810"
            rel="noreferrer"
            target="_blank"
          >
            <RiBehanceFill />
          </a>

          <a href="https://wa.me/201116886029" rel="noreferrer" target="_blank">
            <AiOutlineWhatsApp />
          </a>
        </div>
      </div>
      <br />
    </>
  );
};
