// import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      {/* User1 = {
	name : ‘Amit’ ,
	image : ‘https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg’ ,
	designation : ‘’Graphic Designer ,
	description : ‘Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.’ 
} */}

      <Card
        imageSrc="https://images.pexels.com/photos/769690/pexels-photo-769690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        position="Graphic Designer"
        description=" Highly creative and multitalented Graphic Designer with extensive
      experience in multimedia, marketing, and print design."
        fname="Amit"
        icon1="https://img.freepik.com/free-vector/design-logo-template-with-slogan-placeholder_23-2148631156.jpg?w=740&t=st=1678384743~exp=1678385343~hmac=439bb13b629e66f8699326f768deac7356a384f9ed64381a301617fb1dbbf107"
        icon2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMmSYsMrTnejPBJ1F5rLVqnme9bXisMTKlg&usqp=CAU"
        icon3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEP9fqlQ4K0-giPyTb6CvDOqMCIyxPo0gqg&usqp=CAU"
      />

      {/* User2 = {
	name : ‘Ruhi’ ,
	image : ‘https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2’ ,
	description : ‘perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, 				and other types of music groups. ’ ,
	designation : ’Singer’
}
 */}
      <Card
        imageSrc="https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        position="Singer"
        description="perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, 				and other types of music groups."
        fname="Ruhi"
        icon1="https://img.freepik.com/free-vector/design-logo-template-with-slogan-placeholder_23-2148631156.jpg?w=740&t=st=1678384743~exp=1678385343~hmac=439bb13b629e66f8699326f768deac7356a384f9ed64381a301617fb1dbbf107"
        icon2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMmSYsMrTnejPBJ1F5rLVqnme9bXisMTKlg&usqp=CAU"
        icon3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEP9fqlQ4K0-giPyTb6CvDOqMCIyxPo0gqg&usqp=CAU"
      />
    </>
  );
}

export default App;
