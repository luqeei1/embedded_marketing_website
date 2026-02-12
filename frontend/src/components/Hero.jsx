import React from 'react'
import bg from '../assets/eden_proj.jpeg'

export default function Hero() {
  return (
    <header
      className="hero"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <nav className="nav container-max">
        <div className="brand">PlantPulse</div>
      </nav>

      <section className="hero-content container-max">
        <div className="hero-left">
          <h1 className="hero-title">Know your plant. Keep it thriving.</h1>
          <p className="hero-sub">PlantPulse tracks moisture, light, temperature and humidity with an easy to use app, providing actionable care tips so your plant thrives.</p>

          <div id="features" className="features">
            <div className="feature-card">
              <div className="feature-title">Live metrics</div>
              <div className="feature-sub">Moisture, light, temperature and humidity in one glance.</div>
            </div>
            <div className="feature-card">
              <div className="feature-title">Care reminders</div>
              <div className="feature-sub">Personalized tips based on plant type.</div>
            </div>
            <div className="feature-card">
              <div className="feature-title">Plant species detection</div>
              <div className="feature-sub">Identify plants automatically from a photo supported by state of the art deep learning techniques.</div>
            </div>
          </div>
        </div>

        <div className="product-wrap">
          <div className="product-card">
            <div className="product-inner">
              <div className="product-info">
                <div className="product-powered">Powered by Raspberry Pi Zero</div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
