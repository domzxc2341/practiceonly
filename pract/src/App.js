import img1 from "./Photo_2.png"

function App() {
  return (
    <>

  {/*   this is xl 1280 width pxp */}
      <div class=" bg-gradient-to-r from-indigo-900 to-teal-900 flex
      xs:w-[360px] h-[640px]
      xl:h-screen 
      ">
    
      <p class="text-[7vh] font-mono text-violet-600 relative font-bold 
      xs:text-[3vh] xs:top-[15vh] xs:left-[12vh] xs:whitespace-nowrap 
      ">Hello I'm Dominique</p>

      <p class="relative font-mono text-violet-600 font-bold
      xs:text-[3vh] xs:top-[30vh] xs:right-[15vh] xs:whitespace-nowrap 
      ">And I'm Web Developer </p>

      <img src={img1} class="relative inline 
      xs:h-[13vh] xs:right-[30vh] xs:top-[45vh]
      sm:left-[105vh] sm:h-[45vh]
      xl:left-[95vh] xl:bottom-[20vh] 
       "/>
  
  </div>
      <h1 class="text-4xl relative top-20 left-20 inline">Welcome</h1>
    </>
  );
}

export default App;
