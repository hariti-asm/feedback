<script>
    import Feedback from "./Components/Feedback.svelte";
     import Than from "./Components/Th.svelte"
    import LoginForm from "./Components/LoginForm.svelte"
    let canceled = false;
  </script>
  <Than/>
 <div class="container">
  <LoginForm />

</div>

    
  <!-- {#if !canceled}
    <Feedback
      onSubmit={(data) => console.log("Feedback: ", data)}
      onCancel={() => {
        console.log("cancel");
        canceled = true;
      }}
    />
  {/if}
   -->
   <h1>hii</h1>
  <style>
    /* .container{
    display:flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
    width:100%;
} */

  </style>
  