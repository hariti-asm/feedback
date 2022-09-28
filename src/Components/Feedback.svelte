<script >
    // node_modules/sweetalert/typings
  // import swal from 'sweetalert';
    import Cam from "../images/Cam.png";
     let send =false;
  import Thanking from "./Thanking.svelte";

  
  // function handleSubmit() {
  
  //   swal("THANK YOU😊 !", "we appreciate your opinion!");}
  
  </script>
  <form  id="usrform"   on:submit={()=>(send=true)}  >
    {#if send}
      <Thanking/>
  {/if}
  
  <main class="popup-container">
    <div class="popup">
      <div class="etoil">
    <p class="beta">BETA Feedback</p>
    <div id="close">✖</div>
   
  </div>
      <h4 id="how">how do you like the new Invoices?</h4>
  
      <input type="radio" name="buttons" id="btn1">
      <input type="radio" name="buttons" id="btn2">
      <input type="radio" name="buttons" id="btn3">
      <input type="radio" name="buttons" id="btn4">
      <input type="radio" name="buttons" id="btn5">
  
      <div class="icons">
          <label for="btn1">🙁</label>
          <label for="btn2">😐</label>
          <label for="btn3">😊</label>
          <label for="btn4">😀</label>
          <label for="btn5">😍</label>
      </div>
      
  
   
      <label for="subject" class="tell">Tell us about your experience:</label>
      <textarea id="subject" name="subject"  maxlength="1000" placeholder="1000"></textarea>
      <div class="ca">
    <img src={Cam} alt="" class="cam">
    <input type="file" id="file">
    <label for="file" class="file-trigger">Add screenshot</label> 
  <!-- <a href="#!" id="add"></a><br> -->
  </div>
  <div class="buttons">
    
      <input type="submit"
       class="can" value="Cancel" >
      
    
      <input type="submit" class="sub"value="Submit">
    </div>
   
  </div>
  </main>
  </form>
  <style>
    #how{
      margin-right:120px;
    }
  main{
   border:1px solid black;
  
    height: 500px;
   width:520px;
   /* font-family:'sans-serif'; */
   font-family: 'Open Sans', sans-serif;
  padding-top:10px; 
  margin-right:350px;
  margin-bottom: 100px;; 
  /* transform:translate(-50%,-50%); */
  }
  /* .style{
    display: none ;
    color:rgb(0, 166, 255);
  } */
  .tell{
    margin-right:155px;
  }
  #subject{
    height:150px;
    width:450px;
    margin-right: 20px;
   
  
    
  }
  .beta{
    margin-left: 50px;
   
  }
  .buttons{
    display:flex;
    font-size: 60px;
  font-family:'sans-serif';
  /* margin-top:1px; */
  
  
  
  }
  .etoil{
    display: flex;
    gap:30px;
  }
  #close{
    height:60px;
      width:60px;
      line-height: 40px;
      cursor: pointer;
      margin-top:10px;
      font-size: 30px;
      margin-left:200px;
  
  }
  .can{
    margin-right:5px;
    font-size: 15px;
    padding-bottom:20px;
  }
  .sub{
    font-size: 15px;
  }
  #file{
    display: none;
  
  }
  .file-trigger{
    color:rgb(0, 166, 255);
    margin-top:5px;
  }
  #usrform{
    margin-top:10px;
    font-size: 20px;
   
  }
  input[type=submit] {
   /* display:inline; */
    color:rgb(70, 68, 68);
    background-color: white;
    padding: 12px 50px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top:30px;
    margin-left: 50px;
  
  }
  
  input[type=submit]:hover {
    background-color: rgb(0, 162, 255);
  }
  .cam{
    height: 30px;
    width:30px;
    margin-left: 30px;                                                                  
  
  }
  /* #add{padding-top: 5px;
  
  } */
  .ca{
    display: flex;
  gap:5px;}
  .popup-container .popup input[type="radio"]{
      display: none;
  }
  
  .popup-container .popup .icons{
      padding:10px;
  }
  .popup-container{
  margin-left:350px;
  }
  
  .popup-container .popup .icons label{
      font-size: 50px;
      cursor: pointer;
   
  }
  
  /* .popup-container .popup .icons:hover label{
    font-size: 60px ;
  } */
  
  
  .popup-container .popup #btn1:checked ~ .icons label:nth-child(1),
  .popup-container .popup #btn2:checked ~ .icons label:nth-child(2),
  .popup-container .popup #btn3:checked ~ .icons label:nth-child(3),
  .popup-container .popup #btn4:checked ~ .icons label:nth-child(4),
  .popup-container .popup #btn5:checked ~ .icons label:nth-child(5),
  .popup-container .popup .icons label:hover{
      opacity: 1;
      font-size: 70px;
  }
  
   /* .popup-container{
      display:flex;
  }  */
  
  .popup-container .popup #close:active{
      /* transform:translate(50px); */
      clear: both;
      display: block;
      height: 27px;
      position: absolute;
      right: 6px;
      text-indent: -9999px;
      top: 5px;
      width: 26px;}  
      /* .icons{
        margin-right:100px;
      } */
  
  </style>