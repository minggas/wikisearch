/* jshint esversion:6 */
$(document).ready(function () {
  const $items = $("#items");
  const $searchBtn = $("#form");

  //Call the Wiki API, get results and render on the page
  function getResult(e) {
    e.preventDefault();
    $items.empty();
    const search = e.target[0].value;
    let url = `https://en.wikipedia.org//w/api.php?action=query&format=json&list=search&continue=&srsearch=${search}&srwhat=text&callback=?`;
    $.getJSON(url, response => {
      response.query.search.forEach(item => {
        $items.append(
          `<dl class="item">
            <a target="_blank" href="http://en.wikipedia.org/?curid=${item.pageid}">
              <dt>${item.title}</dt>
              <dd>${item.snippet}</dd>
            </a>
          </dl>`
        );
      });
    });
    this.reset();
  }

  //Call function on submit
  $searchBtn.submit(getResult);
});