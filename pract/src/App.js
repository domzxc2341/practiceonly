import img1 from "./Photo_2.jpg"

function App() {
  return (
    <>
      <div class=" h-screen bg-gradient-to-r from-indigo-900 to-teal-900 flex">
        <div class="relative top-[30vh] left-[15vh]  inline ">
      <h1 class="text-[7vh] font-mono text-violet-600">Hello I'm Dominique</h1>
      <p class="relative top-[2vh] text-[5vh] font-mono text-violet-600">And I'm Web Developer </p>
      <img src={img1} />
      </div>
  </div>
      <h1 class="text-4xl relative top-20 left-20 inline">Welcome</h1>
    </>
  );
}

export default App;
