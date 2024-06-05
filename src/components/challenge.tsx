import image1 from "../assets/image-01.jpg";

const challenge = () => {
  return (
    <>
      <div>
        <div className="mb-1 p-11 primary">
          <div className="center">
            <div className="center mb-2  w-1/2">
              <p className="text-xs center tracking-widest">lorem ipsum sit</p>
            </div>
            <h1 className="text-color font-bold text-xl">
              Responsive layouts don’t have to be a struggle
            </h1>
          </div>
        </div>
        <div className="p-3">
          <h2 className="text-color font-bold text-xl">Quality Designs</h2>
          <div className="flex flex-col gap-3">
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
          <div className="flex flex-col gap-5">
            <div className="text-white">
              <h2 className="font-bold text-xl">Made custom for you</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
                felis. Sociis natoque penatibus et magnis dis.{" "}
              </div>
            </div>
            <div>
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
        <div className="secondary p-3 text-white">
          <div className="flex flex-col gap-5">
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
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
