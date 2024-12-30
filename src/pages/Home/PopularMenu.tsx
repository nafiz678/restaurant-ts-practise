import MenuCard from "@/components/MenuCard";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { menuItems, PopularMenuProps } from "@/lib/type";
import { useEffect, useState } from "react";

const PopularMenu = () => {
  const [menu, setMenu] = useState<PopularMenuProps>([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularItems = data.filter(
          (item: { category: string }) =>
            item.category === "popular"
        );
        setMenu(PopularItems);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="---Check it out---"
      ></SectionTitle>

      <div className="grid grid-cols-2 gap-6 items-center justify-center w-8/12 mx-auto">
        {menu.map((item: menuItems) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <Button className="text-black font-medium bg-white hover:bg-black hover:text-white py-5"
         style={{ boxShadow: "0 4px 0 black" }}>
          VIEW FULL MENU
        </Button>
      </div>
    </div>
  );
};

export default PopularMenu;
