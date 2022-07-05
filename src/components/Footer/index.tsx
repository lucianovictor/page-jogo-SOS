import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

import styles from './styles.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.links}>
      <img src="logo.png" alt="" />
      <ul>
        <li>
          <a href="">MAIN</a>
        </li>
        <li>
          <a href="#section-about">about</a>
        </li>
        <li>
          <a href="#section-features">game features</a>
        </li>
        <li>
          <a href="#section-system-requirements">System requirements</a>
        </li>
        <li>
          <a href="#section-quotes">quotes</a>
        </li>
      </ul>

      <div className={styles['social-media']}>
        <Link href="https://github.com/lucianovictor">
          <a target="_blank">
            <FaFacebookF />
          </a>
        </Link>
        <Link href="https://twitter.com/ilucianovictor">
          <a target="_blank">
            <FaTwitter />
          </a>
        </Link>
        <Link href="https://instagram.com/lucianovictorsc">
          <a target="_blank">
            <FaYoutube />
          </a>
        </Link>
      </div>
    </div>
    <div className={styles.content}>
      <h6> © 2018 Outpost Games, Inc. All Rights Reserved</h6>

      <ul>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Terms of Services</a>
        </li>
        <li>
          <a href="/">Code of Conduct </a>
        </li>
      </ul>
    </div>
  </footer>
)
