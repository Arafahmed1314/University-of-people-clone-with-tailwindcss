const menu=document.querySelector(".menu");
document.querySelector('.hamburger-menu').addEventListener('click', function() {

    const lines1 = this.querySelector('.line1');
    const lines3 = this.querySelector('.line3');
    const lines = this.querySelector('.line');

  lines1.classList.toggle('rotate-45');
  lines3.classList.toggle('-rotate-45');
  lines.classList.toggle('hidden');
  menu.classList.toggle('hidden');
console.log("hello");
  });


function createContainer(img,heading,para){
  const v=`  <div
  class="first parent ml-16 w-[33%]">
  <div class="img">
      <img class="imgs" src="${img}" alt>
  </div>
  <div class="head ">
      <h1
          class="text-xl font-semibold font-serif mb-2 text-gray-700 tracking-tighter">${heading}</h1>
  </div>
  <div class="para">
      <p class="p">${para}</p>
  </div>
</div>`;
document.querySelector(".part-1").innerHTML+=v;
}
function createcard(img,heading,para){
  const v=`  <div
  class="first parent mb-16">
  <div class="img">
      <img class="imgs" src="${img}" alt>
  </div>
  <div class="head ">
      <h1
          class="text-3xl uppercase font-semibold font-serif mb-2 text-gray-700 tracking-tighter">${heading}</h1>
  </div>
  <div class="para">
      <p class="p">${para}</p>
  </div>
</div>`;
document.querySelector(".cards").innerHTML+=v;
}
function makecard(img,head,para,icon)
{
  const v=`  <div class="card w-[90%] bg-[#4B345D] p-5 rounded-md md:basis-1/4 md:ml-4 hover:shadow-2xl shadow-blue-500/20transition duration-300 md:hover:scale-105 hover:scale-95">
  <div class="card img">
      <img src="${img}" alt>
  </div>
  <div class="card-head">
      <h1 class="card-heads ">${head}</h1>
      <p class="text-white m-2">${para}</p>
  </div>
  <div
  class="card-btn rounded-full text-white h-[40px] w-[40px] border flex items-center justify-center pb-2 mt-4 ml-2 hover:bg-white">
  <button
      class="text-4xl text-white m-2 hover:text-[#4B345D] transition duration-500">&#8594;</button>
</div>
</div>`;
document.querySelector(".card-part").innerHTML+=v;
}
function facility(para){
  const v=`   <div class="facility">
  <p class="hover:text-[#e41a7c] font-semibold transition ">${para}</p>
</div>`;
document.querySelector(".facility").innerHTML+=v;
}
facility("Academic Programs");
facility("Student Experience");
facility("Become a Student");
facility("Become a Student");
facility("Tuition-Free");
facility("About");
facility("Calendars");
facility("Essential Documents");
facility("Volunteer");
facility("Events / Webinars");
facility("Contact Us");
facility("Administration");

createContainer("hand.svg"," TUITION FREE " , "As a tuition-free, online univesity there's no cost for instruction , books or campus fees");
createContainer("note.webp"," AMERICAN ACCREDITED " , "Uopeople is recognized by the DEAC as an accredited online university. Stay touched");
createContainer("calender.webp"," FLEXIBLE" , "Since Uopeople is 100% online you can study to fit your schedule anytime, anywhere.");

makecard("card-1.svg","Master's Degree","Become and expert in your field now grow your career with a Master's in business Administration, Information Technology, or Education.", "&#8594;");
makecard("card-2.svg","Bachelor's Degrees","Launch your career with an undergraduate degree. We offer Bachelor's in Business Administration, Computer Science, and Health Ssience.", "&#8594;");
makecard("card-3.svg","Associate's Degree","Start your higher education journey with an Associate's in Business Administration, Computer Science, or Health Science.", "&#8594;");
makecard("card-4.svg","Certificate Programs","Short, specialized programs available in 11 fields, each designed for on-the-job applications.", "&#8594;");

createcard("hand.svg"," TUITION FREE " , "As a tuition-free, online univesity there's no cost for instruction , books or campus fees");
createcard("note.webp"," Flexibility " , "UoPeople is a 100% online college. Control your schedule by studying anytime and anywhere you want -");
createcard("quality.svg"," Quality " , "UoPeople is an accredited, American online University. Our academic leadership includes scholars from top universities around the world.");
createcard("support.svg"," Support " , "Our classes are small and every student has a Program Advisor from their first day of classes all the way until graduation.");
createcard("global.svg"," Global " , "With students from more than 200 countries and territories, you'll learn skills to help you thrive in the global business world.");
createcard("expertise.svg"," Expertise " , "We're the leader in 100% online education, with more than 12 years of experience serving students around the world.");
