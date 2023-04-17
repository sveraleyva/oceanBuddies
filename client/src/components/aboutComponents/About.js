import beachside from "./../../images/beachside.jpg";

const About = () => {
  const datas = [
    {
      title: "About",
      text: "Ocean Buddies is dedicated to safeguarding the health of our planet's ocean through advocacy, education, and conservation efforts. We believe that the ocean is the foundation of our ecosystem, and we work to raise awareness about the impact of human activity on marine life. Our goal is to promote sustainable practices that will help to protect and restore the health of our ocean, ensuring a healthy future for all life on earth. Join us in our mission to preserve and protect our ocean for generations to come.",
    },
    {
      title: "Our Mission",
      text: "Our mission is to promote the conservation and restoration of the ocean's health and biodiversity. We work to raise awareness about the critical importance of the ocean to our planet's ecosystem, and to inspire action to protect it. Through our advocacy, education, and conservation efforts, we aim to foster a deeper appreciation and understanding of the ocean, and to promote sustainable practices that will ensure a healthy future for all life on earth.",
    },
    {
      title: "Our Goal",
      text: "Our specific goals include reducing ocean pollution, protecting and restoring marine habitats, promoting sustainable fishing practices, and supporting scientific research to better understand the impacts of human activity on the ocean. We also aim to inspire and educate individuals, communities, and policymakers to take action towards protecting the ocean and its biodiversity. Ultimately, we strive to create a healthier and more sustainable future for our planet's ocean and the life within it.",
    },
    {
      title: "Our Success",
      text: "Ocean Buddies has achieved significant progress in our efforts to protect and preserve the ocean. We have successfully lobbied for policy changes that have reduced plastic pollution in the ocean, established marine protected areas to protect critical habitats, and promoted sustainable fishing practices. Our educational campaigns have reached millions of people, inspiring action and awareness towards ocean conservation. Through our efforts, we have made significant strides towards a healthier and more sustainable future for our planet's ocean.",
    },
    {
      title: "What can I do?",
      text: "You can help us by donating funds, volunteering time, participating in beach cleanups, reducing single-use plastics, supporting sustainable seafood, and advocating for ocean conservation policies. Every individual action can make a difference in protecting the ocean and its biodiversity for future generations.",
    },
    {
      title: "Not Done Yet",
      text: "Looking towards the future, Ocean Buddies is committed to achieving even greater impact. Our future goals include expanding our reach to new audiences, advocating for stronger policies to reduce carbon emissions and address climate change, and partnering with local communities to implement sustainable ocean conservation practices. We aim to continue promoting scientific research and supporting innovative solutions that will help to protect and restore the health of our planet's ocean.",
    },
  ];
  return (
    <>
      <div className="relative">
        <img style={{ height: "800px", width: "100%" }} src={beachside} />
        <h1 className="text-white font-bold text-6xl absolute bottom-40 left-14">Helping the ocean since 1960.</h1>
      </div>
      <section className="flex flex-wrap justify-center mb-40">
        {datas.map((data) => (
          <div key={data.title} className="w-1/4 max-md:w-full m-5">
            <h1 className="text-center font-bold mb-3">{data.title}</h1>
            <p className="font-extralight">{data.text}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default About;
