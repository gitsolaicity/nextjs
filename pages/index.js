import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useTheme } from 'next-themes'
import React from 'react';
import HeroSection from '@/components/HeroSection'
import NextCards from '@/components/NextCards'
import TechnologiesSection from '@/components/core/TechnologiesSection'
import FeaturesSection from '@/components/FeaturesSection'
import FeaturesBlog from '@/components/core/FeaturesBlog'
import GeometryDecoration from '@/components/core/GeometryDecoration'
import FaqAccordionExt from '@/components/core/FaqAccordionExt'
import WebsiteSection from '@/components/showcasecards/WebsiteSection';


export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Kotec Workshop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main className={styles.main}>
        <HeroSection />
        <FeaturesSection />
        <NextCards />
        
        <WebsiteSection />
        <FaqAccordionExt />
        <GeometryDecoration />
        <NextCards />
        <FeaturesBlog />
        <TechnologiesSection />
      </main>
    </>
  )
}
