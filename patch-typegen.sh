#! /bin/bash

# Patch for https://github.com/remix-run/react-router/pull/14234

echo """
declare module \"*.md\" {
  import * as React from \"react\";
  const MDComponent: React.FunctionComponent<any>;
  export default MDComponent;
}

declare module \"*.mdx\" {
  import * as React from \"react\";
  const MDXComponent: React.FunctionComponent<any>;
  export default MDXComponent;
}
""" > .react-router/types/+mdx.d.ts
