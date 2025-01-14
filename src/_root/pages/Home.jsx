import prof from "../../assets/images/profile.png";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineGif } from "react-icons/hi2";
import gallery from "../../assets/gallery.svg";
import draft from "../../assets/draft.svg";
import { CiFaceSmile } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full px-10 justify center items-center">
        <div className="w-full flex flex-wrap gap-4  lg:gap-10 mt-6 justify-center items-center ">
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1] ">
            For you
          </button>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg  bg-[#F1F1F1]">
            Friends
          </button>
          <button className="w-28 lg:w-32  h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1]">
            Community
          </button>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1] ">
            Trending
          </button>
        </div>
        <hr className="text-black mt-8" />
        <div>
          {/* what to post */}
          <div className="flex flex-row gap-4 mt-8">
            <img src={prof} alt="profile" className="h-14 w-14 rounded-full" />
            <div className="w-full">
              <form>
                <input
                  type="text"
                  className="w-full text-lg font-normal text-black outline-none rounded-md py-4 px-4 bg-[#F1F1F1]"
                  name="Newpassword"
                  placeholder="what is happening?"
                />
              </form>
            </div>
          </div>
          {/* MEDiA */}
          <div className="flex gap-96 mt-6">
            <div className="flex flex-row gap-4">
              <img className="w-9 h-10" src={gallery} alt="" />
              <CiFaceSmile className="w-10 h-10" />
              <HiOutlineGif className="w-10 h-10" />
              <IoLocationOutline className="w-10 h-10" />
            </div>
            {/* intgrate post and draft button*/}
            <div className="flex flex-row  gap-4">
              <button className="flex gap-2 w-20 border-2 border-black py-2 rounded-md text-base font-semibold">
                <img src={draft} alt="" />
                <span>Draft</span>
              </button>
              <button className="w-20 border-2 border-blue-600  py-2 bg-blue-600 rounded-md text-base font-semibold text-white">
                Post
              </button>
            </div>
          </div>
          <hr className="text-black mt-8" />
        </div>

        {/* Newsfeed */}
        <section className="flex flex-col gap-4 mt-10">
          <div className="flex gap-[27rem]">
            {/* Profile */}
            <div>
              <Link to="/user-profile" className="flex gap-3 items-center">
                <img
                  src={prof}
                  alt="profile"
                  className="h-14 w-14 rounded-full"
                />
                {/* fetch names from api {user.name and @user.username} */}
                <div className="flex flex-col">
                  <p className="font-semibold font-sora text-xl">
                    Salami Taoreed Adebayo
                  </p>
                  <p className="text-violet-200">@iamtsalami</p>
                  <p>2 hours ago</p>
                </div>
              </Link>
            </div>
            <div>
              <IoIosMore />
            </div>
          </div>

          <div>
            <h1>Map through posted writeUp</h1>
          </div>
          <div>
            <h1>Map through posted individual posted images and display</h1>
          </div>

          {/* like,comment.repost and share */}
          {/* <div> 
            <div></div>
            <div>
            <MdFavoriteBorder />
            <FaRegComment />
            <VscShare />
            </div>
          </div> */}

          <hr />
          {/* integrate comment to post */}
          <div className="flex flex-row gap-4 mt-8">
            <img src={prof} alt="profile" className="h-14 w-14 rounded-full" />
            <div className="w-full relative">
              <form>
                <input
                  type="text"
                  className="w-full text-lg font-normal text-black outline-none rounded-md py-4 px-4 bg-[#F1F1F1]"
                  name="Newpassword"
                  placeholder="Add Comment"
                />
              </form>
              <div className="absolute top-3 right-1 flex gap-2">
                <img className="w-8 h-8" src={gallery} alt="" />
                <CiFaceSmile className="w-8 h-8" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
