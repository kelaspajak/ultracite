import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ConditionalContainer } from "@/components/conditional-container";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";
import { baseOptions } from "@/lib/layout.config";

// import { source } from "@/lib/source";

type BlogLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_TITLE}`,
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
};

const BlogLayout = async ({ children }: BlogLayoutProps) => (
  <ConditionalContainer>
    <HomeLayout
      {...baseOptions}
      nav={{
        ...baseOptions.nav,
      }}
    >
      {children}
    </HomeLayout>
  </ConditionalContainer>
);

export default BlogLayout;
