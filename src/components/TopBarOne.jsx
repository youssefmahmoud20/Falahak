"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const languageOptions = [
  { value: "English", icon: "fi-gb-eng" },
  { value: "Spanish", icon: "fi-us" },
  { value: "Chinese", icon: "fi-cn" },
  { value: "Italian", icon: "fi-it" },
];

const currencyOptions = ["USD", "GBP", "AUD", "EUR"];

const TopBarOne = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languageOptions[0]);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const langRef = useRef(null);
  const currencyRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }

      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setCurrencyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="topbar topbar--secondary d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="topbar__inner">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__list-wrapper">
                    <ul className="topbar__list">
                      <li>
                        <a href="mailto:support@example.com">
                          <i className="fa-regular fa-envelope"></i>
                          support@example.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+23055873407">
                          <i className="fa-solid fa-phone"></i>
                          +2(305) 587-3407
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-xxl-4 d-none d-xxl-block">
                  <div className="topbar__extra text-center">
                    <p>
                      <i className="icon-heart-hand"></i> Are you ready to help
                      them? Let&apos;s become a volunteer!
                    </p>
                  </div>
                </div>

                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__items justify-content-end">
                    <div
                      className={`nice-select currency-select select ${
                        currencyOpen ? "open" : ""
                      }`}
                      tabIndex="0"
                      ref={currencyRef}
                      onClick={() => setCurrencyOpen((prev) => !prev)}
                    >
                      <span className="current">{selectedCurrency}</span>

                      <ul className="list">
                        {currencyOptions.map((currency) => (
                          <li
                            key={currency}
                            data-value={currency}
                            className={`option ${
                              selectedCurrency === currency
                                ? "selected focus"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCurrency(currency);
                              setCurrencyOpen(false);
                            }}
                          >
                            {currency}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`nice-select country-select select one ${
                        langOpen ? "open" : ""
                      }`}
                      tabIndex="0"
                      ref={langRef}
                      onClick={() => setLangOpen((prev) => !prev)}
                    >
                      <span className="current">
                        <i className={selectedLang.icon}></i> {selectedLang.value}
                      </span>

                      <ul className="list">
                        {languageOptions.map((lang) => (
                          <li
                            key={lang.value}
                            data-value={lang.value}
                            className={`option ${
                              selectedLang.value === lang.value
                                ? "selected focus"
                                : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedLang(lang);
                              setLangOpen(false);
                            }}
                          >
                            <i className={lang.icon}></i> {lang.value}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="Facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://vimeo.com/"
                        target="_blank"
                        aria-label="Vimeo"
                      >
                        <i className="fa-brands fa-vimeo-v"></i>
                      </Link>
                      <Link
                        href="https://x.com/"
                        target="_blank"
                        aria-label="Twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/"
                        target="_blank"
                        aria-label="LinkedIn"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarOne;