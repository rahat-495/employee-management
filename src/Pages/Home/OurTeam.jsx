
const OurTeam = () => {
  return (
    <div className="flex items-center justify-center my-20 flex-col">
      <h1 className="gro text-center mb-10 text-5xl font-semibold">
        Our Team Members
      </h1>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-delay="0"
        className="min-h-[70vh] mx-3 flex flex-col text-5xl items-center lg:mx-0"
      >
        <div className="grid bg-gray-200 mb-20 p-12 rounded-lg gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <div className="tooltip" data-tip="David">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://img.freepik.com/free-photo/portrait-happy-manager-holding-leather-case_1262-5329.jpg"
              alt=""
            />
          </div>

          <div className="tooltip" data-tip="Putra li">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://www.shutterstock.com/image-photo/success-simply-just-part-my-260nw-2147030523.jpg"
              alt=""
            />
          </div>

          <div className="tooltip" data-tip="William">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://www.shutterstock.com/image-photo/cheerful-young-black-man-manager-260nw-1917179930.jpg"
              alt=""
            />
          </div>

          <div className="tooltip" data-tip="David">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://www.shutterstock.com/image-photo/happy-cheerful-indian-professional-guy-260nw-2153777305.jpg"
              alt=""
            />
          </div>

          <div className="tooltip" data-tip="Putra Robert">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://www.shutterstock.com/image-photo/portrait-elegant-serious-confident-successful-260nw-2192334041.jpg"
              alt=""
            />
          </div>

          <div className="tooltip" data-tip="Michael">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://www.shutterstock.com/image-photo/portrait-young-asian-business-man-260nw-693526816.jpg"
              alt=""
            />
          </div>

          <div className="tooltip" data-tip="James">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://t3.ftcdn.net/jpg/04/59/66/20/360_F_459662083_qq08XTHPAPbwvLFyV379nn7QAbVwy9HL.jpg"
              alt=""
            />
          </div>

          <div className="tooltip" data-tip="Chrimtin di">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://img.freepik.com/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206527.jpg"
              alt=""
            />
          </div>

          <div className="tooltip" data-tip="Deu sen">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://t4.ftcdn.net/jpg/04/17/35/77/360_F_417357764_9M4EAbThf0relVqWcrfi54w2JcwH3RR3.jpg"
              alt=""
            />
          </div>

          <div className="tooltip" data-tip="john li">
            <img
              className="rounded-lg w-96 h-56 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydYj8UXIGDWsvoeXWELvYGNODfu1a21p9Bxr3Yx8Y-DUiwk7rGLH3BrOz1Vb9NER7acs&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
