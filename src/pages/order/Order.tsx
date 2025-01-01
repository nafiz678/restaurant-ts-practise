import Cover from "@/components/Cover";
import { Helmet } from "react-helmet-async";
import orderCover from "@/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./order.css"
import { useParams } from "react-router-dom";
import { useState } from "react";
import useMenu from "@/hooks/useMenu";
import FoodCard from "./FoodCart";
import {menuItems} from "@/lib/type"

const Order = () => {
    const categories = ["salad", "pizza", 'soup', "dessert", "offered"]
    const { category } = useParams()
    const initialIndex = categories.indexOf(category as string )
    const [tabIndex, setTabIndex] = useState(initialIndex);

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
    <div>
      <Helmet>
        <title>Order || Bistro Restaurant</title>
      </Helmet>
      <div>
        <Cover
          bgImage={orderCover}
          subTitle="Would you like to try a dish?"
          title="OUR SHOP"
        ></Cover>
      </div>

      <div className="flex items-center justify-center mt-10">
                <Tabs
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    className="custom-tabs"
                >
                    <TabList className="flex items-center justify-center gap-6">

                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 0 ? "" : "text-gray-500"
                                }`}
                        >
                            salad
                        </Tab>

                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 1 ? "" : "text-gray-500"
                                }`}
                        >
                            pizza
                        </Tab>

                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 2 ? "" : "text-gray-500"
                                }`}
                        >
                            soup
                        </Tab>


                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 3 ? "" : "text-gray-500"
                                }`}
                        >
                            Dessert
                        </Tab>


                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 4 ? "" : "text-gray-500"
                                }`}
                        >
                            Offered
                        </Tab>

                    </TabList>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {salad.map((item : menuItems) => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {pizza.map((item : menuItems) => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {soup.map((item : menuItems) => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {dessert.map((item : menuItems) => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {offered.map((item : menuItems) => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                </Tabs>
            </div>

    </div>
  );
};

export default Order;
