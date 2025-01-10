function Footer() {
  return (
    <section className="flex flex-col gap-16 px-40 pt-20 pb-8 bg-grayBorder max-md:px-8 max-md:py-12">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 pr-48">
          <img src="/images/logo.svg" alt="Logo" className="" />
          <div className="text-dark text-sm flex flex-col gap-4">
            <p className="">
              43111 Hai Trieu street,
              <br /> District 1, HCMC
              <br />
              Vietnam
            </p>
            <p>84-756-3237</p>
          </div>
          <div className="flex gap-6">
            <a href="http://www.instagram.com" target="new"><img src="images/icon/instagram.svg" alt="" /></a>
            <a href="http://www.facebook.com" target="new"><img src="images/icon/facebook.svg" alt="" /></a>
            <a href="http://www.youtube.com" target="new"><img src="images/icon/youtube.svg" alt="" /></a>
          </div>
        </div>

        <div className="flex flex-col gap-10 pr-18">
          <h3 className="text-base font-semibold">Page</h3>
          <div className="text-sm font-normal flex flex-col gap-6">
            <p>Home</p>
            <p>Shop</p>
            <p>Product</p>
            <p>Articles</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 pr-18">
          <h3 className="text-base font-semibold">Info</h3>
          <div className="text-sm font-normal flex flex-col gap-6">
            <p>Shipping Policy</p>
            <p>Return & Refund</p>
            <p>Support</p>
            <p>FAQs</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-1/4">
          <h3 className="text-base font-semibold">Join Newsletter</h3>
          <div className="flex flex-col gap-6">
            <p>
              Subscribe our newsletter to get more deals, new products and
              promotions
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="enter your email"
                className="w-full h-12 rounded-full border-2 border-input bg-transparent p-4 placeholder:font-poppins placeholder:subtitle"
              />
              <button className="p-2 bg-blue-600 absolute right-2 top-2 rounded-full hover:opacity-80">
                <img
                  src="images/icon/arrow-right-white.png"
                  alt=""
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t-2 border-t-subtitle py-8">
        <div className="text-dark text-xs flex gap-4">
          <p>Copyright © 2023 3legant. All rights reserved</p>
          <p className="border-l-2 pl-4 border-l-subtitle">Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="flex gap-2">
          <img src="images/icon/visa.svg" alt="" />
          <img src="images/icon/american-express.svg" alt="" />
          <img src="images/icon/mastercard.svg" alt="" />
          <img src="images/icon/stripe.svg" alt="" />
          <img src="images/icon/paypal.svg" alt="" />
          <img src="images/icon/apple-pay.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
