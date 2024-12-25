import React, { useState } from "react";
import Footer from '../components/Footer';

const allMoviesAndEvents = [
  {
    id: 1,
    title: "Lucky Baskar",
    type: "Movie",
    language: "Tamil",
    price: 150,
    category: "Action",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412217-vucklcsaep-portrait.jpg",
  },
  {
    id: 2,
    title: "GOAT",
    type: "Movie",
    language: "Hindi",
    price: 200,
    category: "Drama",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMiBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416499-zzndkmekdl-portrait.jpg",
  },
  {
    id: 3,
    title: "International Clown Festival",
    type: "Event",
    language: "English",
    price: 500,
    category: "Comedy",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAzMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415699-ndzgjpwhsq-portrait.jpg",
  },
  {
    id: 4,
    title: "Pushpa 2",
    type: "Movie",
    language: "Telugu",
    price: 180,
    category: "Action",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00419940-pudmslqlwe-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAzIERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417872-qfxvewtpqy-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416769-eywdgjslqz-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417510-hazycxuwyz-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA0NzAgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00420398-wphserrekl-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAyMDcgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419274-mvsudxudhs-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICBFYXJseSBSYXRpbmdz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419705-lrkznqppym-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAzMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00058691-tmjvjuuewg-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMTIuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00038721-vwwelrpfzw-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA1LjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00412304-trunsdyate-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzLjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418194-zefvsjtwuv-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00415267-nyzsygenqw-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS4zLzEwICBFYXJseSBSYXRpbmdz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00417677-musbarwbva-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAxSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00417142-ngyztremgd-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICBFYXJseSBSYXRpbmdz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00420562-jwpkxrbklq-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgRWFybHkgUmF0aW5ncw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00420321-xbfezjmcjc-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICA4MTcgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00417508-nczjcehtqt-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA0LjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00080539-xmkzltmhez-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICA4MTcgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00417508-nczjcehtqt-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAxNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398665-pmjnycwhyr-portrait.jpg",
  },
  {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA0NzEgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00420398-wphserrekl-portrait.jpg",
  },
  
   {
    id: 5,
    title: "Classical Music Night",
    type: "Event",
    language: "Hindi",
    price: 300,
    category: "Music",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTksIERlYyAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407893-ttnuelxaxh-portrait.jpg",
  },
];

const MoviesAndEventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterItems = () => {
    return allMoviesAndEvents.filter((item) => {
      return (
        (searchQuery === "" ||
          item.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedLanguage === "" || item.language === selectedLanguage) &&
        (selectedPrice === "" ||
          (selectedPrice === "Low" && item.price <= 200) ||
          (selectedPrice === "High" && item.price > 200)) &&
        (selectedCategory === "" || item.category === selectedCategory)
      );
    });
  };

  const filteredItems = filterItems();
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Search Bar */}
      <div className="bg-red-800 text-white p-4">
        <input
          type="text"
          placeholder="Search for Movies or Events"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded-lg text-black"
        />
      </div>

      {/* Filters */}
      <div className="p-4 bg-gray-200">
        <div className="flex flex-wrap gap-4">
          {/* Language Filter */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="p-2 rounded-lg"
          >
            <option value="">All Languages</option>
            <option value="Tamil">Tamil</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
            <option value="English">English</option>
          </select>

          {/* Price Filter */}
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="p-2 rounded-lg"
          >
            <option value="">All Prices</option>
            <option value="Low">₹0 - ₹200</option>
            <option value="High">₹200+</option>
            <option value="High">₹300+</option>
            <option value="High">₹500+</option>
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Music">Music</option>
            <option value="Music">Emotional</option>
          </select>
        </div>
      </div>

      {/* Cards Section */}
      <section className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-[300px] h-[500px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.type} | {item.language}
                  </p>
                  <p className="text-gray-800 font-bold">₹{item.price}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No items found</p>
          )}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};



export default MoviesAndEventsPage;
