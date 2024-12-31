import Cover from "@/components/Cover";
import MenuItemCard from "./MenuItemCard";
import { menuCategoriesProps, menuItems } from "@/lib/type";
import { Link } from "react-router-dom";


const MenuCategories: React.FC<menuCategoriesProps> = ({items, title, subTitle, img}) => {

    
    return (
        <div className="py-10">
            {title && subTitle && <Cover bgImage={img} title={title} subTitle={subTitle}></Cover>}
            <div className="w-8/12 mx-auto my-10 grid grid-cols-2 items-center justify-center gap-6">
                {
                    items?.map((item: menuItems)=> <MenuItemCard item={item}></MenuItemCard>)
                }
            </div>
            <div className='flex items-center justify-center mt-4'>
                <Link to={`/order/${title || "offered"}`}>
                    <button className="btn btn-outline border-0 border-b-4 text-black   hover:border-0">View full menu</button>
                </Link>
            </div>
            
        </div>
    );
};

export default MenuCategories;