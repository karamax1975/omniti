/* eslint-disable @next/next/no-img-element */
import React from "react"
import {logosData} from "./data";
import styles from './styles.module.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  }
}

export const Logotypes = () => {
  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={0}
      transitionDuration={3000}
      customTransition="transform 3000ms linear"
      arrows={false}
      showDots={false}
      swipeable={false}
      draggable={false}
      additionalTransfrom={0}
      pauseOnHover={true}
      responsive={responsive}
      containerClass={styles.wrapper}
      itemClass={styles.item}>
        {logosData.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <img key={item.id} src={item.url} alt={item.alt}/>
            </div>
          )
        })}
    </Carousel>
  )
}