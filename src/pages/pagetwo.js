import React from "react";
import "../App.css" 
//all files are imported from the json file 
import fileone from "../db_JSON/sample_db_0km.json" 
import filetwo from "../db_JSON/sample_db_5km.json" 
import filethree from "../db_JSON/sample_db_10km.json" 
import filefour  from "../db_JSON/sample_db_15km.json" 
import filefive from "../db_JSON/sample_db_20km.json" 
import filesix from "../db_JSON/sample_db_25km.json" 
import { Link } from "react-router-dom";

export default function Two(props){
    const files =[fileone , filetwo  , filethree , filefour , filefive  , filesix] ; 
    const file = files[props.q2-1] ;
    //row one info : 
    //trasfer and single bus icon variable is declared below 
    const transfer = <div><div> 1 transfer </div> <br></br><i class="fa-solid fa-bus"><i class="fa-sharp fa-light fa-chevron-right fa-xs"></i><i class="fa-solid fa-bus"></i></i></div> ; 
    const bus = <i class="fa-solid fa-bus"></i>
    //first column data is obtained below 
    let one = file.Data.map(data =>  data.mode_1) ;
    const trans1 =file.Data.map(data =>  data["mode_1.trans"]) 
    let bus1icon = null ; 
    (trans1 == 1) ? bus1icon = transfer  : bus1icon = bus ; 
    let two = file.Data.map(data => data.mode_2) ; 
    const trans2 =file.Data.map(data =>  data["mode_2.trans"]) 
    let bus2icon = null ; 
    (trans2 == 1) ? bus2icon = transfer  : bus2icon = bus ; 
    let three = file.Data.map(data => data.mode_4) ;
    let four = null ; 
    if(props.q1 === "Own two wheeler"){four = file.Data.map(data =>data.mode_9)}
    else{four = file.Data.map(data =>data.mode_8)}
    let five = null ; 
    if(props.q1 === "Auto"){five = file.Data.map(data => data.mode_7)}
    else{five = file.Data.map(data =>data.mode_5)}


    //row two info : 
    let r21 = file.Data.map(data => data["mode_1.ivtt"]) ;  
    let r22 = file.Data.map(data => data["mode_2.ivtt"]) ; 
    let r23 = file.Data.map(data => data["mode_4.ivtt"]) ; 
    let r24 = null ; 
    if(props.q1 === "Own two wheeler"){r24 = file.Data.map(data =>data["mode_9.ivtt"])}
    else{r24 = file.Data.map(data =>data["mode_8.ivtt"])} ; 
    let r25 = null ; 
    if(props.q1 === "Auto"){r25 = file.Data.map(data => data["mode_7.ivtt"])}
    else{r25 = file.Data.map(data =>data["mode_5.ivtt"])}


    //row three info  :
    let r31 = file.Data.map(data => data["mode_1.waittime"] + data["mode_1.walktime"])    ;  
    let r32 = file.Data.map(data => data["mode_2.waittime"] + data["mode_2.walktime"]) ; 
    let r33 = file.Data.map(data => data["mode_4.waittime"] + data["mode_4.walktime"]) ; 
    let r34 = null ; 
    if(props.q1 === "Own two wheeler"){r34 = file.Data.map(data =>data["mode_9.waittime"]+ data["mode_9.walktime"])}
    else{r34 = file.Data.map(data =>data["mode_8.waittime"] + data["mode_8.walktime"])} ; 
    let r35 = null ; 
    if(props.q1 === "Auto"){r35 = file.Data.map(data => data["mode_7.waittime"]+data["mode_7.walktime"])}
    else{r35 = file.Data.map(data => data["mode_5.waittime"] + data["mode_5.walktime"]) }


    //row four info : 
    let r41 = file.Data.map(data => data["mode_1.tvariab"]) ;  
    let r42 = file.Data.map(data => data["mode_2.tvariab"]) ; 
    let r43 = file.Data.map(data => data["mode_4.tvariab"]) ; 
    let r44 = null ; 
    if(props.q1 === "Own two wheeler"){r44 = file.Data.map(data =>data["mode_9.tvariab"])}
    else{r44 = file.Data.map(data =>data["mode_8.tvariab"])} ; 
    let r45 = null ; 
    if(props.q1 === "Auto"){r45 = file.Data.map(data => data["mode_7.tvariab"])}
    else{r45 = file.Data.map(data =>data["mode_5.tvariab"])}
    

    //row five info  : 
    let r51 = file.Data.map(data => data["mode_1.tcost"]) ;  
    let r52 = file.Data.map(data => data["mode_2.tcost"]) ; 
    let r53 = file.Data.map(data => data["mode_4.tcost"]) ; 
    let r54 = null ; 
    if(props.q1 === "Own two wheeler"){r54 = file.Data.map(data =>data["mode_9.tcost"])}
    else{r54 = file.Data.map(data =>data["mode_8.tcost"])} ; 
    let r55 = null ; 
    if(props.q1 === "Auto"){r55 = file.Data.map(data => data["mode_7.tcost"])}
    else{r55 = file.Data.map(data =>data["mode_5.tcost"])}


    //row six info  : 
    const crowd_json = {1:"Many seats available",2:"Some seats available",3:"All seats occupied; standing space available",4:"Fully crowded or packed"} ; 
    let r61 = file.Data.map(data => data["mode_1.crowd"]) ;  
    let r62 = file.Data.map(data => data["mode_2.crowd"]) ; 
    let r63 = file.Data.map(data => data["mode_4.crowd"]) ; 


    //row seven info  :
    const servtype_json= {1:"Ordinary",2:"Express Non-AC",3:"Express AC"}
    let r71 = file.Data.map(data => data["mode_1.serv"]) ;  
    let r72 = file.Data.map(data => data["mode_2.serv"]) ; 


    //row two icons info : 
    let icon3 = 0  ;
    if(props.q2 == 1) {icon3 = <div> <i class="fa-solid fa-person-walking"></i></div>}
    else{icon3 = <i class="fa-solid fa-train-subway"></i>}
    let icon4 =0  ;
    if(props.q1 == "Own two wheeler"){icon4 = <i class="fa-solid fa-person-biking"></i>} 
    else{ icon4 = <i class="fa-solid fa-car-side"></i>}
    let icon5 = <i class="fa-solid fa-car-side"></i> ; 

    //crowd row icons : 
    let cicon1 = null ; 
    
    function icongen(num){
    if(num == 1 ){return  <i class="fa-solid fa-user-group"></i>}
    else if(num == 2 ){return  <i class="fa-solid fa-users"></i>}
    else if(num == 3){return <div><i class="fa-solid fa-users"></i><i class="fa-solid fa-person"></i></div>}
    else {return <div><i class="fa-solid fa-users"></i><i class="fa-solid fa-person"></i><i class="fa-solid fa-person"></i><i class="fa-solid fa-person"></i></div> }} 
    cicon1 = icongen(r61) ; 
    let cicon2 = icongen(r62) ;
    let  cicon3 =  null ;
    if( props.q2 != 1 ) {  cicon3 =  icongen(r63) ;}


    //service type icons below 
    let  servicon1 = null ; 
    (r71 == 1) ? servicon1 = <i class="fi fi-br-person-seat"></i> : servicon1 =  <i class="fi fi-br-person-seat-reclined"></i> ; 
    let  servicon2 = null ; 
    (r72 == 1) ? servicon2 = <i class="fi fi-br-person-seat"></i> : servicon2 =  <i class="fi fi-br-person-seat-reclined"></i> ; 
    

   

    return(
        <div className="secondpagebody">
        <Link to='/'><button className="back"><i class="fa-solid fa-arrow-left fa-2xl"></i></button></Link>
        <div className="page2">
           <table >
               <tr>
                
                   <th className="r1"><p>{one}</p> <input type="radio" name="mode"></input></th>
                   <th className="r2"><p>{two}</p> <input type="radio" name="mode"></input></th>
                   <th className="r3"><p>{three}</p> <input type="radio" name="mode"></input></th>
                   <th className="r4"><p>{four}</p> <input type="radio"  name="mode"></input></th>
                   <th className="r5"><p>{five}</p> <input type="radio"  name="mode"></input></th>
                    
               </tr>
               <tr>
                   <th colspan ="5">Total Time spent while travelling inside the vehicle(s)</th>
               </tr>
               <tr>
                   <th className="r1">{bus1icon}<p>{r21} min</p>   </th>
                   <th className="r2">{bus2icon}<p>{r22} min</p>  </th>
                   <th className="r3"> {icon3} <p>{r23} min</p></th>
                   <th className="r4"><p>{icon4}<br></br>{r24} min</p></th>
                   <th className="r5"> <p>{icon5}<br></br>{r25} min</p> </th>
               </tr>
               <tr>
                   <th colspan ="5">Total Time spent while outside the vehicle(s)</th>
               </tr>
               <tr>
                   <th className="r1"><p>{r31} min</p>   </th>
                   <th className="r2"><p>{r32} min</p>  </th>
                   <th className="r3"><p>{r33} min</p></th>
                   <th className="r4"><p>{r34} min</p></th>
                   <th className="r5"><p>{r35} min</p> </th>
               </tr>
               <tr>
                   <th colspan ="5">Possible delay due to traffic congestion or other uncertainties</th>
               </tr>
               <tr>
                   <th className="r1"><p>...upto {r41} mins more</p>   </th>
                   <th className="r2"><p>...upto {r42} mins more</p>  </th>
                   <th className="r3"><p>...upto {r43} mins more</p></th>
                   <th className="r4"><p>...upto {r44} mins more</p></th>
                   <th className="r5"><p>...upto {r45} mins more</p> </th>
               </tr>
               <tr>
                   <th colspan ="5">Total one-way cost of travel</th>
               </tr>
               <tr>
                   <th className="r1"><p>{r51} rs </p>   </th>
                   <th className="r2"><p>{r52} rs </p>  </th>
                   <th className="r3"><p>{r53} rs </p></th>
                   <th className="r4"><p>{r54} rs </p></th>
                   <th className="r5"><p>{r55} rs</p> </th>
               </tr>
               <tr>
                   <th colspan ="5">Extent of crowding in the vehicle</th>
               </tr>
               <tr>
                   <th className="r1">{cicon1}<p>{crowd_json[r61]}</p></th>
                   <th className="r2">{cicon2}<p>{crowd_json[r62] }</p></th>
                   <th className="r3">{cicon3}<p>{crowd_json[r63] }</p></th>
                   <th className="r4"></th>
                   <th className="r5"></th> 
               </tr>
               <tr>
                   <th colspan ="5">Service type</th>
               </tr>
               <tr>
                   <th className="r1">{servicon1}<p>{servtype_json[r71]}</p></th>
                   <th className="r2">{servicon2}<p>{servtype_json[r72] }</p></th>
                   <th className="r3"></th>
                   <th className="r4"> </th> 
                   <th className="r5"></th>
                    
               </tr>
               
           </table>
           
           
        </div> 
        
          
        </div>
    )
}