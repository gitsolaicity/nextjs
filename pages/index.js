import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useTheme } from 'next-themes'
import HeroSection from '@/components/HeroSection'
import ServicesFeatures from '@/components/ServicesFeatures'
import NewsletterSection from '@/components/NewsletterSection'
import NextCards from '@/components/NextCards'
import TechnologiesSection from '@/components/TechnologiesSection'
import FeaturesSection from '@/components/FeaturesSection'
import FeaturesSection2 from '@/components/FeaturesSection2'
import SimpleFeatures from '@/components/SimpleFeatures'
import FeaturesCards from '@/components/FeaturesCards'
import FeaturesBlog from '@/components/FeaturesBlog'

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main className={styles.main}>
        <HeroSection />
        <FeaturesSection />
        <FeaturesSection2 />
        <ServicesFeatures />
        <FeaturesCards />
        <NextCards />
        <SimpleFeatures />
        <NewsletterSection />
        <TechnologiesSection />
        <FeaturesBlog />
      </main>
    </>
  )
}
