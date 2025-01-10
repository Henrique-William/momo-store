import Header from "../components/header";
import Enterprises from "../components/enterprises";
import { BestSeller, CarouselProduct } from "../components/showProducts";

import { productList } from "../lists";
import ShopCollection from "../components/shopCollection";
import PromotionCount from "../components/promotionCount";
import HomeInfo from "../components/homeInfo";
import Socials from "../components/socials";
import Footer from "../components/footer";
import HomePromotion from "../components/homePromotion";
import LatestArticles from "../components/latestArticles";

function Home() {
  return (
    <>
      <Header />
      <Enterprises />
      {/* <CarouselProduct productList={productList} /> */}
      <ShopCollection />
      <BestSeller productList={productList} />
      <PromotionCount />
      <HomePromotion />
      <LatestArticles />
      <Socials />
      <HomeInfo />
      <Footer />
    </>
  );
}

export default Home;
