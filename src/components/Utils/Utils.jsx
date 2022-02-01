function addToLS(key, value) {
  localStorage.setItem(key, value);
}

function getLS(key = "todos") {
    return  localStorage.getItem(key);
}

function clearLS() {
  localStorage.clear();
}



export { addToLS, getLS, clearLS, };
