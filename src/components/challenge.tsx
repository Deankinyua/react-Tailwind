import image1 from "../assets/image-01.jpg";

const challenge = () => {
  return (
    <>
      <div>
        <div className="mb-1 p-4 center sm:p-7 sm:text-red-800 primary">
          <div className="center sm:padding-auto">
            <div className="center mb-2  w-1/2">
              {/* targeting a uppercase utility for the range sm -> lg */}
              <p className="text-xs center tracking-widest sm:max-lg:uppercase">
                lorem ipsum sit
              </p>
            </div>
            <h1 className="text-color font-bold text-xl">
              Responsive layouts don’t have to be a struggle
            </h1>
          </div>
        </div>
        <div className="p-3">
          <h2 className="text-color font-bold text-xl center2">
            Quality Designs
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-row">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
              felis. Sociis natoque penatibus et magnis dis.{" "}
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
              felis. Sociis natoque penatibus et magnis dis.{" "}
            </div>
          </div>
        </div>
        <div className="p-3 bg-black">
          <div className="flex flex-col gap-5 sm:flex-row lg:flex-row">
            <div className="text-white sm:w-1/2">
              <h2 className="font-bold text-xl">Made custom for you</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
                felis. Sociis natoque penatibus et magnis dis.{" "}
              </div>
            </div>
            <div className="sm:w-1/2 grow center">
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
        <div className="secondary p-3 text-white">
          <div className="flex flex-col gap-5 sm:flex-row lg:flex-row">
            <div className="center">
              <img src={image1} alt="" />
            </div>
            <div className="sm:w-1/2">
              <h2 className="font-bold text-xl">Created With Care</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
                felis. Sociis natoque penatibus et magnis dis.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default challenge;
