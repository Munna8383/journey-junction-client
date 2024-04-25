import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="flex items-center dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto space-y-1 text-center w-[700px]">
           <img className="rounded-xl" src="https://i.ibb.co/Y7zBSWD/de0be81ccbcdb5d0b348a89be8e9c7e7.jpg"/>
            <p className="text-2xl">Looks like you are in wrong URL</p>
           <button className="btn bg-[#AC87C5] text-white"> <Link to={"/"}>Back to homepage</Link></button>
        </div>
    </section>
    );
};

export default ErrorPage;