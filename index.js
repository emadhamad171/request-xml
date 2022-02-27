let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://sberbank.ru/');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function () {
    if (xhr.status != 200) {
        xhr.send()
    } else {
        xhr.send()
    }
};
