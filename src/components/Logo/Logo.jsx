import React from 'react'
import { Bounce } from 'react-reveal'
import './Logo.css'

export default function Logo({ classNm }) {
  return (
    <i class={classNm} style={{
      fontSize: 60, margin: 25, borderRadius: 15,
    }}></i>
  )
}
