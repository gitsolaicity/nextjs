import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TimelineSection from '@/components/TImelineSection'
import HerotextanimatedSection from '@/components/HerotextanimatedSection'
import HeadlessuiTabs from '@/components/HeadlessuiTabs'
import HeadlessuiAccordion from '@/components/HeadlessuiAccordion'
import FaqAccordion from '@/components/FaqAccordion'
import FeaturesCards from '@/components/FeaturesCards'
import FeaturesSite from '@/components/FeaturesSite'
import FeaturesBlog from '@/components/FeaturesBlog'

const Components = () => {
    return (
      <div>
        <Head>
          <title>Components</title>
          <meta name="description" content="Learn more about our company" />
        </Head>

      <main className={styles.main}>

        <TimelineSection />
        <HerotextanimatedSection />
        <FeaturesSite />
        <FeaturesBlog />
        <HeadlessuiTabs />
        <HeadlessuiAccordion />
        <FaqAccordion />
        <FeaturesCards />

      </main>

    </div>
    )
  }
  export default Components;