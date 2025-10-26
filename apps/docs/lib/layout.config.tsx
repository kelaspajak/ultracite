import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Button } from "@/components/ui/button";

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      text: "Blog",
      url: "/blog",
      active: "none",
    },
    {
      text: "Docs",
      url: "/introduction",
      active: "none",
    },
  ],
  nav: {
    title: (
      <Button asChild variant="ghost">
        <span className="before:-inset-x-1 before:-z-10 before:-rotate-1 relative z-10 px-[0.3rem] py-[0.2rem] font-mono text-primary-foreground text-sm before:pointer-events-none before:absolute before:inset-y-0 before:rounded-xs before:bg-primary">
          Diskusi Pajak
        </span>
      </Button>
    ),
  },
};
