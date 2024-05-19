import React from 'react'
import Header from '../components/Header'
import  Footer from '../components/Footer'
import usePageTitle from "../usePageTitle";


export default function BisuteriaImg() {
  usePageTitle('Bisuteria');
  return (
    <>
    <Header />
    <div className="container">
        <h1>Bisutería</h1>
    </div>
    <Footer />
    
    </>
  )
}
