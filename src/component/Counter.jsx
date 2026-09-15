import React,{useEffect,useState}from"react";

const Counter=({end,suffix="",duration=2000,step=1})=>{
const[count,setCount]=useState(0);

useEffect(()=>{
let startTime=null;
let animationFrame;

const animate=(currentTime)=>{
if(!startTime)startTime=currentTime;

const progress=Math.min((currentTime-startTime)/duration,1);
const rawValue=progress*end;
const current=Math.min(Math.floor(rawValue/step)*step,end);

setCount(current);

if(progress<1){
animationFrame=requestAnimationFrame(animate);
}else{
setCount(end);
}
};

setCount(0);
animationFrame=requestAnimationFrame(animate);

return()=>cancelAnimationFrame(animationFrame);
},[end,duration,step]);

return(
<span className="tabular-nums inline-block">
{count}{suffix}
</span>
);
};

export default Counter;