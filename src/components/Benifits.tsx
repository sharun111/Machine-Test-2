

import React from "react";

export default function Benifits(){


  return (
     <section className="bg-black text-white py-20 px-[100px] max-w-[1440px] mx-auto ">
      <div className="text-center mb-16">
        <button className="inline-block bg-black border border-yellow-300 text-yellow-300 px-5 py-2 rounded-full text-sm mb-6">Benefits</button>
        <h2 className="text-4xl font-light mt-4 leading-snug">
          Unlock a world of design<br />potential with us
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[54px]  ">
        {/* Card 1 */}
        <div className="bg-black rounded-[25px] overflow-hidden ">
          <img
            src="/19cb87497da4b19efb7a84c2497a677e66069f9c.png"
            alt="Fast turnaround"
            className=" object-cover"
          />
          <div className="bg-black p-6 ">
            <h3 className="text-xl font-semibold mb-2">Fast turnaround</h3>
            <p className="text-sm text-gray-400">
              Expect the first draft within 48–72 hours, from Monday to Saturday.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-black rounded-xl overflow-hidden">
          <img
            src="/f49eaf21aa90029ea131ebf749caee12f82c593c.png"
            alt="Unlimited requests"
            className="object-cover"
          />
          <div className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-2">Unlimited requests</h3>
            <p className="text-sm text-gray-400">
              Enjoy the freedom of unlimited designs, tailored to meet your every need.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-black rounded-xl overflow-hidden">
          <img
            src="/b5ef346145ca14c2672828eda7b50ccdb217b2e4.png"
            alt="Always in sync"
            className=" object-cover"
          />
          <div className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-2">Always in sync</h3>
            <p className="text-sm text-gray-400">
              Stay in sync with real-time updates and seamless communication.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-black rounded-xl overflow-hidden">
          <img
            src="/9ce41122522a9de552a708444f9afe756db96516.png"
            alt="Pause or cancel anytime"
            className=" object-cover"
          />
          <div className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-2">Pause or cancel anytime</h3>
            <p className="text-sm text-gray-400">
              Flexibility at your fingertips—pause or cancel your subscription anytime.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-black rounded-xl overflow-hidden">
          <img
            src="/2c93d12256affd39940bfd171fc916c36e0f38f4.png"
            alt="Trello task management"
            className=" object-cover"
          />
          <div className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-2">Trello task management</h3>
            <p className="text-sm text-gray-400">
              Expertise in crafting designs that not only captivate but also drive results.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-black rounded-xl overflow-hidden">
          <img
            src="/0633845a4425f5fe0fd8eacdfe7879421e7e436b (1).png"
            alt="Worry free pricing"
            className="  object-cover"
          />
          <div className="bg-black p-6">
            <h3 className="text-xl font-semibold mb-2">Worry free pricing</h3>
            <p className="text-sm text-gray-400">
              Get all your design needs covered for just 2,150/month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


