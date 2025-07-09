import { useState, useEffect } from "react";
import s1 from '../../assets/s1.png';
import { Link } from "react-router-dom";

// ProfileContainer component for rendering user profile with editable fields and sample work
function ProfileContainer(props) {
  // Extract type prop for conditional rendering
  const type = props.type;

  // State for managing edit mode, feedback index, and user profile data
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const [cover, setCover] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4IfIoayRFpukA6K7kWH5EKdK2bueM4Iaqw&s');
  const [profilepic, setProfilepic] = useState("https://t4.ftcdn.net/jpg/06/28/15/53/360_F_628155363_0NuasqXHZkjC13IFuTsrDHCFPeJo6aQr.jpg");
  const [userName, setUserName] = useState('Name');
  const [occupation, setOccupation] = useState('Occupation');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.');

  // Sample work data array
  const Certificates = [
    {
      image: "https://cdn.sanity.io/images/599r6htc/regionalized/6df4ef77f612e602b2d63976fd770e7da2602ce0-1834x920.png",
      name: "Vector Illustraction"
    },
    {
      image: "https://atd-bloges.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/09/07135432/Graphic-Illustration-vs.-Graphic-Design-How-Do-They-Differ.jpg",
      name: "Comic Illustraction"
    },
    {
      image: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/58_Top-10-Successful-Graphic-Design-Course-Creators.jpg",
      name: "Concepts Art"
    },
    {
      image: "https://static1.squarespace.com/static/5fbebc747848ba205d0b8420/5fbebf0861e25426e11b1815/5fbebf0861e25426e11b1816/1606349493784/Chararcter+Model+Sheet+-+Ridley.png?format=1500w",
      name: "Charater design"
    }
  ];

  // Feedback data array
  const feedback = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aut, voluptatum voluptatibus a tenetur facere nobis soluta aliquam perspiciatis quaerat, quos earum enim nulla sapiente, inventore totam nostrum velit. Sapiente?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor excepturi iure fugit atque, amet distinctio officiis odit aliquid quasi quae fugiat corrupti quo aliquam non nemo omnis inventore? Dolore inventore necessitatibus officiis doloremque enim dolores recusandae laborum temporibus labore earum rerum, perspiciatis aut fugiat qui nam facilis, harum, dicta quibusdam praesentium obcaecati distinctio quo perferendis natus vel? Nemo, quasi.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eaque voluptatum? Facilis laborum accusamus porro sapiente culpa impedit eos doloribus! Magni iusto pariatur dolorem, mollitia atque corporis recusandae repudiandae, ipsam sit repellendus ducimus voluptatum necessitatibus.'
  ];

  // Effect for cycling through feedback every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % feedback.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [feedback.length]);

  // Render profile container with cover image, user info, and sample work
  return (
    <>
      {/* Main container with gradient background */}
      <div className="bg-gradient-to-br from-[#383838] to-[#111111]">
        {/* Cover image section with mask */}
        <div
          className={`relative ${type ? "w-full" : "w-[85%]"} h-[40vw] flex flex-col justify-start bg-no-repeat bg-cover bg-center max-md:w-full max-md:h-[120vw]`}
          style={{
            backgroundImage: `url(${cover})`,
            maskImage: `url(${s1})`,
            WebkitMaskImage: `url(${s1})`,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Link className=" m-[1vw] cursor-pointer" to="/home"> <img className="invert inline h-[3vw] max-md:h-[10vw]" src="https://img.icons8.com/?size=100&id=26194&format=png&color=000000" alt="" /> </Link>
          {/* Upload cover image option in edit mode */}
          {edit && (
            <div className="absolute flex justify-center items-center w-full text-white">
              <label
                className="cursor-pointer border-[0.2vw] text-[2vw] px-[1vw] py-[0.5vw] rounded-[2vw] my-[9vw]"
                htmlFor="fileUploadCover"
              >
                Upload
              </label>
              <input id="fileUploadCover" className="hidden" type="file" accept="image/*" />
            </div>
          )}
        </div>

        {/* Profile content container */}
        <div className={`${type ? "w-full" : "w-[85%]"} -mt-[15vw] max-md:-mt-[90vw] max-md:w-[100%]`}>
          {/* User photo, name, and edit button */}
          <div className="z-50 max-md:mt-[25vw]">
            <div className="flex flex-row max-md:flex-col justify-between items-center">
              <div className="ml-[5vw] z-10 flex flex-row max-md:flex-col justify-start items-center max-md:ml-0">
                {/* Profile picture with edit option */}
                <div className="relative mr-[1vw] bg-gray-700 rounded-full">
                  {edit && (
                    <div className="absolute text-white rounded-full h-[15vw] w-[15vw] bg-gray-600/50 flex justify-center items-center">
                      <label
                        className="cursor-pointer border-[0.2vw] text-[2vw] px-[1vw] py-[0.5vw] rounded-[2vw]"
                        htmlFor="fileUploadProfile"
                      >
                        Upload
                      </label>
                      <input id="fileUploadProfile" className="hidden" type="file" accept="image/*" />
                    </div>
                  )}
                  <img
                    className="rounded-full h-[15vw] w-[15vw] max-md:w-[50vw] max-md:h-[50vw] object-cover"
                    src={profilepic}
                    alt="Profile"
                  />
                </div>
                {/* User name and occupation */}
                <div className="flex flex-col justify-start mt-[2vw] items-baseline text-white max-md:items-center">
                  {edit ? (
                    <input
                      type="text"
                      className="text-[2vw] poppins-bold -tracking-normal max-md:text-[4vw]"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      disabled={!edit}
                    />
                  ) : (
                    <h1 className="text-[2vw] poppins-bold -tracking-normal max-md:text-[4vw]">{userName}</h1>
                  )}
                  <div className="flex justify-center items-center">
                    {edit ? (
                      <input
                        className="pr-[2vw] text-[1.5vw] text-gray-400 w-auto max-md:text-[3vw]"
                        onChange={(e) => setOccupation(e.target.value)}
                        disabled={!edit}
                        value={occupation}
                      />
                    ) : (
                      <h1 className="pr-[2vw] text-[1.5vw] text-gray-400 w-auto max-md:text-[3vw]">
                        {occupation}
                      </h1>
                    )}
                    <img
                      className="inline-block h-[1.5vw] -mt-[0.3vw] max-md:h-[3vw]"
                      src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000"
                      alt="Rating"
                    />
                    <label className="text-[1.5vw] ml-1 max-md:text-[3vw]" htmlFor="rating">
                      4.5
                    </label>
                  </div>
                </div>
              </div>
              {/* Edit/Save profile button */}
              {!type && (
                <button
                  className="bg-[#343434] flex justify-center items-center text-white mr-[5vw] rounded-[0.5vw] py-[0.3vw] px-[0.5vw] mt-[2vw] max-md:mr-0 cursor-pointer"
                  type="button"
                  onClick={() => setEdit(!edit)}
                >
                    <img
                      className="inline-block invert w-[2vw] max-md:w-[4vw]"
                      src="https://img.icons8.com/?size=100&id=H5dKJanZkZNk&format=png&color=000000"
                      alt="Edit"
                    />
                    {edit ? "Save" : "Edit Profile"}
                </button>
              )}
            </div>
          </div>

          {/* About section with bio, feedback, and sample work */}
          <div className="-mt-[10vw] z-5 w-full px-[5vw] text-white flex flex-col justify-start max-md:rounded-t-[8vw] gap-y-[2vw] max-md:-mt-[43vw]">
            {/* Bio content */}
            <div className="mt-[13vw] max-md:mt-[50vw]">
              <h1 className="text-[1.6vw] poppins-bold -tracking-tight max-md:text-[3.2vw]">Bio</h1>
              {edit ? (
                <textarea
                  className="text-[1.2vw] w-full poppins-thin text-white/50 max-md:text-[2.5vw] max-md:my-[1vw] overflow-auto no-scrollbar"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={!edit}
                />
              ) : (
                <p className="text-[1.2vw] w-full poppins-thin text-white/50 max-md:text-[2.5vw] max-md:my-[1vw] overflow-auto no-scrollbar">
                  {description}
                </p>
              )}
            </div>

            {/* Feedback display */}
            <div>
              <h1 className="text-[1.6vw] poppins-bold -tracking-tight max-md:text-[3.2vw]">Feedback</h1>
              <div className="h-[20vw] flex flex-col justify-between items-center max-md:h-[40vw] max-md:my-[3vw]">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[1.2vw] text-white/50 text-center w-[50%] mb-[1.5vw] poppins-thin max-md:text-[2.5vw] max-md:w-[75%]">
                    {feedback[index]}
                  </p>
                </div>
                {/* Feedback navigation dots */}
                <div className="flex justify-start items-center">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      className={`rounded-l-[0.5vw] rounded-r-[0.5vw] mx-[0.2vw] h-[0.5vw] max-md:h-[1vw] max-md:mx-[0.4vw] ${
                        index === i ? "bg-white w-[4vw] max-md:w-[10vw]" : "bg-white/50 w-[2vw] max-md:w-[5vw]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact buttons for type-specific rendering */}
            {type && (
              <div className="flex justify-center items-center gap-x-[2vw]">
                <button
                  className="bg-[#343434] flex justify-center items-center text-white mx-[1vw] rounded-[0.5vw] py-[0.3vw] px-[0.5vw] mt-[2vw] max-md:mr-0 gap-x-[0.5vw]"
                  type="button"
                >
                  <img
                    className="inline-block invert w-[2vw] max-md:w-[4vw]"
                    src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000"
                    alt="Phone"
                  />
                  <label className="text-[1.2vw] max-md:text-[3vw] -tracking-normal" htmlFor="phone">
                    Phone
                  </label>
                </button>
                <button
                  className="bg-[#343434] flex justify-center items-center text-white rounded-[0.5vw] py-[0.3vw] px-[0.5vw] mt-[2vw] max-md:mr-0 gap-x-[0.5vw]"
                  type="button"
                >
                  <img
                    className="inline-block invert w-[2vw] max-md:w-[4vw]"
                    src="https://img.icons8.com/?size=100&id=59999&format=png&color=000000"
                    alt="Message"
                  />
                  <label className="text-[1.2vw] max-md:text-[3vw] -tracking-normal" htmlFor="message">
                    Message
                  </label>
                </button>
              </div>
            )}

            {/* Sample work display */}
            <div className="flex flex-col justify-start gap-y-[1vw] my-[5vw] max-md:mb-[10vw]">
              <h1 className="text-[1.6vw] poppins-bold -tracking-tight max-md:text-[3.2vw] max-md:mb-[3vw]">Certificates</h1>
              {edit && (
                <div className="flex justify-center items-center border-2 h-[20vw] rounded-[3vw]">
                  <button className="text-[1.5vw] cursor-pointer">Add the work</button>
                </div>
              )}
              <div className="grid grid-cols-1 max-md:grid-cols-2 gap-y-[3vw] max-md:gap-x-[5vw] max-md:gap-y-[5vw]">
                {Certificates.map((item, key) => (
                  <button key={key} className="relative w-full flex flex-col rounded-[2vw] overflow-hidden">
                    <img className="w-full object-cover rounded-[2vw] h-[30vw]" src={item.image} alt={item.name} />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3vw] w-full bg-gray-700/60 flex items-center justify-center h-full opacity-0 hover:opacity-100">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
              <button className="text-[2vw] mt-[4vw] underline">SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileContainer;