const requestBtnHandler = async (event) => {
  event.preventDefault();

  const console = document.querySelector("#console-request").value.trim();
  const game = document.querySelector("#game-request").value.trim();
  const dateTime = document.querySelector("#meeting-time").value.trim();

  if (console && game && dateTime) {
    const response = await fetch(`/request`, {
      method: "POST",
      body: JSON.stringify({ game, console, dateTime }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("response ok");
      // console.log(response);
      document.location.reload;
    } else {
      alert("Failed to create request - please try again.");
    }
  } else {
    alert("Please ensure you have all the sections.");
  }
};

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", requestBtnHandler);
