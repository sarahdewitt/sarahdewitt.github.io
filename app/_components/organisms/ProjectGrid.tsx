import React, { useState } from 'react'
import ProjectImage from '../molecules/ProjectImage'
import { motion } from 'framer-motion'

export default function ProjectGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <ProjectImage name={'Project Name'} desc={'Brief Description'} src={'/testimg.jpg'} alt={'alt text'}/>
        <ProjectImage name={'Project Name'} desc={'Brief Description'} src={'/testimg.jpg'} alt={'alt text'}/>
        <ProjectImage name={'Project Name'} desc={'Brief Description'} src={'/testimg.jpg'} alt={'alt text'}/>
        <ProjectImage name={'Project Name'} desc={'Brief Description'} src={'/testimg.jpg'} alt={'alt text'}/>
    </div>
  )
}
