import { Swiper, SwiperSlide } from "swiper/react";

const Stories = () => {
  return (
    <div className="story-wrapper">
      <Swiper
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={20}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          100: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
          350: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1250: {
            slidesPerView: 5,
            spaceBetween: 7,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 7,
          },
          1500: {
            slidesPerView: 6,
            spaceBetween: 7,
          },
          2000: {
            slidesPerView: 7,
            spaceBetween: 7,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <SwiperSlide key={item}>
            <div className="size-[70px] my-3 ml-1 xl:ml-5">
              <img
                src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                alt="story"
                className="mt-[2px] size-[90%] object-cover object-[100%] rounded-full outline outline-2 outline-offset-2 outline-mainColor"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;
