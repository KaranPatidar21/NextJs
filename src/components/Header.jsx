import React from 'react'
import style from '../style/header.module.css'
function Header() {
  return (
    <div>
      <div className='flex pt-3 ' >
        <h3 className='ml-4'>WhatBytes</h3>
        <p className='ml-auto mr-4 border-2 pt-1 pb-1 pr-3 pl-3'>Rahil Siddique</p>
      </div>
      <hr className={style.horizontalline} />
    </div>
  )
}

export default Header
