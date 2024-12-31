import { menuCoverProp } from '@/lib/type';
import { Parallax } from 'react-parallax';

const Cover:React.FC<menuCoverProp> = ({ bgImage, title, subTitle }) => {
    console.log({bgImage, title, subTitle})
    
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bgImage}
            bgImageAlt="the dog"
            strength={-200}
            className='object-cover '
        >
            <div
                className="hero min-h-[80vh]"
                style={{
                    // backgroundImage: `url("${bgImage}")`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 tracking-[0.3rem] uppercase text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
