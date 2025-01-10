function ShopCollection() {
  const listCollection = [
    { src: "images/puffers.png", name: "Puffers" },
    { src: "images/bombers.png", name: "Bombers" },
    { src: "images/lightweight-jackets.png", name: "Lightweight jackets" },
    { src: "images/gilets.png", name: "Gilets" },
    { src: "images/coats.png", name: "Coats" },
    { src: "images/rainwear.png", name: "Rainwear" },
  ];
  return (
    <>
      <h1 className="mx-40 py-12 text-5xl font-semibold text-center max-md:mx-8 max-md:text-4xl max-md:text-center max-md:py-10 max-md:font-semibold">
        Shop by Categories
      </h1>

      <div className="flex justify-between px-40 py-10">
        {listCollection.map((item, index) => (
          <div className="flex flex-col items-center gap-3 cursor-pointer hover:scale-105 duration-500">
            <img
              src={item.src}
              alt={item.name}
              className="w-40 h-40 rounded-full object-cover"
            />
            <p className="text-sm font-semibold">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 px-40 py-12">
        <div>
          <div className="grid grid-cols-2 gap-6 ">
            <div className="relative overflow-hidden cursor-pointer">
              <img
                src="images/november-outfit.png"
                alt=""
                className="w-full h-auto object-contain hover:scale-105 duration-500"
              />
              <div className="absolute bottom-12 left-12 flex flex-col gap-3">
                <h2 className="text-4xl font-medium text-white">
                  November Outfits
                </h2>
                <p className="text-base font-medium text-white w-fit border-b-2 border-white flex gap-1">
                  Collection
                  <img
                    src="images/icon/arrow-right-white.png"
                    alt="seta para dirteita"
                    className="w-5 h-auto "
                  />
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden cursor-pointer">
              <img
                src="images/cashmere-set.png"
                alt=""
                className="w-full h-auto object-contain hover:scale-105 duration-500"
              />
              <div className="absolute bottom-12 left-12 flex flex-col gap-3">
                <h2 className="text-4xl font-medium text-white">
                  Chashmere Set
                </h2>
                <p className="text-base font-medium text-white w-fit border-b-2 border-white flex gap-1">
                  Collection
                  <img
                    src="images/icon/arrow-right-white.png"
                    alt="seta para dirteita"
                    className="w-5 h-auto "
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-6 ">
            <div className="relative overflow-hidden cursor-pointer">
              <img
                src="images/the-new-nordic.png"
                alt=""
                className="w-full h-auto object-contain hover:scale-105 duration-500"
              />
              <div className="absolute bottom-12 left-12 flex flex-col gap-3">
                <h2 className="text-4xl font-medium text-white">
                  The New Nordic
                </h2>
                <p className="text-base font-medium text-white w-fit border-b-2 border-white flex gap-1">
                  Collection
                  <img
                    src="images/icon/arrow-right-white.png"
                    alt="seta para dirteita"
                    className="w-5 h-auto "
                  />
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden cursor-pointer">
              <img
                src="images/the-leather.png"
                alt=""
                className="w-full h-auto object-contain hover:scale-105 duration-500"
              />
              <div className="absolute bottom-12 left-12 flex flex-col gap-3">
                <h2 className="text-4xl font-medium text-white">The Leather</h2>
                <p className="text-base font-medium text-white w-fit border-b-2 border-white flex gap-1">
                  Collection
                  <img
                    src="images/icon/arrow-right-white.png"
                    alt="seta para dirteita"
                    className="w-5 h-auto "
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCollection;
