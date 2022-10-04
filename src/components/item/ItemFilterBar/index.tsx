import React, { Dispatch, SetStateAction } from 'react';
import * as S from './style';
import { ArrowBottomIcon, ArrowTopIcon } from '../../Icons/index';
import { useItemSlice } from 'store/hooks/index';

interface Props {
  //Items.tsx에 state업데이트 함수 타입정의
  filterSeletBoxHandler: Dispatch<SetStateAction<boolean>>;
  isShowFilterSelectBox: boolean;
}

const ItemFilterBar = ({ filterSeletBoxHandler, isShowFilterSelectBox }: Props) => {
  const { allItemList } = useItemSlice();
  return (
    <S.ItemFilterBarContainer>
      <p className="all-item">총 {allItemList.length}개</p>
      <div
        className="filter-bar"
        onClick={() => {
          filterSeletBoxHandler(!isShowFilterSelectBox);
        }}
      >
        <p>최신순</p>
        {isShowFilterSelectBox ? <ArrowTopIcon /> : <ArrowBottomIcon />}
      </div>
    </S.ItemFilterBarContainer>
  );
};

export default ItemFilterBar;
