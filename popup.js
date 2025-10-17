function performSearch(site) {
  const input = document.querySelector(`.search-input[data-site="${site}"]`);
  const query = input.value.trim();

  console.log("Performing search:", site, query);

  if (query) {
    let url = "";

    switch (site) {
      case "google":
        url = `https://www.google.com/search?q=${encodeURIComponent(
          query
        )}&tbs=cdr:1,cd_max:11/30/2022`;
        break;
      case "reddit":
        url = `https://www.google.com/search?q=site:reddit.com+${encodeURIComponent(
          query
        )}&tbs=cdr:1,cd_max:11/30/2022`;
        break;
      case "quora":
        url = `https://www.google.com/search?q=site:quora.com+${encodeURIComponent(
          query
        )}&tbs=cdr:1,cd_max:11/30/2022`;
        break;
      case "stackexchange":
        url = `https://www.google.com/search?q=site:stackexchange.com+${encodeURIComponent(
          query
        )}&tbs=cdr:1,cd_max:11/30/2022`;
        break;
      case "mumsnet":
        url = `https://www.google.com/search?q=site:mumsnet.com+${encodeURIComponent(
          query
        )}&tbs=cdr:1,cd_max:11/30/2022`;
        break;
      case "pinterest":
        url = `https://www.google.com/search?q=site:pinterest.com+${encodeURIComponent(
          query
        )}&tbs=cdr:1,cd_max:11/30/2022`;
        break;
    }

    console.log("Opening URL:", url);

    if (url) {
      browser.tabs.create({ url: url });
    }
  }
}

console.log("Script loaded");

const inputs = document.querySelectorAll(".search-input");
console.log("Found inputs:", inputs.length);

inputs.forEach((input) => {
  input.addEventListener("keypress", (e) => {
    console.log("Key pressed:", e.key);
    if (e.key === "Enter") {
      performSearch(input.dataset.site);
    }
  });
});

const buttons = document.querySelectorAll(".go-btn");
console.log("Found buttons:", buttons.length);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button clicked:", button.dataset.site);
    performSearch(button.dataset.site);
  });
});
