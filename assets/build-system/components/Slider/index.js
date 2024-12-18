import React, { useState, useEffect, useCallback } from 'react';
import styles from "./Slider.module.css";
const Slider = ({ slides, autoPlay = true, interval = 3000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const handleNextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);
    const handlePrevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);
    useEffect(() => {
        let slideInterval;
        if (isPlaying) {
            slideInterval = setInterval(handleNextSlide, interval);
        }
        return () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        };
    }, [isPlaying, interval, handleNextSlide]);
    const togglePlayPause = useCallback(() => {
        setIsPlaying((prev) => !prev);
    }, []);
    return (React.createElement("section", { className: styles.sliderSection },
        React.createElement("div", { className: styles.sliderContainer },
            React.createElement("div", { className: styles.slider }, slides.map((slide, index) => (React.createElement("div", { key: `slide-${index}`, className: `${styles.slide} ${index === currentSlide ? styles.active : ''}`, role: "group", "aria-roledescription": "slide", "aria-label": `Slide ${index + 1} of ${slides.length}` },
                React.createElement("div", { className: styles.slideImageWrapper },
                    React.createElement("img", { className: styles.slideImage, src: slide.image.src, alt: slide.image.alt || `Slide ${index + 1}`, width: slide.image.width, height: slide.image.height })),
                React.createElement("div", { className: styles.slideContent },
                    slide.title && (React.createElement("h2", { className: styles.slideTitle }, slide.title)),
                    slide.description && (React.createElement("p", { className: styles.slideDescription }, slide.description)),
                    slide.link && (React.createElement("a", { href: slide.link, className: styles.slideLink }, "Daha Fazla"))))))),
            React.createElement("div", { className: styles.sliderControls },
                React.createElement("button", { className: styles.sliderButton, onClick: handlePrevSlide, "aria-label": "Previous slide" }, "\u2039"),
                React.createElement("button", { className: styles.sliderButton, onClick: handleNextSlide, "aria-label": "Next slide" }, "\u203A"),
                React.createElement("button", { className: `${styles.playPauseButton} ${isPlaying ? styles.playing : ''}`, onClick: togglePlayPause }, isPlaying ? '⏸' : '▶')))));
};
export default Slider;
//# sourceMappingURL=index.js.map