import TextInfo from "../homeComponents/TextInfo";
import water from "./../../images/deep-blue.jpg";
import turtle from "./../../images/sleepy-turtle.jpg";
import acidification from "./../../images/ocean-wave.jpg";
import plastic from "./../../images/plastic.jpg";
import reef from "./../../images/purple-reef.jpg";
import { useState } from "react";
import NewsModal from "./NewsModal";

const stories = [
  {
    title: "Ocean Buddies and Rescuing Sea Turtles",

    paragraph1: " We are Ocean Buddies, a small but passionate charity that has been dedicated to protecting sea turtles for over a decade. Our team of volunteers work tirelessly to ensure that these gentle giants are able to thrive in our oceans, despite the numerous threats they face.",

    paragraph2: "One of our most successful projects has been our nesting site monitoring program. We work closely with local communities to identify and protect sea turtle nesting sites, ensuring that they are not disturbed by human activity. Through this program, we have been able to help increase sea turtle populations in the area, giving these creatures a fighting chance against the numerous threats they face.",

    paragraph3: "Beach cleanups are also a major focus of our work. We organize regular cleanups in our local area, removing plastic and other debris that can harm sea turtles and other marine life. By working with local schools and community groups, we are able to raise awareness about the importance of keeping our beaches clean and reducing plastic waste.",

    paragraph4: "Despite our successes, we face numerous challenges in our work to protect sea turtles. Plastic pollution and climate change are major threats, and the effects of these issues are felt on a global scale. However, we remain committed to our mission, working tirelessly to protect sea turtles and their habitats.",

    paragraph5: "One of the most rewarding aspects of our work is seeing the impact of our efforts firsthand. From watching a sea turtle hatch and make its way to the ocean, to seeing a beach cleared of plastic waste, every success story is a reminder of why we do what we do. Through our dedication and hard work, we are making a real difference in the world, one sea turtle at a time.",
  },
  {
    title: "Ocean Buddies Coral Reef Conservation Efforts",

    paragraph1: "Our coral restoration program involves growing new coral fragments in underwater nurseries and then transplanting them onto damaged reef areas. By working closely with local communities, we identify areas of coral reef that have been damaged by pollution or other factors and then use our coral restoration techniques to help restore them.",

    paragraph2: "One of our biggest challenges has been the effects of climate change on coral reefs. Global warming and ocean acidification are causing coral bleaching and die-offs at an alarming rate, which is why our work is more important than ever. Through our restoration program, we are helping to rebuild coral reef ecosystems and create habitats for marine life to thrive.",

    paragraph3: "We work with schools and community groups to raise awareness about the importance of coral reef conservation. By teaching people about the role of coral reefs in providing food and shelter for marine life, we are inspiring the next generation of ocean guardians to take action and protect our oceans.",

    paragraph4: "One of the most rewarding aspects of our work is seeing the results of our coral restoration efforts. We have seen coral reefs that were once degraded and lifeless come back to life, teeming with colorful fish and other marine life. This is a testament to the power of community action and the importance of grassroots conservation efforts.",

    paragraph5: "Despite the challenges we face, we remain committed to our mission of protecting marine life and preserving our oceans. Through our coral restoration program, we are helping to rebuild coral reef ecosystems and create habitats for marine life to thrive. We believe that every small action counts and that by working together, we can make a real difference in the world.",
  },
  {
    title: "How We Helped with Ocean Acidification!",

    paragraph1:
      "One of the biggest threats facing our oceans today is ocean acidification, which is caused by the absorption of carbon dioxide from the atmosphere. This process makes the ocean more acidic, which can have devastating impacts on marine life.As a small but dedicated charity, we are working hard to prevent ocean acidification through a variety of programs and initiatives. One of our main areas of focus is on reducing carbon emissions and promoting sustainable living. We believe that by taking small steps in our daily lives, we can make a big difference in the health of our oceans.",

    paragraph2: "We work with schools and community groups to raise awareness about the impacts of ocean acidification and the importance of taking action to reduce our carbon footprint. Through our education programs, we hope to inspire the next generation of ocean guardians to take action and protect our oceans.",

    paragraph3: "Another key aspect of our work is our advocacy efforts. We work with government agencies and other organizations to promote policies that support the transition to renewable energy and other sustainable practices. By advocating for change at the local and national levels, we hope to create a brighter future for our oceans and the planet as a whole.",

    paragraph4: "We also support scientific research on ocean acidification and its impacts on marine life. By funding research projects and partnering with scientists and research institutions, we hope to gain a better understanding of this complex issue and find solutions to address it.",

    paragraph5: "At Ocean Buddies, we believe that every small action counts and that by working together, we can make a real difference in the world. Through our efforts to prevent ocean acidification, we are helping to protect marine life and preserve the health of our oceans for future generations.",
  },
  {
    title: "Plastic Waste and Our Removal of It",

    paragraph1: "We are working hard to prevent plastic waste through a variety of programs and initiatives. One of our main areas of focus is on reducing the use of single-use plastic products and promoting sustainable living. We believe that by taking small steps in our daily lives, we can make a big difference in the health of our oceans.",

    paragraph2: "  We also work with businesses to promote sustainable practices and reduce their plastic waste. By partnering with companies, we can help them transition to more sustainable products and packaging, which reduces their impact on the environment. We also encourage businesses to join us in our beach clean-up initiatives and other efforts to prevent plastic waste.",

    paragraph3: "Another important aspect of our work is promoting recycling and proper waste management. We believe that by educating people about the importance of recycling and proper waste management, we can reduce the amount of plastic waste that ends up in our oceans. We work with local communities to develop recycling programs and provide educational materials to promote proper waste management.",

    paragraph4: "At Ocean Buddies, we are constantly looking for new and innovative solutions to prevent plastic waste. We are always researching and testing new technologies and ideas that can help us achieve our mission of protecting marine life and preserving the health of our oceans.",

    paragraph5: "Ultimately, our goal is to create a world where plastic waste is no longer a threat to our oceans and marine life. We believe that through education, advocacy, and community action, we can achieve this goal and create a brighter future for our planet. We are proud to be part of a global movement working to protect our oceans and we invite everyone to join us in our efforts to prevent plastic waste and protect our oceans.",
  },
];

