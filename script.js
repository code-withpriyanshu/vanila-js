function letsgo() {
  let username = document.getElementById("input").value;
  let list = document.getElementById("add");
  list.innerHTML = "";
  if (username === "nooneknowss" || username === "codermal_") {
    let warning = document.createElement("warning");
    warning.innerHTML = `<img src="jis-raah-pe-tum-chal-rahe-ho-beta-ek-din-buri-tarah-fasoge-gandhiji.gif" alt="Sharam Kar le bhai" height = "500" width = "500">`;
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
