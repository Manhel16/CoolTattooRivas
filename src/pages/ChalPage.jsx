import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImagenesChal from '../components/ImagenesChal'
import usePageTitle from '../usePageTitle'

export default function ChalPage() {
  usePageTitle('Chal');
  return (
    <>
    <Header />
    <div>
      <h1>Sobre mi</h1>
      <h2>Chal</h2>
      <div>
        <img src="src/assets/img/chal.jpg" alt="" style={{ width: '200px', height: '200px' }}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores dolores odio molestias quod, sunt doloribus maxime delectus cum nihil numquam eos ex inventore eveniet libero, quibusdam perferendis ut sequi.</p>
      </div>
      <div>
        <p>Mis mejores trabajos</p> 
         <ImagenesChal />
      </div> 
        
    </div>
    <Footer />
    </>
  )
}
