import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { priceFomater } from 'store/slices/itemSlice';
//STYLED
import * as S from './style';
//ICON
import {
  SmallLikeIcon,
  SmallReviewOnIcon,
  LargeLikeOffIcon,
  LargeLikeOnIcon,
} from 'components/Icons';
//DUMY BG
import dumyBg from 'assets/dumyBg.png';

interface Props {
  item: any;
  index: number;
}

const ItemAlbum = ({ item, index }: Props) => {
  console.log(item);
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();

  const isLikeHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setIsLike(!isLike);
  };

  const moveDetailPage = () => {
    navigate(`/items/${item.id}`, { state: item });
  };
  return (
    <S.ItemAlbumContainer onClick={moveDetailPage}>
      <section className="item-bg">
        <div className="rank-box">{index + 1}</div>
        <span className="item-icon" onClick={isLikeHandler}>
          {isLike ? <LargeLikeOnIcon /> : <LargeLikeOffIcon />}
        </span>
        <img src={dumyBg} className="item-bg" />
      </section>

      <section className="item-info">
        <div className="item-title-container">
          <p className="item-title">{item.brand.brandName} </p>
          <p className="item-status">{item.productStatus}</p>
        </div>

        <p className="item-description">{item.productName}</p>
        <p className="item-price">
          <span className="discount-purcent">40%</span> ¥{priceFomater('ja-JP', item.price)}
        </p>
        <div className="review-and-like">
          <span className="small-review-icon">
            <SmallReviewOnIcon /> 4.0
          </span>
          <span>
            <SmallLikeIcon /> 20
          </span>
        </div>
      </section>
    </S.ItemAlbumContainer>
  );
};

export default React.memo(ItemAlbum);
