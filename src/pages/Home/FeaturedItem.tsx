import SectionTitle from "@/components/SectionTitle";
import featuredImage from "@/assets/home/featured.jpg";

const FeaturedItem = () => {
  return (
    <div className="featured-item mt-20  w-11/12 mx-auto">
      <div className="bg-black/40 text-white py-24">
        <SectionTitle
          heading="FROM OUR MENU"
          subHeading="---Check it out---"
        ></SectionTitle>
        <div className="flex items-center justify-center px-24 text-white py-10 gap-10">
          <div>
            <img src={featuredImage} alt="" />
          </div>
          <div>
            <h2>March 20, 2023 WHERE CAN I GET SOME?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Error voluptate facere,
              deserunt dolores maiores quod nobis quas
              quasi. Eaque repellat recusandae ad laudantium
              tempore consequatur consequuntur omnis ullam
              maxime tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
