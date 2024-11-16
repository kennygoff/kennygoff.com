import { PropsWithChildren } from "react";

type Props = PropsWithChildren<React.HTMLProps<HTMLAnchorElement>>;

export const ExternalLink = ({ children, ...props }: Props) => (
  <a
    className="text-white hover:text-sky-400 hover:underline font-semibold"
    {...props}
  >
    {children}
  </a>
);
