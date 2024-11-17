import Head from "next/head";
import React from "react";
import { Syne, Inter } from "next/font/google";

type LayoutProps = {
  title: string;
  keywords: string;
  description: string;
  children: React.ReactNode;
};

const syne = Inter({
  subsets: ["latin"],
});

export default function Layout({
  title,
  keywords,
  description,
  children,
}: LayoutProps) {
  return (
    <div className={`${syne.className} max-w-[1280px] mx-auto`} >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
}


