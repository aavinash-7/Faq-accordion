// Comp.jsx
import Ques from "./question.jsx";
import pic from  "./assets/pic.png";


function Comp() {
  return (
    <div>
    <div className="title"> 
      <img src={pic} alt="" />
      <h1>FAQs</h1></div>
      <Ques Question="What is Frontend mnetor,and how will it help me?"
         Answer="Frontend metor offers realistic coding challenges to 
         help developers improve their frontend coding skills  with 
         projects in HTML,CSS,and JavaScript.its suitable for all levels 
         and ideal for portfolio building."/> 

       <Ques Question="IS Frontend Mentor free?"
        Answer="Frontend metor offers realistic coding challenges to 
         help developers improve their frontend coding skills  with 
         projects in HTML,CSS,and JavaScript.its suitable for all levels 
         and ideal for portfolio building."/> 


        <Ques Question="Can i use Frontend Mentor projects in my portfolio?"
         Answer="Frontend metor offers realistic coding challenges to 
         help developers improve their frontend coding skills  with 
         projects in HTML,CSS,and JavaScript.its suitable for all levels 
         and ideal for portfolio building."/>  
         <Ques Question="How can i get help if iam stuck on a challenge?"
          Answer="Frontend metor offers realistic coding challenges to 
         help developers improve their frontend coding skills  with 
         projects in HTML,CSS,and JavaScript.its suitable for all levels 
         and ideal for portfolio building."/>  
  
    </div>
  );
}

export default Comp;
