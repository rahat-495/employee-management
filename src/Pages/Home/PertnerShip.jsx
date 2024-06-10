
import { Button } from "@material-tailwind/react";

const PertnerShip = () => {
    return (
        <div className="my-28">
            <h1 className="gro text-4xl text-center my-3 font-semibold mx-auto">Our Success</h1>
            <div className="flex-col flex lg:flex-row items-center justify-between my-20 gap-20">
                <img className="lg:w-2/5 border rounded-lg" src="https://powerslides.com/wp-content/uploads/2021/12/Success-Story-Template-2.png" alt="" />
                <div className="gro flex-col flex items-start h-full gap-5">
                    <h1 className="text-center mx-auto lg:mx-0 lg:text-start text-3xl font-semibold">Our Success Stories</h1>
                    <p className="text-center mx-auto lg:mx-0 lg:text-start w-2/3">Explore our journey of success through inspiring stories of achievement, growth, and collaboration. Discover how we have overcome challenges, celebrated milestones, and made a positive impact in the lives of our clients and partners.</p>
                    <Button className="capitalize bg-transparent mx-auto lg:mx-0 shadow-none border text-neutral-900 gro text-lg">View More</Button>
                </div>
            </div>
        </div>
    );
};

export default PertnerShip;
