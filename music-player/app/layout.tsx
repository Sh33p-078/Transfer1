import './globals.css'
import styles from './style.module.css'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beatsify',
  description: 'Spotify like webpage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.sideBar}>
          <h1>Beatify</h1>
          <h2>Playlists:</h2>
          <div className={styles.playlist}>
            <h3>Title</h3>
            <ul>
              <li>
                <a>Amount of Beats:</a>
                <a> (amount)</a>
              </li>
            </ul>
          </div>
          {/* All playlists */}
          <div className={styles.playlist}>
            <h3>Title</h3>
            <ul>
              <li>
                <a>Amount of Beats:</a>
                <a> (amount)</a>
              </li>
            </ul>
          </div>
          <div className={styles.playlist}>
            <h3>Title</h3>
            <ul>
              <li>
                <a>Amount of Beats:</a>
                <a> (amount)</a>
              </li>
            </ul>
          </div>
          <div className={styles.playlist}>
            <h3>Title</h3>
            <ul>
              <li>
                <a>Amount of Beats:</a>
                <a> (amount)</a>
              </li>
            </ul>
          </div>
          <div className={styles.playlist}>
            <h3>Title</h3>
            <ul>
              <li>
                <a>Amount of Beats:</a>
                <a> (amount)</a>
              </li>
            </ul>
          </div>
          <div className={styles.playlist}>
            <h3>Title</h3>
            <ul>
              <li>
                <a>Amount of Beats:</a>
                <a> (amount)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='music'>
          {children}
        </div>
      </body>
    </html>
  )
}
