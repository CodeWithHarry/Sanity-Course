import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="home">
      <div className="nav bg-gray-400 text-red-600">
        I am navbar
      </div>
      <span>I am homepage</span>
    </div>
  )
}
