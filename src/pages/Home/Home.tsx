import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Categories from "./Categories";
import FeaturedItem from "./FeaturedItem";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="pb-20">
      <Helmet>
        <title>Home || Bistro Restaurant</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
