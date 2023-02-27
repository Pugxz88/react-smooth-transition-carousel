import React from "react";

function SliderContent({activeIndex, sliderImage}) {
    return (
        <section className="sliderSection">
            {sliderImage.map((slide, index) => (
                <a href={slide.url} key={index} target="_blank" rel="noopener noreferrer">
                    <div
                        className={index === activeIndex ? "slides active" : "inactive"}
                    >
                        <img className="slide-image" src={slide.imageSlide} alt="" />
                        <h2 className="slide-title">{slide.title}</h2>
                        <h3 className="slide-text">{slide.description}</h3>
                    </div>
                </a>
            ))}
        </section>
    );
}

export default SliderContent;
