var firstName = document.getElementsByClassName("first")[0],
    first;
localStorage.setItem("first", "im first");

first = localStorage.getItem("first");

firstName.innerHTML = first;
