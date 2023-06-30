import React,{useEffect} from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";

export const Testimonial = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="sections"  >
        <div style={{display:"flex",flexDirection:"column",alignItems:"center", boxShadow:"0 0 10px white"}}>
        <h1 style={{display:"flex",alignItems:"center"}} className="heading"><span className="sauce"> My Contributions and Stats</span></h1>
      <div data-aos="fade-up" style={{display:"flex", flexDirection:"column"}}>

      <GitHubCalendar
        fontSize={16}
        blockSize={15}
        year={2023}
        username="NafisAamir"
      />
      </div>
        </div>
      
      <div data-aos="fade-up" style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'3rem'}}>

        <img
        style={{width:"400px"}}
        id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=NafisAamir&theme=neon&border_radius=2.7"
          alt="NafisAamir"
        />
      </div>
      <div  data-aos="fade-up" style={{display:'flex', justifyContent:'space-between', gap:'30px', marginTop:'3rem'}} id="github-stat" >
        <img
        id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=NafisAamir&theme=neon&border_radius=2.7&show_icons=true"
          alt="NafisAamir"
        />
        <img
        id="github-streak-stats"
        
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=NafisAamir&theme=neon&border_radius=2.7&date_format=M%20j%5B%2C%20Y%5D"
          alt="NafisAamir"
        />
      </div>
    </section>
  );
};