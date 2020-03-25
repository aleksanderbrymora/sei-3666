$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    const bookTitle = $('#book_title').val();
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;

    $.ajax(url).done(function (data) {
      const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
      $('#cover').attr('src', cover);
    }).fail(function () {
      alert('Something bad happen');
    });

  });
});
