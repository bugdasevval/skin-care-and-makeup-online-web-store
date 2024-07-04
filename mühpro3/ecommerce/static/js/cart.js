var user = '{{ request.user|default_if_none:"AnonymousUser" }}';
var csrftoken = getToken('csrftoken');



var updateBtns = document.getElementsByClassName('update-cart')

    for (var i = 0; i < updateBtns.length; i++) {
        updateBtns[i].addEventListener('click', function(){
            var productId = this.dataset.product
            var action = this.dataset.action
            console.log('productId:', productId, 'Action:', action)
            console.log('USER:', user)

            if (user === 'AnonymousUser') {
                console.log('Not logged in')
            } else {
                updateUserOrder(productId, action)
            }
        })
    }

    function updateUserOrder(productId, action) {
        console.log('User is authenticated, sending data...')

        var url = '/update_item/'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({'productId': productId, 'action': action})
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log('data:', data)
            location.reload()
        })
    }

function addCookieItem(productId, action){
    console.log('Not logged in')

    cart = {
        1:{}
    }

}




function getToken(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

document.addEventListener("DOMContentLoaded", function() {
    var cartItemsElement = document.getElementById('cart-total');
    var cartItems = parseInt(cartItemsElement.textContent);
    var cartIcon = document.getElementById('cart-icon');
    
    // Örnek bir tıklama işlevi
    cartIcon.addEventListener('click', function() {
        alert('Sepete Git');
    });
});
