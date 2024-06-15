import { NavigationBar } from "./NavigationBar";
import {Footer}  from "./Footer.jsx";

export function About(){
return(
   <div>
    <div>
<h4 style={{ backgroundColor: "beige",textAlign: "center",padding:"20px"}}>Know more about us...</h4>
<div style={{backgroundColor:"red", textAlign: "left",padding:"40px" }}>

<div style={{height:100, width:100}}>
 <img src="../images/aman.jpg" style={{height:100, width:100}}></img>
 </div>
 <p>
It isn’t enough to just market your product to consumers. You need to earn their trust too.
One way to do this is by explaining who you are and what your company is about. The easiest and most effective way to achieve this is with an About Us page.
</p>
</div>
<div style={{backgroundColor:"Orange", textAlign: "left",padding:"40px" }}>
 <p>
 <div>
 <img src="../images/Noman.jpeg" style={{height:100, width:100}}></img>
 </div>
 It isn’t enough to just market your product to consumers. You need to earn their trust too.

One way to do this is by explaining who you are and what your company is about. The easiest and most effective way to achieve this is with an About Us page.
    </p>   
</div>
<div style={{backgroundColor:"blue", textAlign: "left",padding:"40px" }}>
 <p>
    <div>
 <img src="../images/Somesh.jpg" style={{height:100, width:100}}></img>
 </div>
 It isn’t enough to just market your product to consumers. You need to earn their trust too.

One way to do this is by explaining who you are and what your company is about. The easiest and most effective way to achieve this is with an About Us page.
    </p>   
</div>
</div>

   </div>
)


}