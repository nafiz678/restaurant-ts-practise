
const MenuItemCard = ({ item }) => {

    const { image, price, recipe, name } = item
    return (
        <div className="flex items-center gap-4 ryne-text">
            <img src={image} className="w-16 h-16 rounded-full object-cover rounded-tl-none" alt="" />
            <div>
                <h3 className="text-lg font-bold">{name} ------------------</h3>
                <p className="text-gray-600 text-sm">
                    {recipe}
                </p>
            </div>
            <div className="text-sm font-bold text-yellow-500">$14.5</div>
        </div>
    );
};

export default MenuItemCard;