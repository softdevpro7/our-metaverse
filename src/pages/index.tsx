import React, { useRef } from 'react';
import { css } from '@emotion/css';
import IntroBanner from '@/components/IntroBanner';
import BenefitBanner from '@/components/BenefitBanner';
import RoadMap from '@/components/RoadMap';
import StarCanvas from '@/components/StarCanvas';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';

const throttle = function (fn: Function, interval: number) {
  let last = Date.now();
  return function () {
    let current = Date.now();
    let args = [].slice.call(arguments, 0);
    if (current - last >= interval) {
      fn.apply(null, args);
      last = current;
    }
  };
};

export default () => {
  const carouselRef = useRef<CarouselRef>(null);
  const currentIndex = useRef(1);

  const handleWheel = (e: React.WheelEvent) => {
    const deltaY = e.nativeEvent?.deltaY;
    if (deltaY < 0) {
      if (currentIndex.current > 1) {
        currentIndex.current -= 1;
        carouselRef.current?.prev();
      }
    } else {
      if (currentIndex.current < 3) {
        currentIndex.current += 1;
        carouselRef.current?.next();
      }
    }
  };

  const newHandleWhell = throttle(handleWheel, 1500);

  return (
    <div
      onWheel={newHandleWhell}
      className={css(`
        width: 100%;
        height: 100vh;
        overflow: hidden;
      `)}
    >
      <StarCanvas numStars={1000} FPS={60} minSize={2} maxSize={5}>
        <Carousel dotPosition="right" dots={false} ref={carouselRef}>
          <IntroBanner />
          <BenefitBanner />
          <RoadMap />
        </Carousel>
      </StarCanvas>
    </div>
  );
};
