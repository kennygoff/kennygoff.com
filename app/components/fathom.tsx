import { useLocation } from "@remix-run/react";
import { load, trackPageview } from "fathom-client";
import { useEffect, useRef } from "react";

type FathomProps = {
  fathomId: string;
  domain: string;
  includeWildcard?: boolean;
};

/**
 * Fathom component to track pageviews on load as well as navigation changes.
 *
 * @see https://sergiodxa.com/articles/use-fathom-with-remix
 * @see https://tinloof.com/blog/how-to-integrate-fathom-analytics-into-your-remix-app
 */
const Fathom = ({ fathomId, domain, includeWildcard }: FathomProps) => {
  const location = useLocation();

  // Track the ref because `useEffect` is now run twice due to remounting
  // in react Strict Mode, and this should only ever be run once
  // See: https://github.com/reactwg/react-18/discussions/18
  const fathom = useRef({
    isLoaded: false,
  });

  useEffect(() => {
    if (!fathom.current.isLoaded) {
      const includedDomains = includeWildcard
        ? [domain, `*.${domain}`]
        : [domain];
      load(fathomId, {
        includedDomains,
      });
      fathom.current.isLoaded = true;
    } else {
      trackPageview();
    }
  }, [location.pathname, location.search]);

  return null;
};

export default Fathom;
