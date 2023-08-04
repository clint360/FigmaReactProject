import React from 'react';
import LandingImage from '../../components/molecules/LandingImage/LandingImage';
import NavBar from '../../components/organisms/NavBar/NavBar';
import StickyBar from '../../components/StickyBar/StickyBar';
import CardTourPackage from '../../components/molecules/CardTourpakage/CardTourPackage';
import SliderButton from '../../components/molecules/SliderButtons/SliderButton';
import Footer from '../../components/organisms/Footer/Footer';

function TourPackage() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <LandingImage title="Tour Package" />
      <CardTourPackage />
      <SliderButton />
      <Footer />
    </div>
  );
}

export default TourPackage;
