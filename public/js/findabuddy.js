console.log("hello - inside findabuddy.js"); //used for debugging

//FIXME: data being sent to handlebars is not clear. Need to confirm this and update handlebars file.
// DESCRIPTION: ASYNC FNC to create a find a buddy request
const submitBtnHandler = async (event) => {
  event.preventDefault();
  console.log("inside submitBtnHandler"); //used for debugging

  const game = document.querySelector("#game-signup").value;
  console.log(game); //used for debugging
  const consoledb = document.querySelector("#console-signup").value;
  console.log(consoledb); //used for debugging

  if (consoledb && game) {
    const response = await fetch(`/find-a-buddy`, {
      method: "POST",
      body: JSON.stringify({ game, consoledb }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("response ok");
      // console.log(response);
      document.location.reload; //not sure reload is the best solution. 
    } else {
      alert("Failed to find any buddies for this time.");
    }
  } else {
    alert("Please ensure you have all the sections.");
  }
};

// Event Listeners:

// document.querySelector(".btn").addEventListener("submit", submitBtnHandler);

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", submitBtnHandler);
