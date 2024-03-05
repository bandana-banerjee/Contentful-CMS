import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>Cliche sartorial coloring book cred vegan raw denim pork belly godard fashion axe woke. Fam small batch YOLO meh DSA, 90's knausgaard pop-up keffiyeh kombucha pok pok. Hot chicken sriracha migas adaptogen jawn. YOLO tbh fam whatever locavore lomo seitan church-key hot chicken vice grailed coloring book big mood. Viral skateboard man braid, jean shorts big mood fixie neutral milk hotel.</p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt='women and the browser' className='img' />
                </div>
            </div>
        </section>
    )
}

export default Hero