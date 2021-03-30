const btn=document.getElementById('addTodo');
const inp=document.getElementById('inp');
const list=document.getElementById('list');
// const tt=document.getElementById('tt');


btn.onclick=function(e){
    // const name= prompt("Enter your name.");
    // document.getElementById("nh").innerHTML= name +" To-do list";

    const todotext=inp.value;
    const li=document.createElement('li');
    const time=prompt("enter time");
    if(time!=null)
    {
        li.innerText=todotext;

        list.append(time+" o'clock");
        
        list.append(li);
        inp.value="";

    }
    else{
        li.innerText=todotext;        
        list.append(li);
        inp.value="";
    }
   
    
    li.onclick=function (e){

       var ans= prompt("do you want to delete it enter 0 for yes and 1 for no(1/0)?");
        if(ans==1)
       {
           
           e.target.remove();
           alert("the item "+todotext+" is deleted");
       }     
      
        
    }
}