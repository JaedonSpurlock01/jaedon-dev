import Link, { LinkProps } from "next/link";
import Title from "../title";
import { cn } from "@/lib/utils";

// add any custom shortcodes you want available in MDX
export const mdxComponents = {
  a: (props: LinkProps) => <Link {...props} />,
  // eslint-disable-next-line
  h1: (props: any) => <Title className="my-4" {...props} />,
  p: (props: HTMLParagraphElement) => (
  // @ts-expect-error ignore
  <p className={cn("leading-relaxed text-primary/90", props.className)} {...props} />
),
  // pre/code handled by rehype-pretty-code; you can add wrappers here if needed
};
