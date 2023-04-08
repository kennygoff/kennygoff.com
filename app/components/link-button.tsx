import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<React.HTMLProps<HTMLAnchorElement>>;

export const LinkButton = ({ children, ...props }: Props) => {
  return (
    <a
      className="text-sm font-semibold sm:inline-block text-white hover:bg-sky-700 active:bg-sky-700 py-2 px-3 bg-sky-600 rounded block text-center"
      {...props}
    >
      {children}
    </a>
  );
};
