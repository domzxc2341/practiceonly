

export default FirstPage;






----------------

const Deyt = new Date()
const Hour = Deyt.getHours()
let greet =""

if(Hour < 12){
  greet = "Good Morning"
}
else if(Hour < 18){
  greet = "Good Afternoon"
} else {
  greet = "Good Evening!"
}



function FirstPage() {
return (
<h1> {greet}</h1>
)
}