const News = () => {
  const [isModalOpen1, setIsModal1Open] = useState(false);
  const [isModalOpen2, setIsModal2Open] = useState(false);
  const [isModalOpen3, setIsModal3Open] = useState(false);
  const [isModalOpen4, setIsModal4Open] = useState(false);

  const revealModal1 = () => {
    setIsModal1Open(true);
  };
  const revealModal2 = () => {
    setIsModal2Open(true);
  };
  const revealModal3 = () => {
    setIsModal3Open(true);
  };
  const revealModal4 = () => {
    setIsModal4Open(true);
  };
  return (
    <>
      {isModalOpen1 && <NewsModal title={stories[0].title} par1={stories[0].paragraph1} par2={stories[0].paragraph2} par3={stories[0].paragraph3} par4={stories[0].paragraph4} par5={stories[0].paragraph5} date="12/22/23" action={() => setIsModal1Open(false)} />}
      {isModalOpen2 && <NewsModal title={stories[1].title} par1={stories[1].paragraph1} par2={stories[1].paragraph2} par3={stories[1].paragraph3} par4={stories[1].paragraph4} par5={stories[1].paragraph5} date="2/17/22" action={() => setIsModal2Open(false)} />}
      {isModalOpen3 && <NewsModal title={stories[2].title} par1={stories[2].paragraph1} par2={stories[2].paragraph2} par3={stories[2].paragraph3} par4={stories[2].paragraph4} par5={stories[2].paragraph5} date="6/1/21" action={() => setIsModal3Open(false)} />}
      {isModalOpen4 && <NewsModal title={stories[3].title} par1={stories[3].paragraph1} par2={stories[3].paragraph2} par3={stories[3].paragraph3} par4={stories[3].paragraph4} par5={stories[3].paragraph5} date="8/6/19" action={() => setIsModal4Open(false)} />}
      <div className="pt-32 pb-5 bg-blue-700 text-center flex justify-between" />
      <section>
        <div className="flex flex-wrap py-8 justify-center">
          <TextInfo
            title="Ocean Buddies and Rescuing Sea Turtles"
            text="Rescuing sea turtles is an important and ongoing effort to protect these vulnerable creatures from harm. Sea turtles face numerous threats, including entanglement in fishing gear, ingestion of plastics, poaching, and habitat destruction. When sea turtles are injured, sick, or otherwise in need of assistance, specialized organizations and trained professionals are often called upon to provide rescue and rehabilitation services."
            buttonText="Read More"
            action={revealModal1}
          />
          <img className="animation h-96 w-96 max-sm:w-80" src={turtle} />
        </div>
        <div className="flex flex-wrap py-8 justify-center">
          <img className="max-ex:order-3 animation2 h-96 w-96 max-sm:w-80" src={reef} />
          <TextInfo title="Ocean Buddies Coral Reef Conservation Efforts" text="Coral reefs are among the most biodiverse and productive ecosystems on Earth, supporting countless species of marine life and providing important ecological, economic, and cultural benefits to communities around the world. Unfortunately, coral reefs are under threat from a range of human activities, including overfishing, pollution, and climate change." buttonText="Read More" action={revealModal2} />
        </div>
        <div className="flex flex-wrap py-8 justify-center">
          <TextInfo title="How We Helped with Ocean Acidification!" text="Ocean acidification is a growing threat to the health of our oceans, and many ocean charities are working to address this issue. Ocean acidification occurs when carbon dioxide from the atmosphere dissolves in seawater, causing the water to become more acidic. " buttonText="Read More" action={revealModal3} />
          <img className="animation h-96 w-96 max-sm:w-80" src={acidification} />
        </div>
        <div className="flex flex-wrap py-8 mb-32 justify-center">
          <img className="max-ex:order-3 animation2 h-96 w-96 max-sm:w-80" src={plastic} />
          <TextInfo title="Plastic Waste and Our Removal of It" text="Plastic waste is one of the biggest environmental challenges facing our oceans, and many ocean charities are working tirelessly to tackle this issue. The negative impacts of plastic pollution on marine ecosystems are well-documented, including entanglement, ingestion, and the release of toxic chemicals." buttonText="Read More" action={revealModal4} />
        </div>
      </section>
    </>
  );
};

export default News;
