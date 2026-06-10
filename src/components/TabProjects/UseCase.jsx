import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import useCaseUser from "../../assets/usecase/UseCase-User.drawio.png";
import useCaseMember from "../../assets/usecase/UseCase-Member.drawio.png";
import useCaseAdmin from "../../assets/usecase/UseCase-Admin.drawio.png";

import activity1 from "../../assets/activity/Booking-System.drawio.png";
import activity2 from "../../assets/activity/Booking-Management-Cancellation.drawio.png";
import Lightbox from "../ui/Lightbox";

export default function UseCase() {
  const diagrams = {
    useCase: [
      {
        id: "gen",
        userType: "General users",
        description:
          "General User: Can access basic cat hotel information without logging in, such as browsing services, checking available rooms by date, viewing booking terms, and reading previous customer reviews. Additionally, they can register for a new account to prepare for the booking process in the next step.",
        image: useCaseUser,
      },
      {
        id: "member",
        userType: "Member Panel",
        description:
          "Member: Can log in using credentials or Google OAuth to access full booking features, including searching available rooms, reserving rooms with a 50% deposit rule, tracking booking status, and processing eligible cancellations. Additionally, they can manage their profiles, write reviews, and check out historical hotel ratings.",
        image: useCaseMember,
      },
      {
        id: "admin",
        userType: "Admin Panel",
        description:
          "Admin: Can log in to manage core operations, including verifying bookings via payment proofs, issuing check-in receipts, and handling customer refunds based on hotel policies. They are also responsible for updating room details (prices, images, descriptions) and monitoring analytical daily, monthly, and yearly business reports.",
        image: useCaseAdmin,
      },
    ],
    activity: [
      {
        id: "booking",
        flowType: "Booking System",
        description:
          "Illustrates the room reservation flow, including availability checks, room selection, payment processing, and booking confirmation between the user and the system.",
        image: activity1,
      },
      {
        id: "cancel",
        flowType: "Booking Management and Cancellation",
        description:
          "Illustrates how members view their booking details and request a cancellation by providing a reason, which triggers the system to update the booking status to 'Pending Refund'.",
        image: activity2,
      },
    ],
  };

  const [currentUseCaseIdx, setCurrentUseCaseIdx] = useState(0);
  const [currentActivityIdx, setCurrentActivityIdx] = useState(0);

  const [activePreviewImg, setActivePreviewImg] = useState(null);

  return (
    <div id="diagrams" className="w-full py-4 relative">
      <div className="flex flex-col gap-10 md:gap-20">
        {/* Use Case Diagram  */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 w-full relative">
            <Swiper
              modules={[Pagination, EffectFade]}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={(swiper) =>
                setCurrentUseCaseIdx(swiper.activeIndex)
              }
              className="w-full overflow-hidden border border-primary/20 bg-[#131316]"
            >
              {diagrams.useCase.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="w-full aspect-[16/10] relative bg-[#121212]"
                >
                  <img
                    src={item.image}
                    alt={item.userType}
                    onClick={() => setActivePreviewImg(item.image)}
                    className="absolute inset-0 w-full h-full object-contain p-4 select-none cursor-zoom-in hover:opacity-90 transition-opacity"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* --- ฝั่งขวา (ข้อความ) --- */}
          <div className="md:col-span-5 flex flex-col gap-3 w-full">
            <span className="text-xs font-bold text-secondary tracking-widest uppercase transition-all duration-300">
              {diagrams.useCase[currentUseCaseIdx].userType}
            </span>
            <h4 className="text-xl md:text-2xl font-black text-accent tracking-wide leading-tight">
              Use Case Diagram
            </h4>
            <p className="text-sm md:text-base text-accent leading-relaxed mt-2 min-h-[120px] transition-all duration-300">
              {diagrams.useCase[currentUseCaseIdx].description}
            </p>
          </div>
        </div>

        {/* Activity Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* ฝั่งซ้าย (ข้อความ) */}
          <div className="md:col-span-5 flex flex-col gap-3 w-full md:order-1 order-2 md:text-right">
            <span className="text-xs font-bold text-secondary tracking-widest uppercase transition-all duration-300">
              {diagrams.activity[currentActivityIdx].flowType}
            </span>
            <h4 className="text-xl md:text-2xl font-black text-accent tracking-wide leading-tight">
              Activity Diagram
            </h4>
            <p className="text-sm md:text-base text-accent/70 leading-relaxed mt-2 min-h-[120px] transition-all duration-300">
              {diagrams.activity[currentActivityIdx].description}
            </p>
          </div>

          {/* ฝั่งขวา (Swiper รูปภาพ) */}
          <div className="md:col-span-7 w-full md:order-2 order-1">
            <Swiper
              modules={[Pagination, EffectFade]}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={(swiper) =>
                setCurrentActivityIdx(swiper.activeIndex)
              }
              className="w-full overflow-hidden shadow-xl border border-primary/10 bg-[#131316]"
            >
              {diagrams.activity.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="w-full aspect-[16/10] relative bg-[#121212]"
                >
                  <img
                    src={item.image}
                    alt={item.flowType}
                    onClick={() => setActivePreviewImg(item.image)}
                    className="absolute inset-0 w-full h-full object-contain p-4 select-none cursor-zoom-in hover:opacity-90 transition-opacity"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <Lightbox
        src={activePreviewImg}
        onClose={() => setActivePreviewImg(null)}
      />
    </div>
  );
}
