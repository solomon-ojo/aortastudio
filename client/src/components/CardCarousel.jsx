import React, { useRef, useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Container from "./Container";
import { VscArrowRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { cardDetails } from "../utils/projectDetails";

const CardCarousel = ({ className }) => {
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
    if (window.innerWidth >= 992) {
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
    if (window.innerWidth >= 992) {
      setShowCursor(true);
    }
  };

  const handleCardLeave = () => {
    setShowCursor(false);
  };

  const handleCardMove = (e) => {
    if (window.innerWidth >= 992) {
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

  return (
    <section className={className}>
      <Container>
        <div className="w-full relative">
          {/* Yellow circle cursor */}
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

          {/* Card container */}
          <div
            ref={containerRef}
            className="w-full flex overflow-x-auto no-scrollbar select-none cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {cardDetails.map((card) => (
              <Link
                onClick={() => scrollTo(0, 0)}
                to={`/${card.param}`}
                key={card.param}
                onMouseDown={(e) => e.preventDefault()}
                className="flex items-center flex-col pt-10 group w-full sm:w-full md:w-2/3 lg:w-1/4 h-[450px]  bg-black lg:hover:bg-lime-900/40 shadow-md border border-gray-800 flex-shrink-0"
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                onMouseMove={handleCardMove}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  draggable={false}
                  className="w-full h-3/5 object-cover px-4"
                />

                <div className="p-2  text-gray-200 text-sm lg:text-xl font-semibold">
                  <p className="">{card.heading}</p>
                </div>
                <div className="w-full hidden lg:block pt-8 pl-5 mb-4">
                  <VscArrowRight
                    size={30}
                    className="group-hover:rotate-[-45deg] text-gray-600 group-hover:text-green-700 group-hover:transition-all duration-700 ease-in-out"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows for Medium Screens */}
          <div className="flex lg:hidden absolute bottom-4 left-0 right-0 justify-between px-4 z-50">
            <button
              onClick={() =>
                containerRef.current.scrollBy({
                  left: -300,
                  behavior: "smooth",
                })
              }
              className="text-white p-2 rounded-full shadow-md"
            >
              <RiArrowLeftSLine size={24} />
            </button>
            <button
              onClick={() =>
                containerRef.current.scrollBy({ left: 300, behavior: "smooth" })
              }
              className=" text-white p-2 rounded-full shadow-md"
            >
              <RiArrowRightSLine size={24} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CardCarousel;
