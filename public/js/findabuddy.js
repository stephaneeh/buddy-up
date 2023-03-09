// DESCRIPTION: ASYNC FNC to create a find a buddy request
const submitBtnHandler = async (event) => {
  event.preventDefault();

  const game = document.querySelector("#game-signup").value.trim();
  const console = document.querySelector("#console-signup").value.trim();
  const dateTime = document.querySelector("#meeting-time").value.trim();

  if (console && game && dateTime) {
    const response = await fetch(`/find-a-buddy`, {
      method: "GET",
      body: JSON.stringify({ game, console }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(response);
      // document.location.replace("/find-a-buddy");
    } else {
      alert("Failed to find any buddies for this time.");
    }
  } else {
    alert("Please ensure you have all the sections.");
  }
};

// Event Listeners:
document.querySelector(".btn").addEventListener("submit", submitBtnHandler);
