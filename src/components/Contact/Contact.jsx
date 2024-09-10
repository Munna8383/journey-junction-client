import man from "../../../public/animation.json"
import Lottie from "lottie-react";

const Contact = () => {
    return (
        <div className="mt-10">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold">Contact Us</h1>
            </div>

            <div className="flex-row md:flex gap-5 md:gap-20 items-center">
                <div className="w-full md:w-1/2 mx-auto">

                <Lottie animationData={man}/>

                </div>

                <div className="w-fullS md:w-1/2 space-y-5 mx-auto">
                  <div>
                  <h1 className="text-2xl font-extrabold">Get In Touch</h1>

                 <small>Contact Us to get support from us</small>
                  </div>

                    <form>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Email" className="input input-bordered w-full" required />
                    </div>

                    <div  className="form-control">

                    <label className="label">
                            <span className="label-text">Message</span>
                        </label>


                    <textarea placeholder="Enter your message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>

                    <div className="mt-3">
                        <input className="btn bg-[#AC87C5] text-white w-full" type="submit" value="Contact" />
                    </div>

                    </form>


                </div>
            </div>
            
        </div>
    );
};

export default Contact;