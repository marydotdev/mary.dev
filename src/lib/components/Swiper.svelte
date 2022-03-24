<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { EffectCards } from "swiper";
    import 'swiper/css';
    import "swiper/css/effect-cards";
    
    </script>
    
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      class="mySwiper"
    >
      <SwiperSlide>
        <img src="/img/mary/maryandlillie.png" alt="Mary and Lillie" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/mary/maryselfie.png" alt="Selfie of Mary" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/mary/marywatermelon.png" alt="Mary in a watermelon pool tube" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/mary/maryvirgin.png" alt="Mary as the Virgin Mary" />
      </SwiperSlide>
    </Swiper>
    
    