import React, { useRef, useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { cards } from "../utils/card";

const OurValuesCarousel = ({ className }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [animationFrame, setAnimationFrame] = useState(null);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorTargetPos, setCursorTargetPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.classList.add("grabbing");
    cancelAnimationFrame(animationFrame);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    containerRef.current.classList.remove("grabbing");
    animateMomentum();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    containerRef.current.classList.remove("grabbing");
    setShowCursor(false);
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth >= 1024) {
      setCursorTargetPos({ x: e.clientX, y: e.clientY });
    }

    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 0.08;
    containerRef.current.scrollLeft = scrollLeft - walk;
    setVelocity(walk);
  };

  const animateMomentum = () => {
    let momentum = velocity;
    const step = () => {
      if (Math.abs(momentum) < 0.2) return;
      containerRef.current.scrollLeft -= momentum;
      momentum *= 0.95;
      setAnimationFrame(requestAnimationFrame(step));
    };
    setAnimationFrame(requestAnimationFrame(step));
  };

  const handleCardEnter = () => {
    if (window.innerWidth >= 1024) {
      setShowCursor(true);
    }
  };

  const handleCardLeave = () => {
    setShowCursor(false);
  };

  const handleCardMove = (e) => {
    if (window.innerWidth >= 1024) {
      setCursorTargetPos({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    let cursorFrame;
    const animateCursor = () => {
      setCursorPos((prev) => {
        const dx = cursorTargetPos.x - prev.x;
        const dy = cursorTargetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      cursorFrame = requestAnimationFrame(animateCursor);
    };
    animateCursor();
    return () => cancelAnimationFrame(cursorFrame);
  }, [cursorTargetPos]);

  useEffect(() => {
    return () => cancelAnimationFrame(animationFrame);
  }, [animationFrame]);

  const scrollLeftHandler = () => {
    const container = containerRef.current;
    if (!container) return;

    const screenWidth = window.innerWidth;
    let cardWidth = container.offsetWidth;

    if (screenWidth >= 768 && screenWidth < 1024) {
      cardWidth = container.offsetWidth / 2;
    } else if (screenWidth < 768) {
      cardWidth = container.offsetWidth;
    } else {
      return;
    }

    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRightHandler = () => {
    const container = containerRef.current;
    if (!container) return;

    const screenWidth = window.innerWidth;
    let cardWidth = container.offsetWidth;

    if (screenWidth >= 768 && screenWidth < 1024) {
      cardWidth = container.offsetWidth / 2;
    } else if (screenWidth < 768) {
      cardWidth = container.offsetWidth;
    } else {
      return;
    }

    container.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section className={className}>
      <div className="w-full relative">
        {showCursor && (
          <div
            className="hidden lg:block fixed z-50 pointer-events-none transition-transform duration-300"
            style={{
              top: cursorPos.y - 50,
              left: cursorPos.x - 50,
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "yellow",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            <RiArrowLeftSLine size={20} />
            DRAG
            <RiArrowRightSLine size={20} />
          </div>
        )}

        <div
          ref={containerRef}
          className="w-full flex overflow-x-auto no-scrollbar select-none cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {cards.slice(0, 8).map((card) => (
            <div
              key={card.id}
              className="flex items-center flex-col justify-center group flex-shrink-0 h-[450px] bg-white shadow-md border border-gray-300
                w-full sm:w-full md:w-1/2 lg:w-1/4"
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
              onMouseMove={handleCardMove}
            >
              <img
                src={card.image}
                alt={card.title}
                draggable={false}
                className="w-full h-2/3 object-cover p-4"
              />
              <div className="p-2 text-center text-gray-400 text-xl font-semibold">
                {card.title}
              </div>
            </div>
          ))}
        </div>

        <div className="flex lg:hidden justify-center gap-4">
          <button
            onClick={scrollLeftHandler}
            className="bg-white border-gray-300 h-20 w-full flex items-center justify-center"
          >
            <FiArrowLeft size={30} className="text-gray-400 font-light" />
          </button>

          {/* <div className="h-20 w-[2px] bg-gray-300"></div> */}

          <button
            onClick={scrollRightHandler}
            className="bg-white border-gray-300 h-20 w-full flex items-center justify-center"
          >
            <FiArrowRight size={30} className="text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurValuesCarousel;
