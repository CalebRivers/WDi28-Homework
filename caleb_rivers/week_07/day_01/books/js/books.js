console.log("Connected");

const fetchbook = function () {
  const xhr = new XMLHttpRequest();
  const title = document.getElementById('input').value;
  const url = "https://www.googleapis.com/books/v1/volumes?q=title:" + title;

  console.log(url)

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const info = JSON.parse(xhr.responseText);
    // debugger;
    const img = document.createElement('img');
    img.src = info.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild( img );
  }

  xhr.open("GET", url);
  xhr.send();
}

const click = document.getElementById('clicker');
click.addEventListener("click", fetchbook)
