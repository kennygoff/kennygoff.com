import { useLocation } from "@remix-run/react";
import { load, trackPageview } from "fathom-client";
import { useEffect } from "react";

const Fathom = () => {
  const location = useLocation();

  useEffect(() => {
    load("HMQYESLQ", {
      url: "https://calm-thorn-side.kennygoff.com/script.js",
      includedDomains: [
        "kennygoff.com",
        "*.kennygoff.com",
        "www.kennygoff.com",
      ],
      excludedDomains: ["kennygoff.netlify.app"],
    });
  }, []);

  useEffect(() => {
    trackPageview();
  }, [location.pathname, location.search]);

  return null;
};

export default Fathom;
