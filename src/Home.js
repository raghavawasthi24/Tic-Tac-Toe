import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import circle from "./images/circle.png";
import cross from "./images/cross.png";

const Home = () => {
  const[turn,setTurn]=useState(true);
  const[k,setk]=useState(0);
  const[arr,setarr]=useState(Array(9).fill(null));

  const[sqr1,setSqr1]=useState(false);
  const[sqr2,setSqr2]=useState(false);
  const[sqr3,setSqr3]=useState(false);
  const[sqr4,setSqr4]=useState(false);
  const[sqr5,setSqr5]=useState(false);
  const[sqr6,setSqr6]=useState(false);
  const[sqr7,setSqr7]=useState(false);
  const[sqr8,setSqr8]=useState(false);
  const[sqr9,setSqr9]=useState(false);

  const[count,setcount]=useState(1);
  const[flag,setFlag]=useState(null);

  const[sqr1_visible,setsqr1_visible]=useState(null);
  const[sqr2_visible,setsqr2_visible]=useState(null);
  const[sqr3_visible,setsqr3_visible]=useState(null);
  const[sqr4_visible,setsqr4_visible]=useState(null);
  const[sqr5_visible,setsqr5_visible]=useState(null);
  const[sqr6_visible,setsqr6_visible]=useState(null);
  const[sqr7_visible,setsqr7_visible]=useState(null);
  const[sqr8_visible,setsqr8_visible]=useState(null);
  const[sqr9_visible,setsqr9_visible]=useState(null);

  const change_turn=()=>{
    if(turn==true)
    setTurn(false)
    else
    setTurn(true)
  }

  const first_sqr=()=>{
    if(sqr1!=true){
    setSqr1(true);
    setk(0);
    if(count%2==0){
    setsqr1_visible(false);
    setcount(count+1);
    // setarr([...arr,{id:1,key:count%2}])
    }
    else{
    setsqr1_visible(true);
    setcount(count+1);
    // setarr([...arr,{id:1,key:count%2}])
    }
    const copyarr=[...arr];
    copyarr[0]=count%2;
    setarr(copyarr);
  }
  }

  const second_sqr=()=>{
    if(sqr2!=true){
    setSqr2(true);
    setk(1);
    if(count%2==0){
    setsqr2_visible(false);
    setcount(count+1);
    console.log(count);
    }
    else{
    setsqr2_visible(true);
    setcount(count+1);
    console.log(count);
    }
    const copyarr=[...arr];
    copyarr[1]=count%2;
    setarr(copyarr);
  }
  }

  const third_sqr=()=>{
    if(sqr3!=true){
    setSqr3(true);
    setk(2);
    if(count%2==0){
    setsqr3_visible(false);
    setcount(count+1);
    }
    else{
    setsqr3_visible(true)
    setcount(count+1);
    }
    const copyarr=[...arr];
    copyarr[2]=count%2;
    setarr(copyarr);
  }
  }

  const fourth_sqr=()=>{
    if(sqr4!=true){
    setSqr4(true);
    setk(3);
    if(count%2==0){
    setsqr4_visible(false);
    setcount(count+1);
    }
    else{
    setsqr4_visible(true)
    setcount(count+1);
    }
    const copyarr=[...arr];
    copyarr[3]=count%2;
    setarr(copyarr);
  }
  }

  const fifth_sqr=()=>{
    if(sqr5!=true){
    setSqr5(true);
    setk(4);
    if(count%2==0){
    setsqr5_visible(false);
    setcount(count+1);
    }
    else{
    setsqr5_visible(true)
    setcount(count+1);
    }
    const copyarr=[...arr];
    copyarr[4]=count%2;
    setarr(copyarr);
  }
  }

  const sixth_sqr=()=>{
    if(sqr6!=true){
    setSqr6(true);
    setk(5);
    if(count%2==0){
    setsqr6_visible(false);
    setcount(count+1);
    }
    else{
    setsqr6_visible(true)
    setcount(count+1);
    }
    const copyarr=[...arr];
    copyarr[5]=count%2;
    setarr(copyarr);
  }
  }

  const seven_sqr=()=>{
    if(sqr7!=true){
    setSqr7(true);
    setk(6);
    if(count%2==0){
    setsqr7_visible(false);
    setcount(count+1);
    }
    else{
    setsqr7_visible(true)
    setcount(count+1);
    }
    const copyarr=[...arr];
    copyarr[6]=count%2;
    setarr(copyarr);
  }
  }

  const eight_sqr=()=>{
    if(sqr8!=true){
    setSqr8(true);
    setk(7);
    if(count%2==0){
    setsqr8_visible(false);
    setcount(count+1);
    }
    else{
    setsqr8_visible(true)
    setcount(count+1);
    }
    const copyarr=[...arr];
    copyarr[7]=count%2;
    setarr(copyarr);
  }
  }

  const nine_sqr=()=>{
    if(sqr9!=true){
    setSqr9(true);
    setk(8);
    if(count%2==0){
    setsqr9_visible(false);
    setcount(count+1);
    }
    else{
    setsqr9_visible(true)
    setcount(count+1);
    }
    const copyarr=[...arr];
    copyarr[8]=count%2;
    setarr(copyarr);
  }
  }
  const play_again=()=>[
    window.location.reload()
  ]

  useEffect(()=>{
    console.log(arr);
    if(flag!=0 && flag!=1){
    if(arr[0]==arr[1]&&arr[1]==arr[2]&&arr[2]==1||arr[3]==arr[4]&&arr[4]==arr[5]&&arr[5]==1||arr[6]==arr[7]&&arr[7]==arr[8]&&arr[8]==1||arr[0]==arr[3]&&arr[3]==arr[6]&&arr[6]==1||arr[1]==arr[4]&&arr[4]==arr[7]&&arr[7]==1||arr[2]==arr[5]&&arr[5]==arr[8]&&arr[8]==1||arr[0]==arr[4]&&arr[4]==arr[8]&&arr[8]==1||arr[2]==arr[4]&&arr[4]==arr[6]&&arr[6]==1){
      console.log( "1 is the winner" )
      setFlag(1);
    }
    else if(arr[0]==arr[1]&&arr[1]==arr[2]&&arr[2]==0||arr[3]==arr[4]&&arr[4]==arr[5]&&arr[5]==0||arr[6]==arr[7]&&arr[7]==arr[8]&&arr[8]==0||arr[0]==arr[3]&&arr[3]==arr[5]&&arr[5]==0||arr[1]==arr[4]&&arr[4]==arr[7]&&arr[7]==0||arr[2]==arr[5]&&arr[5]==arr[8]&&arr[8]==0||arr[0]==arr[4]&&arr[4]==arr[8]&&arr[8]==0||arr[2]==arr[4]&&arr[4]==arr[6]&&arr[6]==0){
      console.log( "0 is the winner" );
      setFlag(0);
      ;
    }
  }
 })


  return ( 
    <div className='board'>
       <p>{flag==1?"X is the winner":flag==0?"0 is the winner":count%2==1?"Move X":"Move 0"}</p>
       {/* <p>{flag==0?"0 is the winner":count%2==0?"Move 0":""}</p> */}
       {/* <Link to="/">Play Again</Link> */}
       <h3 onClick={play_again}>Play Again</h3>
    <div className='home'>
        <div className='sqr' onClick={first_sqr}>
          <div className={sqr1==true?'':'hide'}>
            <img clasName="img1" src={sqr1_visible==true?cross:circle}/>
          </div>
        </div>
        <div className='sqr' onClick={second_sqr}>
          <div className={sqr2==true?'':'hide'}>
          <img src={sqr2_visible==true?cross:circle}/>
          </div>
        </div>
        <div className='sqr' onClick={third_sqr}>
          <div className={sqr3==true?'':'hide'}>
          <img src={sqr3_visible==true?cross:circle}/>
          </div>
        </div>
        <div className='sqr' onClick={fourth_sqr}>
        <div className={sqr4==true?'':'hide'}>
          <img src={sqr4_visible==true?cross:circle}/>
          </div>
        </div>
        <div className='sqr' onClick={fifth_sqr}>
        <div className={sqr5==true?'':'hide'}>
          <img src={sqr5_visible==true?cross:circle}/>
          </div>
        </div>
        <div className='sqr' onClick={sixth_sqr}>
        <div className={sqr6==true?'':'hide'}>
          <img src={sqr6_visible==true?cross:circle}/>
          </div>
        </div>
        <div className='sqr' onClick={seven_sqr}>
        <div className={sqr7==true?'':'hide'}>
          <img src={sqr7_visible==true?cross:circle}/>
          </div>
        </div>
        <div className='sqr' onClick={eight_sqr}>
        <div className={sqr8==true?'':'hide'}>
          <img src={sqr8_visible==true?cross:circle}/>
          </div>
        </div>
        <div className='sqr' onClick={nine_sqr}>
        <div className={sqr9==true?'':'hide'}>
          <img src={sqr9_visible==true?cross:circle}/>
          </div>
        </div>
    </div>
   
    </div>
    
  )
}

export default Home;