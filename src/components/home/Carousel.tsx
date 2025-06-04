import React, { useEffect, useRef, useState } from "react";

const images = [
  'carousel_1.png',
  'carousel_2.png',
  'carousel_3.png',
  'carousel_4.png',
  'carousel_5.png',
  'carousel_6.png',
  'carousel_7.png',
  'carousel_8.png',
];

export default function Carousel() {
    const [currentIdx, setCurrentIdx] = useState(0); // Start at carousel_1.png
    const [slideDirection, setSlideDirection] = useState(''); // 'left' or 'right'
    const [isAnimating, setIsAnimating] = useState(false);
    const [nextIdx, setNextIdx] = useState(-1); // The image to animate in
    const [timer, setTimer] = useState(0); // seconds
    const timerRef : React.RefObject<NodeJS.Timeout | undefined> = useRef(undefined);

    const totalImages : number = images.length;

    const getPrevIdx = (idx) => (idx - 1 + totalImages) % totalImages;
    const getNextIdx = (idx) => (idx + 1) % totalImages;


    // Timer effect
    useEffect(() => {
    timerRef.current = setInterval(() => {
        setTimer((t) => t + 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
    }, []);

    useEffect(() => {
    if (timer >= 5 && !isAnimating) {
        handleNext(true); // true = auto
    }
    // eslint-disable-next-line
    }, [timer]);

    const handlePrev = (auto) => {
    if (isAnimating) return;
    const prevIdx = getPrevIdx(currentIdx);
    setSlideDirection('right');
    setNextIdx(prevIdx);
    setIsAnimating(true);
    if (!auto) setTimer(-5); // User interaction: delay next auto-advance by 10s
    setTimeout(() => {
        setCurrentIdx(prevIdx);
        setSlideDirection('');
        setIsAnimating(false);
        setNextIdx(-1);
        if (auto) setTimer(0);
    }, 400);
    };

    const handleNext = (auto) => {
    if (isAnimating) return;
    const next = getNextIdx(currentIdx);
    setSlideDirection('left');
    setNextIdx(next);
    setIsAnimating(true);
    if (!auto) setTimer(-5); // User interaction: delay next auto-advance by 10s
    setTimeout(() => {
        setCurrentIdx(next);
        setSlideDirection('');
        setIsAnimating(false);
        setNextIdx(-1);
        if (auto) setTimer(0);
    }, 400);
    };


    let currentImgClass = 'carousel-img';
    let nextImgClass = 'carousel-img';
    if (slideDirection === 'left') {
        currentImgClass += ' slide-out-left';
        nextImgClass += ' slide-in-right';
    } else if (slideDirection === 'right') {
        currentImgClass += ' slide-out-right';
        nextImgClass += ' slide-in-left';
    }

    return(
        <div className="aspect-ratio-box">
            <button
              className="carousel-arrow left-arrow"
              aria-label="Previous image"
              onClick={() => handlePrev(false)}
              disabled={isAnimating}
            >
              &#x2039;
            </button>
            <div className="carousel-img-stack">
              <img
                src={process.env.PUBLIC_URL + '/img/' + images[currentIdx]}
                alt="STEM Education"
                className={currentImgClass}
                draggable={false}
                style={{objectPosition: 'center', zIndex: 1}}
              />
              {isAnimating && nextIdx !== -1 && (
                <img
                  src={process.env.PUBLIC_URL + '/img/' + images[nextIdx]}
                  alt="STEM Education"
                  className={nextImgClass}
                  draggable={false}
                  style={{objectPosition: 'center', zIndex: 2, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                />
              )}
            </div>
            <button
              className="carousel-arrow right-arrow"
              aria-label="Next image"
              onClick={() => handleNext(false)}
              disabled={isAnimating}
            >
              &#x203A;
            </button>
          </div>
    )
}