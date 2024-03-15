import clsx from 'clsx'
import { FC, useEffect } from 'react'
import Typed from 'typed.js'
import data from './index.json'
import localFont from 'next/font/local'

const siteFont = localFont({ src: '../../assets/font/hanyiquantangshijian.ttf', display: 'swap' })

const Poetry: FC = () => {
  useEffect(() => {
    const poetry = data.map((o) => o.poetry)
    const typed = new Typed('.poetry', {
      strings: poetry,
      typeSpeed: 60,
      backSpeed: 60,
      startDelay: 600,
      backDelay: 10000,
      shuffle: true,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <div className={clsx(siteFont.className, 'h-12 flex-shrink-0 pl-1')}>
      <span className="poetry leading-7 tracking-wide"></span>
    </div>
  )
}

export default Poetry
