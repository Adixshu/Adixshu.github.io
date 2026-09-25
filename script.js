const glow=document.querySelector(".cursor-glow");
if(glow){window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"})}

const revealTargets=document.querySelectorAll(".project,.stack-grid article,.facts div,.timeline>div");
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealTargets.forEach(el=>io.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"});}
  });
});
