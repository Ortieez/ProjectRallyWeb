"use client";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="flex justify-center w-full">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          width: 1200,
          gap: "1rem",
          type: "loop",
          autoplay: true,
          perPage: 3,
          focus: "center",
        }}
      >
        <SplideSlide className="flex flex-col items-center">
          <Image
            className="rounded-xl"
            src="/car_image.png"
            width={500}
            height={400}
            alt="Default Car Image"
          />
          <span>Audi</span>
        </SplideSlide>
        <SplideSlide className="flex flex-col items-center">
          <Image
            className="rounded-xl"
            src="/car_image.png"
            width={500}
            height={400}
            alt="Default Car Image"
          />
          <span>Audi</span>
        </SplideSlide>
        <SplideSlide className="flex flex-col items-center">
          <Image
            className="rounded-xl"
            src="/car_image.png"
            width={500}
            height={400}
            alt="Default Car Image"
          />
          <span>Audi</span>
        </SplideSlide>
      </Splide>
    </div>
  );
}
