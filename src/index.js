const init = () => {
    //
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //event.target.children[1].value
    //console.log(event);

    // Access Input Value Directly
    const input = document.querySelector("input#searchByID");
    //console.log(input.value);

    //Fetch Data Based on User Input
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())

      //Display Fetched Data on the Page
      .then(data => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
