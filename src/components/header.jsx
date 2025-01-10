import Cupom from "./cupom";
import Menu from "./menu";

function Header() {
  return (
    <section className="h-screen w-screen max-w-full flex flex-col justify-between overflow-x-hidden overflow-y-hidden">
      <Cupom />
      <Menu />
      {/* Header */}
      <div className="grid grid-cols-2 h-full w-full max-md:hidden">
        <img
          src="images/people-header.png"
          alt=""
          className="w-full h-full object-cover "
        />

        <div className="w-full h-full pt-52 bg-slate-800 pl-16">
          <div className="w-2/3 text-white pb-7 flex flex-col gap-2">
            <h1 className="text-7xl font-semibold text-left">
              Bring the warmth.
            </h1>               
            <p>
              Everyone needs a good winter jacket. Find yours with our
              collection and more.
            </p>
          </div>

          <p
            className="py-3 px-14 w-fit bg-blue-600 text-white rounded-md cursor-pointer"
            id="button"
          >
            Shopping Now
          </p>
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-col w-full h-5/6 justify-end items-center px-8 md:hidden">
        <div className="h-2/4 flex flex-col gap-4 items-center text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-medium">
              Listen to <br /> the{" "}
              <b className="text-blue-500 font-medium">amazing</b> music sound.
            </h1>
            <p className="text-base font-normal">
              Experience music like never before
            </p>
          </div>

          <button
            className="py-3 px-14 w-fit bg-dark text-white font-normal rounded-md cursor-pointer"
            id="button"
          >
            Shopping Now
          </button>
        </div>
        <img
          src="images/people-header.png"
          alt=""
          className="flex justify-center object-contain h-4/6"
        />
      </div>
    </section>
  );
}

export default Header;
