import React, {useEffect, useState} from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./SliderImages";
import "./slider.css";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const len = sliderImage.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const transitionStyles = {
        onEntering: {opacity: 0},
        onEntered: {opacity: 1},
        onExiting: {opacity: 0},
        onExited: {opacity: 0},
    };

    return (
        <div
            className="slider-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <TransitionGroup component={null}>
                <CSSTransition
                    key={activeIndex}
                    in={true}
                    classNames="fade"
                    timeout={10000}
                    appear={true}
                >
                    <SliderContent
                        activeIndex={activeIndex}
                        sliderImage={sliderImage}
                        transitionStyles={transitionStyles}
                    />
                </CSSTransition>
            </TransitionGroup>
            <Arrows
                prevSlide={() =>
                    setActiveIndex((prevIndex) =>
                        prevIndex < 1 ? len : prevIndex - 1
                    )
                }
                nextSlide={() =>
                    setActiveIndex((prevIndex) =>
                        prevIndex === len ? 0 : prevIndex + 1
                    )
                }
            />
            <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default Slider;
