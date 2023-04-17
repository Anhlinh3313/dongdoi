import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../../../styles/Home.module.css";
import { Row, Col, Card, Avatar, Image } from "antd";
import emblaStyles from "../../../styles/Embla.module.css";

import Link from "next/link";
const { Meta } = Card;
const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={emblaStyles["embla"]}>
      <div className={emblaStyles["embla__viewport"]} ref={viewportRef}>
        <div className={emblaStyles["embla__container"]}>
          {slides?.map((item, index) => (
            <div className={emblaStyles["embla__slide"]} key={index}>
              <div className={emblaStyles["embla__slide__inner"]}>
                <Link href={`/${item.slug}`}>
                  <div className={styles["new-card-item"]}>
                    <div className="new-card-item-hidden2">
                      <img
                        alt={item.title}
                        src={item.image}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className={styles["title-white"]}>{item.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
