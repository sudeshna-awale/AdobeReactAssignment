import React from 'react'
import "./HeroBanner.css";
import heroBannerWomen from "../../assets/images/herobannerwomen.jpg";

const HeroBanner = () => {
  return (
    <>
        <section className='hero-wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1'>
        <div className='hero-content aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--1'>
            <h2 tabIndex={0}>Women's<br/>Outerwear</h2>
        </div>

        <div className='hero-img aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--1'>
            <img src={heroBannerWomen} alt="women in pink top running over hill top " />
        </div>
        </section>
    </>
  )
}

export default HeroBanner