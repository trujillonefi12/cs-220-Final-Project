import React from "react";

const ITEMS = [
  {
    groupName: "Software",
    items: [
      { title: "Visual Studio Code", description: "A powerful code editor." },
      { title: "Git", description: "Version control system." },
    ],
  },
  {
    groupName: "Gadgets",
    items: [
      { title: "MacBook Pro", description: "High-performance laptop." },
      { title: "iPhone", description: "Smartphone with excellent camera." },
    ],
  },
];

const UsesCard = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-lg mb-4">
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

const Uses = () => {
  return (
    <div className="px-6 w-full">
      <div className="md:w-3/4 my-12">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="text-zinc-600 text-lg mt-6 mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem
          ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
        </p>
      </div>
      <div className="my-24">
        <section>
          {ITEMS.map((group, index) => (
            <div key={index} className="md:flex my-12">
              <h3 className="mb-3 md:mb-0 md:min-w-60 md:mr-8 font-bold">{group.groupName}</h3>
              <div className="md:pl-8">
                {group.items.map((item, itemIndex) => (
                  <UsesCard key={itemIndex} title={item.title} description={item.description} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Uses;
