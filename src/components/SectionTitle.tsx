interface SectionTitleProps {
    heading: string;
    subHeading: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ heading, subHeading }) => {
    
    return (
        <div className="my-10">
            <p className="text-center text-sm text-yellow-500">{subHeading}</p>
            <h2 className="text-center text-4xl border-t-2 border-b-2 p-2 my-5 w-3/12 mx-auto">{heading}</h2>
        </div>
    );
};

export default SectionTitle;