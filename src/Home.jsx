import React from "react";
import "./index.scss";

const Home = () => {
  // Define your categories here, you can replace these with your actual categories
  const categories = [
    { id: 1, name: "အထွေထွေ" },
    { id: 2, name: "နန်းရေးနန်းရာ" },
    { id: 3, name: "မြန်မာ့သမိုင်း" },
    { id: 4, name: "သိပ္ပံနှင့်စကြဝဠာ" },
    { id: 5, name: "မြန်မာစာပေ" },
    { id: 6, name: "သင်္ချာ" },
    { id: 7, name: "ပွဲတော်များ" },
    { id: 8, name: "မြန်မာ့ရုပ်ရှင်" },
    // Add more categories as needed
  ];

  return (
    <div className="Home">
      <div
        className=""
        style={{
          justifyContent: "center",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr ",
          gap:"50px 50px"
        }}
      >
        {categories.map((category) => (
          <a href="#" key={category.id}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
