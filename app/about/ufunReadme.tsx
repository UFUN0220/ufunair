import React from 'react'
import '~/css/ufunReadme.css'
import Curve from './curve'
import Arrow from './arrow'
import '~/css/homefont.css'
import IconGroup from './icon_fun'

export default function UfunReadme() {
  const hearthStone = '/static/images/hearthstone.svg'
  const steam = '/static/images/steam.svg'
  const hello = '/static/images/hello.png'
  const chineseFont = '"heishenhua", cursive, sans-serif'

  return (
    <div className="relative">
      {/* 全屏部分 */}
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center">
        <div className="z-10 -mt-10 mb-8">
          <h1 className="text-4xl font-semibold text-gray-900 md:text-5xl">uFun</h1>
          <p className="colorful-text mt-3 pt-4 text-5xl font-normal md:text-6xl">多色多出色</p>
          <div className="mt-10 flex justify-center gap-6">
            <IconGroup />
          </div>
        </div>
        <Curve />
        <Arrow />
      </div>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
        <h2
          className="responsive-heading text-nowrap text-center"
          style={{ fontFamily: chineseFont, color: 'ffffff' }}
        >
          👋 I'm Fang You, a Chinese developer.
          <br />
          You can call me "Fang", it sounds like "fun" :)
          <br />
          I find freedom and joy in creating,
          <br />
          and pursue consistent impact through constant learning.
        </h2>
      </div>
    </div>
  )
}
