function letsgo() {
  let username = document.getElementById("input").value;
  console.log(username);
  fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Assuming 'submission' is a property of the returned 'data' object
      const submission = data.recentSubmissions;
      let impdata = submission.map((each) => each.title);
      console.log(impdata);

      // Create and append the list items inside this block
      let list = document.getElementById("add");
      for (let i = 0; i < impdata.length && i < 20; i++) {
        let li = document.createElement("li");
        li.textContent = impdata[i];
        list.append(li);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
