import Link from "next/link";
import Title from "../title";

// add any custom shortcodes you want available in MDX
export const mdxComponents = {
  a: (props: any) => <Link {...props} />,
  h1: (props: any) => <Title className="my-4" {...props} />,
  p: (props: any) => (
    <p className="leading-relaxed text-primary/90" {...props} />
  ),
  // pre/code handled by rehype-pretty-code; you can add wrappers here if needed
};
