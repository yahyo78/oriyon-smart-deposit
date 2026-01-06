"use client";
import './globals.css'
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import imageRobot from "../public/robot.png";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState, useRef } from "react";
import ChatDrawer from "@/components/ChatDrawer";
import CalculatorSection from "@/components/CalculatorSection";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const handleAskQuestion = () => {
    setIsChatOpen(true);
  };

  const handleCalculatorClick = () => {
    calculatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end"
    });
  };
  return (
    <>
      <div className="w-full sm:w-[95%] md:w-[85%] lg:w-[77%] m-auto mt-8 sm:mt-12 md:mt-20 lg:mt-35 shadow-md shadow-gray-300 rounded-[22px] px-2 sm:px-0">

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-gray-50 flex flex-col xl:flex-row rounded-[22px]">
            <div className="flex flex-col xl:flex-row items-center justify-between px-4 sm:px-8 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 lg:py-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">

              {/* LEFT – TEXT */}
              <div className="max-w-xl pb-8 sm:pb-12 md:pb-16 lg:pb-[100px] w-full xl:w-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 text-center xl:text-left">
                  Депозит и расчет прибыли
                </h2>

                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed text-center xl:text-left">
                  С помощью нашего калькулятора вы можете заранее рассчитать возможную прибыль
                  от вашего вклада и выбрать лучший тип вклада для себя.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center xl:justify-start">
                  <button
                    onClick={handleCalculatorClick}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-300 hover:bg-amber-400 transition rounded-[14px] font-semibold text-sm sm:text-base"
                  >
                    Рассчитать
                  </button>

                  <button
                    onClick={handleAskQuestion}
                    className="px-6 sm:px-8 py-2.5 sm:py-3 border border-amber-300 text-amber-600 hover:bg-amber-50 transition rounded-[14px] font-semibold text-sm sm:text-base"
                  >
                    Задать вопрос
                  </button>
                </div>
              </div>

              {/* RIGHT – IMAGE */}
              <div className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[580px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] flex-shrink-0">
                <Image
                  src={imageRobot}
                  alt="Deposit illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>Slide 2</SwiperSlide> */}
        </Swiper>
      </div >


      {/* Calculator Section - Right Side */}
      <div ref={calculatorRef} className="w-full mt-12 sm:mt-16 md:mt-20 flex justify-center px-2 sm:px-4">
        <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] max-w-6xl">
          <CalculatorSection />
        </div>
      </div>

      <button title='message'
        onClick={handleAskQuestion}
        className="px-3 py-3 fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 bg-amber-300 hover:bg-amber-400 transition rounded-[50px] font-semibold shadow-lg z-40"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Chat Drawer - No black overlay */}
      <ChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
