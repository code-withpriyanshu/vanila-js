function letsgo() {
  let username = document.getElementById("input").value;
  let list = document.getElementById("add");
  list.innerHTML = "";
  if (username === "nooneknowss" ) {
    let warning = document.createElement("warning");
    warning.innerHTML = `<video autoplay controls width = "400">
              <source src="WhatsApp Video 2024-06-23 at 17.11.52_1fc0f8e8.mp4" type="video/mp4">
          </video>`;
    list.append(warning);
  } 
  else if (username === "codermal_") {
    let warning = document.createElement("warning");
    warning.innerHTML = `<video autoplay controls width = "800">
              <source src="Untitled video - Made with Clipchamp (4).mp4">
          </video>`;
    list.append(warning);
  } else if
  (username === "mukulkrit14") {
    let warning = document.createElement("warning");
    warning.innerHTML = `<video autoplay controls width = "400">
              <source src="ias.mp4">
          </video>`;
    list.append(warning);
  } else {
    fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const submission = data.recentSubmissions;
        let impdata = submission.map((each) => each.titleSlug);
        console.log(impdata);
        let finalData = [];
        impdata.forEach(function (ele) {
          if (!finalData.includes(ele)) {
            finalData.push(ele);
          }
        });
        for (let i = 0; i < finalData.length && i < 20; i++) {
          let li = document.createElement("li");
          li.innerHTML = `<a href="https://leetcode.com/problems/${finalData[i]}/description/">${finalData[i]}</a>`; // appending links
          list.append(li);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}
