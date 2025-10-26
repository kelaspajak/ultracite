import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ConditionalContainer } from "@/components/conditional-container";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";
import { baseOptions } from "@/lib/layout.config";
import { source } from "@/lib/source";

type DocsLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_TITLE}`,
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
};

const DocLayout = async (props: DocsLayoutProps) => (
  <ConditionalContainer>
    <DocsLayout
      {...baseOptions}
      nav={{
        ...baseOptions.nav,
        mode: "top",
      }}
      sidebar={{ collapsible: false }}
      tabMode="navbar"
      tree={source.pageTree}
    >
      {props.children}
    </DocsLayout>
  </ConditionalContainer>
);

export default DocLayout;
