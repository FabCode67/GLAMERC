'use client'
import React from 'react';

const Map = () => {
    return (
        <section className="min-h-fit py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full my-auto  self-center mt-auto flex items-center justify-center min-h-fit">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.3200179022347!2d30.11358808004011!3d-1.9586242701762602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca799ce8840bd%3A0xb3477c83812f197d!2sGlamerc%20Dental%20Clinic!5e0!3m2!1sen!2srw!4v1740427463083!5m2!1sen!2srw" width="100%"
                    height="300" style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" ></iframe>
            </div>
        </section>
    );
};

export default Map;