import { useLocation } from "@remix-run/react";
import { load, trackPageview } from "fathom-client";
import { useEffect, useRef } from "react";

const FATHOM_ID = "HMQYESLQ";
const FATHOM_URL = "https://calm-thorn-side.kennygoff.com/script.js";

/**
 * Fathom component to track pageviews on load as well as navigation changes
 *
 * @see https://sergiodxa.com/articles/use-fathom-with-remix
 * @see https://tinloof.com/blog/how-to-integrate-fathom-analytics-into-your-remix-app
 */
const Fathom = () => {
  const location = useLocation();

  // Track the ref because `useEffect` is now run twice due to remounting
  // in react Strict Mode, and this should only ever be run once
  // See: https://github.com/reactwg/react-18/discussions/18
  const fathom = useRef({
    isLoaded: false,
    location: {
      pathname: "",
      search: "",
    },
  });

  useEffect(() => {
    if (fathom.current.isLoaded === false) {
      load(FATHOM_ID, {
        url: FATHOM_URL,
        includedDomains: [
          "kennygoff.com",
          "*.kennygoff.com",
          "www.kennygoff.com",
        ],
        excludedDomains: [
          "kennygoff.netlify.app",
          "localhost",
          "127.0.0.1",
          "localhost:3000",
        ],
      });
      fathom.current.isLoaded = true;
      fathom.current.location.pathname = location.pathname;
      fathom.current.location.search = location.search;
    } else if (
      fathom.current.location.pathname !== location.pathname ||
      fathom.current.location.search !== location.search
    ) {
      trackPageview();
      fathom.current.location.pathname = location.pathname;
      fathom.current.location.search = location.search;
    }
  }, [location.pathname, location.search]);

  return null;
};

export default Fathom;
