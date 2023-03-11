const makeRequestBtn = async (e) => {
  e.preventDefault();

  const game = document.querySelector("#game-request").value.trim();
  const console = document.querySelector("#console-request").value.trim();
  const dateTime = document.querySelector("#meeting-time").value.trim();

  if (console && game && dateTime) {
    const response = await fetch(`/request`, {
      method: "GET",
      body: JSON.stringify({ game, console }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
