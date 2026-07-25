import img from "../img/founding.png";

const Portfolio = () => {
  return (
    <div className="flex justify-center items-center w-full md:w-3/4 mx-auto">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeblQG9WQnYCjMENf08KBCvsIWQICQ-hzerzsbDnDBWFPq2Rg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">

      <img
        src={img}
        alt="img"
        className="object-contain"
      />
        </a>
    </div>
  );
};
export default Portfolio;