import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Result from "./Result";
import { FaWhatsapp, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const items = useSelector((store) => store.items);
  const total = useSelector((store) => store.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "total" });
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="shopCart full-center">
        <div className="left" style={{ width: "166%" }}>
          <h2 className="my-2 text-center">CONTACT</h2>
          <hr className="my-4 custom-hr" />

          <div className="contact-links">
            <a
              href="https://wa.me/6285691786559"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://instagram.com/snel.shoes"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://twitter.com/snelfootwear"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href="https://maps.app.goo.gl/Q3jhScZNFFu4f7FVA"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt /> Maps
            </a>
          </div>

          <div className="carts">
            {items.length > 0 ? <Result /> : <p className="emprty"></p>}
          </div>
        </div>
      </div>
    </>
  );
}
