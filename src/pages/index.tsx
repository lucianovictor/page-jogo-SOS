import Head from 'next/head'

import { Header } from 'components/Header'
import { Banner } from 'components/Banner'
import { About } from 'components/AboutGame'
import { Features } from 'components/Features'
import { SystemRequirements } from 'components/ SystemRequirement'
import { Quotes } from 'components/Quotes'
import { Newsletter } from 'components/Newsletter'
import { FaCaretUp } from 'react-icons/fa'
import { Footer } from 'components/Footer'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <a href="#header" className={styles['go-top']}>
        <FaCaretUp />
      </a>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <div className={'background banner '.concat(styles.background)}>
        <Header />
        <Banner />
      </div>
      <About />
      <Features />
      <SystemRequirements />
      <Quotes />
      <Newsletter />
      <Footer />
    </div>
  )
}
