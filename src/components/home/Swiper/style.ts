import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BannerSwiper = styled(Swiper)`
  &.banner-swiper {
    width: 100%;
    height: 39.7rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    & .swiper-button-next::after,
    .swiper-button-prev::after {
      color: #000;
      opacity: 0;
      transition: 0.3s;
    }
    &:hover .swiper-button-next::after,
    &:hover .swiper-button-prev::after {
      opacity: 0.3;
    }
  }
  & .swiper-pagination-fraction {
    left: calc(50% - 3.75rem);
    bottom: 1.8rem;
    width: 7.5rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Montserrat';
    font-size: 1.4rem;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10rem;
    & span {
      // 숫자가 변할때마다 크기가 달라 움직여서 고정값을 줌
      width: 1.4rem;
    }
  }
`;
export const BannerSwiperSlide = styled(SwiperSlide)`
  &.banner {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    cursor: pointer;
    & img {
      width: 100%;
      height: 100%;
      // 실제 배너 크기에 따라 object-fit 속성 값을 수정할 예정
      /* object-fit: contain; */
      object-fit: cover;
      margin: auto;
    }
  }
`;

export const NavbarSwiper = styled(Swiper)`
  &.menu-swiper {
    height: 3.9rem;
    margin: 2.6rem 0;
    display: flex;
    flex-wrap: wrap;
    & .swiper-wrapper {
      margin-left: 2.5rem;
    }
  }
`;
export const NavbarSwiperSlide = styled(SwiperSlide)`
  &.menu {
    width: auto;
    margin-right: 2.5rem;
    text-align: center;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
    color: #c3c3c6;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      font-weight: 700;
      color: #111;
    }
    &:hover::after {
      content: '';
      display: block;
      width: auto;
      height: 0.4rem;
      margin-top: 1.2rem;
      background-color: #111;
    }
  }
`;
