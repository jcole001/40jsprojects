// Creating the Object

const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];


// reveiws board

const image = document.getElementById("person-img")
const information = document.getElementById("info")
const occupation = document.getElementById("job")
const author = document.getElementById("author")

//button DOM 

const prevBtn = document.querySelector(".prevbtn")
const nextBtn = document.querySelector(".nextbtn")
const  rdmBtn = document.getElementById ("random-btn")




//set the intial content 

let currentItem = 0 ; 


//load the intial content. 
//Notes : under this we have an anonymous function which def can't be accessed and it is accessed by a variable in which it is stored as a function as a value. 

window.addEventListener("DOMContentLoaded",function (){
    const item = reviews[currentItem]
    image.src= item.img
    occupation.textContent = item.job
    author.textContent = item.name
    information.textContent= item.text
})


//parameter vs argument : A parameter is a placeholder defined in the function definition whereas the argument is sort value that is used during the callback function 

//show a person through the array by using indexes where the item holds the value.

function showperson (person){
    const item = reviews[person]
    image.src = item.img
    occupation.textContent= item.job
    author.textContent = item.name
    information.textContent = item.text
}


//choose the next person to show 

nextBtn.addEventListener("click",function (){
    currentItem++; 
    if (currentItem > reviews.length-1){
        currentItem = 0 ; 
    }
    showperson(currentItem)
})



prevBtn.addEventListener("click",function(){
    currentItem--; 
    if (currentItem === 0 ) {
        currentItem = 0 
    }
     
    showperson(currentItem)
})


//random number 

rdmBtn.addEventListener("click", function(){
    let rdmn = Math.floor(Math.random()*reviews.length) 
    showperson(rdmn)
    // console.log(rdmn)
}
)