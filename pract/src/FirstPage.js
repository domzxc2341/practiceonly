import "./App.css";
import Photo from "./Photo_2.png";

function FirstPage() {
  return (
    <>
      <div class="body1">
        <h1 class="h1">Hello I'm "Name"</h1>
        <h1 class="h2">Content</h1>

        <img src={Photo} class="image1" />
      </div>
    </>
  );
}

export default FirstPage;
