import Lottie from "lottie-react";
import loader from "../assets/Animation - 1700826492596.json"

const Loader = () => {
    return (
        <div className=" text-center flex justify-center items-center h-[50vh] ">
            <Lottie className=" w-28" animationData={loader}></Lottie>
        </div>
    );
};

export default Loader;