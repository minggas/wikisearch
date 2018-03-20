$(document).ready(function() {
    const $items = $("#items");
    const $inputField = $("#input");
    const $searchBtn = $("#searchButton");
  
    //Call the Wiki API, get results and render on the page
    function getResult() {
      let url = `https://en.wikipedia.org//w/api.php?action=query&format=json&list=search&continue=&srsearch=${$inputField.val()}&srwhat=text&callback=?`;
      $.getJSON(url, response => {
        response.query.search.forEach(item => {
          $items.append(
            `<a target="_blank" href="http://en.wikipedia.org/?curid=${
              item.pageid
            }"><h3>${item.title}</h3></a><p>${item.snippet}</p><hr>`
          );
        });
      });
    }
  
    //Function to call the results of the search
    function showResult() {
      getResult();
      return false;
    }
    //Call function on submit
    $searchBtn.click(showResult);
  });
  