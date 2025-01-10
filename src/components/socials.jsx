function Socials() {
  return (
    <section>
      <div className="mx-40 my-10 flex flex-col gap-10 max-md:mx-8 max-md:">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-base text-subtitle uppercase font-bold">
            newsfeed
          </p>
          <h2 className="text-5xl font-semibold max-md:text-3xl max-md:font-semibold">
            Instagram
          </h2>
          <p className="text-xl text-center max-md:text-sm">
            Follow us on social media for more discount & promotions
          </p>
          <p className="text-xl text-subtitle font-semibold">
            @3legant_official
          </p>
        </div>
        <div className="w-full grid grid-cols-4 gap-6 justify-center">
          <img src="/images/instagram-1.png" alt="instagram img" className="w-full"/>
          <img src="/images/instagram-2.png" alt="instagram img" className="w-full"/>
          <img src="/images/instagram-3.png" alt="instagram img" className="w-full"/>
          <img src="/images/instagram-4.png" alt="instagram img" className="w-full"/>
        </div>
      </div>
    </section>
  );
}

export default Socials;
