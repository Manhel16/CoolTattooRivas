import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import usePageTitle from "../usePageTitle";
import BibliotecaAitor from '../components/BibliotecaAitor';
import BibliotecaChal from '../components/BibliotecaChal';


export default function BibliotecaImg() {
  usePageTitle('Biblioteca');
  return (
    <>
    <Header />
    <div className="container">
        <h1>Biblioteca de Imagenes</h1>
        <div>
            <h2>Imagenes de Aitor</h2>
            <BibliotecaAitor/>
        </div>
        <div>
            <h2>Imagenes de Chal</h2>
            <BibliotecaChal />
        </div>
    </div>
    <Footer/>
    </>
  )
}
