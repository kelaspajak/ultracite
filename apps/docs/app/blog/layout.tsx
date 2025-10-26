import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ConditionalContainer } from "@/components/conditional-container";
import { baseOptions } from "@/lib/layout.config";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";
import { source } from "@/lib/source";

type HomeLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_TITLE}`,
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
};

const DocLayout = async (props: HomeLayoutProps) => (
  <ConditionalContainer>
    <HomeLayout
      {...baseOptions}
      nav={{
        ...baseOptions.nav,
      }}
      tree={source.pageTree}
    >
      {props.children}
    </HomeLayout>
  </ConditionalContainer>
);

export default DocLayout;
