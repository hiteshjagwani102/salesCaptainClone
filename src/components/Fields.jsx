import React from 'react'
import FieldCard from '../subComponents/FieldCard'
import { Bounce } from 'react-awesome-reveal'

const Fields = () => {
  return (
    <div className='mt-30'>
        <div className='flex flex-row flex-wrap justify-center items-center mt-20'>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Healthcare"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Dental"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Home Services"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Retail"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Hospitaliy"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Automotive"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Restaurants"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Welness"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Professional Services"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Care Services"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Financial Services"/></Bounce>
        <Bounce><FieldCard img="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dd3e7d32dfae5cd2e139e5_Group%2018673.svg" title="Recreational Servies"/></Bounce>
    </div>
    </div>
  )
}

export default Fields