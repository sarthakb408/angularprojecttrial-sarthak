let xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (this.status === 200) {
        console.log(this.responseText);
    }else{
        console.warn("Not receive 200 from response");
    }
};

xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.send();