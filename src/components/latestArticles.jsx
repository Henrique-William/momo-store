export default function LatestArticles() {
  return (
    <section className="py-20 px-40 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-semibold">Latest Articles</h2>
        <p className="flex gap-1 w-fit justify-center items-center font-medium text-base border-b-2 border-dark">
          View More <img src="images/icon/arrow-right-black.svg" alt="" />
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          <img src="images/article-1.png" alt="" className="asp" />
          <div className="flex flex-col gap-2">
            <p className="text-xl">2023 Holiday Gift Guide</p>
            <p className="flex gap-1 w-fit justify-center items-center font-medium text-base border-b-2 border-dark">
              Read More <img src="images/icon/arrow-right-black.svg" alt="" />
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <img src="images/article-2.png" alt="" className="asp" />
          <div className="flex flex-col gap-2">
            <p className="text-xl">2023 Holiday Gift Guide</p>
            <p className="flex gap-1 w-fit justify-center items-center font-medium text-base border-b-2 border-dark">
              Read More <img src="images/icon/arrow-right-black.svg" alt="" />
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <img src="images/article-3.png" alt="" className="asp" />
          <div className="flex flex-col gap-2">
            <p className="text-xl">2023 Holiday Gift Guide</p>
            <p className="flex gap-1 w-fit justify-center items-center font-medium text-base border-b-2 border-dark">
              Read More <img src="images/icon/arrow-right-black.svg" alt="" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
