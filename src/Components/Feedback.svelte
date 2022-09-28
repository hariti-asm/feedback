<script>
    export let onSubmit;
    export let onCancel;

    import Cam from "../images/Cam.png";
    import Thanking from "./Thanking.svelte";

    let send = false;

    let rating = undefined;
    let experience = "";
    let attachment = null;
</script>

<form
    id="usrform"
    on:submit|preventDefault={() => {
        send = true;
        onSubmit({ rating, experience, attachment });
    }}
>
    {#if send}
        <Thanking />
    {:else}
        <main class="popup-container">
            <div class="popup">
                <div class="etoil">
                    <p class="beta">BETA Feedback</p>
                    <div
                        id="close"
                        on:click={() => {
                            onCancel();
                        }}
                    >
                        ✖
                    </div>
                </div>
                <h4 id="how">how do you like the new Invoices?</h4>

                <input type="radio" name="buttons" id="btn1" value="1" bind:group={rating} />
                <input type="radio" name="buttons" id="btn2" value="2" bind:group={rating} />
                <input type="radio" name="buttons" id="btn3" value="3" bind:group={rating} />
                <input type="radio" name="buttons" id="btn4" value="4" bind:group={rating} />
                <input type="radio" name="buttons" id="btn5" value="5" bind:group={rating} />

                <div class="icons">
                    <label for="btn1">🙁</label>
                    <label for="btn2">😐</label>
                    <label for="btn3">😊</label>
                    <label for="btn4">😀</label>
                    <label for="btn5">😍</label>
                </div>

                <label for="experience" class="tell">Tell us about your experience:</label>
                <textarea
                    id="experience"
                    name="experience"
                    maxlength="1000"
                    placeholder="1000"
                    bind:value={experience}
                />
                <div class="ca">
                    <img src={Cam} alt="" class="cam" />
                    <input type="file" id="file" accept="image/*" bind:value={attachment}/>
                    <label for="file" class="file-trigger">Add screenshot</label>
                </div>
                <div class="buttons">
                    <input type="submit" class="can" value="Cancel" on:click|preventDefault={onCancel} />

                    <input type="submit" class="sub" value="Submit" />
                </div>
            </div>
        </main>
    {/if}
</form>

<style>
    #how {
        margin-right: 120px;
    }
    main {
        border: 1px solid black;

        height: 500px;
        width: 520px;
        /* font-family:'sans-serif'; */
        font-family: "Open Sans", sans-serif;
        padding-top: 10px;
        margin-right: 350px;
        margin-bottom: 100px;
        /* transform:translate(-50%,-50%); */
    }
    /* .style{
    display: none ;
    color:rgb(0, 166, 255);
  } */
    .tell {
        margin-right: 155px;
    }
    #experience {
        height: 150px;
        width: 450px;
        margin-right: 20px;
    }
    .beta {
        margin-left: 50px;
    }
    .buttons {
        display: flex;
        font-size: 60px;
        font-family: "sans-serif";
        /* margin-top:1px; */
    }
    .etoil {
        display: flex;
        gap: 30px;
    }
    #close {
        height: 60px;
        width: 60px;
        line-height: 40px;
        cursor: pointer;
        margin-top: 10px;
        font-size: 30px;
        margin-left: 200px;
    }
    .can {
        margin-right: 5px;
        font-size: 15px;
        padding-bottom: 20px;
    }
    .sub {
        font-size: 15px;
    }
    #file {
        display: none;
    }
    .file-trigger {
        color: rgb(0, 166, 255);
        margin-top: 5px;
    }
    #usrform {
        margin-top: 10px;
        font-size: 20px;
    }
    input[type="submit"] {
        /* display:inline; */
        color: rgb(70, 68, 68);
        background-color: white;
        padding: 12px 50px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 30px;
        margin-left: 50px;
    }

    input[type="submit"]:hover {
        background-color: rgb(0, 162, 255);
    }
    .cam {
        height: 30px;
        width: 30px;
        margin-left: 30px;
    }
    /* #add{padding-top: 5px;

  } */
    .ca {
        display: flex;
        gap: 5px;
    }
    .popup-container .popup input[type="radio"] {
        display: none;
    }

    .popup-container .popup .icons {
        padding: 10px;
    }
    .popup-container {
        margin: auto;
    }

    .popup-container .popup .icons label {
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
    .popup-container .popup .icons label:hover {
        opacity: 1;
        font-size: 70px;
    }

    /* .popup-container{
      display:flex;
  }  */

    .popup-container .popup #close:active {
        display: block;
        height: 27px;
        /* position: absolute; */
        right: 6px;
        text-indent: -9999px;
        /* top: 5px; */
        width: 26px;
    }
</style>
