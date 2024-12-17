import React from 'react';

const LocationMap = () => {
  return (
    <section className="h-[400px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282365564086!2d-122.0838544!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sPalo+Alto%2C+CA!5e0!3m2!1sen!2sus!4v1554234431918"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default LocationMap;