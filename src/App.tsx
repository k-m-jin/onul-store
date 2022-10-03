import { Routes, Route } from 'react-router-dom';
import { useItemSlice } from 'store/hooks';
// STYLED-COMPONENTS
import GlobalStyles from './style/global';
import theme from '../src/style/theme';
import { ThemeProvider } from 'styled-components';
import * as S from './components/layout/index';
// PAGES
import Home from './pages/Home';
import Items from 'pages/Items/index';
import ItemDetail from 'pages/ItemDetail';
import ItemInfo from 'pages/ItemDetail/DetailInfo/ItemInfo';
import ReviewInfo from 'pages/ItemDetail/DetailInfo/ReviewInfo';
import QandAInfo from 'pages/ItemDetail/DetailInfo/Q&AInfo';
import OrderGuide from 'pages/ItemDetail/DetailInfo/OrderGuide';
import SimilarItem from 'pages/ItemDetail/DetailInfo/SimilarItem';

import SignUp from 'pages/SignUp';
//COMPONENTS
import HeaderBar from 'components/ui/navbar/HeaderBar';
import LargeCategoryModal from 'components/item/LargeCategoryModal';
import MyInfo from 'components/user/MyInfo';
import MyPage from 'pages/MyPage';
const App = () => {
  const { isShowLargeCategoryModal } = useItemSlice();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Layout>
        {isShowLargeCategoryModal && <LargeCategoryModal />}
        <HeaderBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetail />}>
            <Route path="iteminfo" element={<ItemInfo />} />
            <Route path="reviewinfo" element={<ReviewInfo />} />
            <Route path="qandainfo" element={<QandAInfo />} />
            <Route path="orderguide" element={<OrderGuide />} />
            <Route path="similaritem" element={<SimilarItem />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </S.Layout>
    </ThemeProvider>
  );
};

export default App;
