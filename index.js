"vscode_custom_css.imports" ["C:\Users\Learner_SZH3Z106\Documents\NCR-2024-09\SBA-316\style.css"]

// Creating my Navigation bar
const topNavbar = document.getElementById("top-nav");
topNavbar.style.backgroundColor = "var(--top-nav-bg)" ;
topNavbar.style.height = "150%";
topNavbar.classList.add("flex-around");

""

// Nav DataStructure
var navMenu = [
    { text: "Home", icon: '<img src="https://imgs.search.brave.com/1JrzFMjMaI3ttOdRKcmd98JXhoA30r1byi6xGFjUL0M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODQ0/MjQ1MzMyL3ZlY3Rv/ci9ob2x5LWJpYmxl/LWRlc2lnbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cEct/NXBxWDc4MElXdnhH/aFR1blg1YVRQQ3Rr/RXRvekV6ZDVYOVdP/X1pXST0" alt="Home">', href: '/Pages/web.html'},
    { text: "Products", href: "/Products" },
    { text: "About ", href: "/About" },
    { text: "Features", href: "/Features" },
    { text: "Login", href: "/Pages/form.html" },
  ];

  //iterate through the Nav-menu
  navMenu.forEach((link) => {
    //create a new <a> link
    let newLink = document.createElement("a");
    //set the href attribute
    newLink.href = link.href
    //set the text content for the naviagation bar
    newLink.textContent = link.text;
    //append the navmenu child to the Navigation bar
    topNavbar.appendChild(newLink)
   


  });
    
  

//Creating my main features and body 
const mainBar = document.querySelector("main");
mainBar.style.backgroundColor = "lightgray";
// mainBar.innerHTML ="<h1>This is my main</h1>";
mainBar.classList.add("flex-ctr");




//creating footer features
const footerBar = document.getElementById("footer-nav");
footerBar.style.backgroundColor = "var(--main-bg)" ;
footerBar.style.height = "300%";
// footerBar.classList.add("flex-around");

// footer DataStructure
var footerMenu = [
  { text: "About ", href: "/About" },
  { text: "Features", href: "/Features" },
];


  //iterate through the footer-menu
  footerMenu.forEach((link) => {
    //create a new <a> link
    let footLink = document.createElement("a");
    //set the href attribute
    footLink.href = link.href
    //set the text content for the naviagation bar
    footLink.textContent = link.text;
    //append the navmenu child to the Navigation bar
    footerBar.appendChild(footLink)
   


  });



//Adding event listener to my form

//cache the form id to a variable
const form = document.getElementById("myForm");

//Add Event listener
form.addEventListener("submit",(event) => {
  //prevent the form from submitting defaultly
  event.preventDefault();

  //Validate the form fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let isValid = true;

  //clear previous error messages
  document.getElementById("usernameError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  //If Validation of Password and Username
  if (username.trim() === ""){
    document.getElementById("usernameError").textContent = "Username is required";
    isValid = false;
  }
  if (password.trim() === ""){
    document.getElementById("passwordError").textContent = "Password is required";
    isValid = false;

  } else if (!validatePassword(password)){
    document.getElementById.textContent= "wrong password"
    isValid = false;

  }

  if (isValid){
    //sumbit your form succesfully
    console.log("Sucessfully login")
  }
});

//Function to Validate password
function validatePassword(password){
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$/;
  return passwordPattern.test(password);
}
console.log(validatePassword("ThisismyPasscode@150!"));



//Add change event listtener to my checkbox

  const checkbox = document.getElementById('mycheckbox');

  checkbox.addEventListener('change', function(){
    if (checkbox.checked){
      console.log("You are logged in.");

    }else{
      console.log('Not yet logged in.')
    }
  });






























// //iterate through your caurosel
// const carouselInner = document.getElementById("myCarousel");
// const items = [
//   { content: 'Slide 1', imgSrc: 'https://via.placeholder.com/800x400?text=Slide+1' },
//   { content: 'Slide 2', imgSrc: 'https://via.placeholder.com/800x400?text=Slide+2'},
//   { content: 'Slide 3', imgSrc: 'https://via.placeholder.com/800x400?text=Slide+3'}
// ];

// items.forEach((item) => {
//   // const itemHTML =
//   // `<div class="carousel-item${index === 0 ? ' active' : ''}">
//   //     ${item.content}
//   //   </div>`;
//   carouselInner.append(itemHTML);
// });

// //Intiliaze each slide in the boostrap caurosel to run every 2 seconds
// const carousel = new bootstrap.Carousel('myCarousel', {
//   interval: 2000, // optional
//   wrap: true // optional
// });
// //call my caurosel function
// carousel.cycle();



