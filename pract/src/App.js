import img1 from "./Photo_2.png"
import './App.css'

function App() {
  return (
    <>
        <div class="bdy">

      <div class=" bg-gradient-to-r from-indigo-900 to-teal-900 flex 
      xs:w-[360px] xs:h-[640px] 
      sm:w-[99vw] sm:h-[100vh]
      xl:w-[99vw] xl:h-[100vh]
      ">
    
      <p class="text-[7vh] font-mono text-violet-600 relative font-bold inline
      xs:text-[4vh] xs:top-[27vh] xs:left-[8vh] xs:whitespace-nowrap 
      ">Hello I'm Dominique</p>

      <p class="relative font-mono text-violet-600 font-bold inline
      xs:text-[4vh] xs:top-[35vh] xs:right-[35vh] xs:whitespace-nowrap 
      ">And I'm Web Developer </p>

      <img src={img1} class="relative
      xs:h-[30vh] xs:right-[83vh] xs:top-[50vh]
      sm:left-[105vh] sm:h-[45vh]
      xl:left-[15vh] xl:top-[40vh]
       "/>
  
  </div>
     
      </div>
      <h1 class="text-4xl relative top-20 left-20 inline">Welcome</h1>
    </>
  );
}

export default App;
