"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div>
      {hydrated && (
        <>
          <ul>
            <li>
              <a href="/facebook">
                <FontAwesomeIcon icon={faFacebook} className="fa" />
                <span>Facebook</span>
              </a>
            </li>

            <li>
              <a href="/x">
                <FontAwesomeIcon icon={faTwitter} className="fa" />
                <span>X</span>
              </a>
            </li>

            <li>
              <a href="/google">
                <FontAwesomeIcon icon={faGoogle} className="fa" />
                <span>Google</span>
              </a>
            </li>

            <li>
              <a href="/instagram">
                <FontAwesomeIcon icon={faInstagram} className="fa" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
