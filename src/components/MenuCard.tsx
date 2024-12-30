import { cardProps } from "@/lib/type";



const MenuCard: React.FC<cardProps> = ({ item }) => {
    const {image, price, recipe, name } = item
  return (
    <div className="flex items-center border-b border-gray-300 py-4">
      {/* Left Image */}
      <div className="w-16 h-16 rounded-full rounded-tl-none bg-gray-300 flex-shrink-0">
        {image && (
          <img
            src={image}
            className="w-full h-full object-cover rounded-full rounded-tl-none"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="flex-grow px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            {name}
          </h3>
          <span className="text-sm font-bold text-yellow-600">
            ${price}
          </span>
        </div>
        <p className="text-sm text-gray-600">
          {recipe}
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
