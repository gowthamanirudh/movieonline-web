import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

const movies = [
    {
      id: 1,
      title: "Lucky Baskar",
      description: "A Dulaqar Salman Hit.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICA3NS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386123-kcmnvggzbg-portrait.jpg", // Replace with actual images
    },
    {
      id: 2,
      title: "GOAT",
      description: "Vijay's goated film.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICAyNjkuM0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401439-zmuswgaswn-portrait.jpg",
    },
    {
      id: 3,
      title: "Gladiator 2",
      description: "A Roman Methodology Film.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NDIuMksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413291-tenndzkzlr-portrait.jpg",
    },
    {
      id: 4,
      title: "Amaran",
      description: "Sivakarthikeyan's Massive Hit.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAxOTlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388085-vfxxfblfqf-portrait.jpg",
    },
    {
      id: 5,
      title: "Matka",
      description: "The Lord of Gambling Flim.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni41LzEwICA4LjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00403056-uftrqqzrmv-portrait.jpg",
    },
    {
      id: 6,
      title: "Mufasa ",
      description: "The Lion King Flim.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjAsIERlYyAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00396541-cbmnksdfzm-portrait.jpg",
    },
    {
      id: 7,
      title: "Venom 2 ",
      description: " A Tom Hardy's Hit.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNjYuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383474-klabltwbvz-portrait.jpg",
    },
    {
      id: 8,
      title: "Bloody Beggar",
      description: "A Kavin's Supremacy.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni43LzEwICAyOC45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00412521-gnjnltmafy-portrait.jpg",
    },
    {
      id: 9,
      title: "Vettaiyan ",
      description: "SuperStar RajniKanth's Hit.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny44LzEwICAxMTYuM0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379391-hcpvdaefvz-portrait.jpg",
    },
    {
      id: 10,
      title: "Kung Fu Panda 4",
      description: "A Story about wildest fantasies.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA0NS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379741-lvyjsmfxkp-portrait.jpg",
    },
    {
      id: 11,
      title: "Kal HO Naa Hoo",
      description: "Shah Rukh Kahn's BlockBuster.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxLjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00006642-hqmsrwmdlm-portrait.jpg",
    },
    {
      id: 12,
      title: "Pushpa 2 ",
      description: "The Rise Of Pushpa.",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-NSwgRGVjIDIwMjQ%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00356724-hztqjbczzb-portrait.jpg",
    }
    // Add more movies here
  ];

  const ads = [
    { id: 1, imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg", alt: "Ad 1" },
    { id: 2, imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1730799832000_novhazariwitharrahman1240x300.jpg", alt: "Ad 2" },
    { id: 3, imageUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1732020209123_internationalclownfestivalwebshowcase1240x300.jpg", alt: "Ad 3" },
  ];

const Home=()=>{
   const navigate = useNavigate();  

    return(
        //header
       <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-800 text-white">
          <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect="fade"
          navigation
          autoplay={{ delay: 2000 }}
          className="w-full h-[300px]"
        >
          {ads.map((ad) => (
            <SwiperSlide key={ad.id}>
              <img src={ad.imageUrl} alt={ad.alt} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <section>
        <div className="container mx-auto h-full flex items-center justify-center">
          <h2 className="text-4xl font-medium text-gray-800 bg-white bg-opacity-80 p-6 rounded-lg shadow-md border-2 border-gray-200">Movie Ticket Booking In Your Finger Tips!</h2>
        </div>
      </section> */}
      </header>
       
       {/*card*/}
       <main className="flex-grow">
      <section className="py-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold  text-left text-black-900 mb-7">Recommended Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={movie.imageUrl} alt={movie.title} className="w-[3700px] h-[580px] object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                  <p className="text-gray-600">{movie.description}</p>
                  <button onClick={() => navigate(`/booking/${movie.id}`)} className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      
      {/* Footer */}
      <Footer></Footer>
 </div>

);
};


export default Home;