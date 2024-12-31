import useMenu from "@/hooks/useMenu";
import MenuCategories from "./MenuCategories";
import Cover from "@/components/Cover";
import menuBg from "@/assets/menu/banner3.jpg";
import SectionTitle from "@/components/SectionTitle";
import saladBg from "@/assets/menu/salad-bg.jpg";
import dessertBg from "@/assets/menu/dessert-bg.jpeg";
import pizzaBg from "@/assets/menu/pizza-bg.jpg";
import soupBg from "@/assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const [menu] = useMenu();

  const salad = (menu as []).filter(
    (item: { category: string }) =>
      item.category === "salad"
  );
  const dessert = (menu as []).filter(
    (item: { category: string }) =>
      item.category === "dessert"
  );
  const soup = (menu as []).filter(
    (item: { category: string }) => item.category === "soup"
  );
  const offered = (menu as []).filter(
    (item: { category: string }) =>
      item.category === "offered"
  );
  const pizza = (menu as []).filter(
    (item: { category: string }) =>
      item.category === "pizza"
  );

  return (
    <div className=" bg-[#eee]">
      <Helmet>
        <title>Menu || Bistro Restaurant</title>
      </Helmet>
      <Cover
        bgImage={menuBg}
        title={"our menu"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <div>
        <SectionTitle
          subHeading="---Don't miss---"
          heading="TODAY'S OFFER"
        ></SectionTitle>
      </div>

      {/* offered section */}
      <div>
        <MenuCategories
          img={""}
          items={offered}
          subTitle=""
          title=""
        ></MenuCategories>
      </div>

      {/* dessert section */}
      <div>
        <MenuCategories
          img={dessertBg}
          items={dessert}
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="dessert"
        ></MenuCategories>
      </div>

      {/* pizza section */}
      <div>
        <MenuCategories
          img={pizzaBg}
          items={pizza}
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="pizza"
        ></MenuCategories>
      </div>

      {/* salad section */}
      <div>
        <MenuCategories
          img={saladBg}
          items={salad}
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="salad"
        ></MenuCategories>
      </div>

      {/* soup section */}
      <div>
        <MenuCategories
          img={soupBg}
          items={soup}
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="salad"
        ></MenuCategories>
      </div>
    </div>
  );
};

export default Menu;
