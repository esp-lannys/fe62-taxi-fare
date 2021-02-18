function calculate() {
    var totalCost = 0;
    var distance = document.getElementById('distance').value * 1;
    var delayTime = document.getElementById('delayTime').value;
    var message = "";
    if (distance < 1) {
        message = "Dưới 1km thì đi bộ, ai rảnh mà chở má???";
        if (delayTime > 0) {
            message += " Rồi còn bắt chờ nữa, phải con người hông dị ???";            
        }
        document.getElementById('xuatTien').innerHTML = message;
    } else if (distance < 19) {
        if (getCarType('grabCar') === true) { 
            totalCost = 8000 + (distance - 1)*7500 + getDelayFee(delayTime);
        }
        if (getCarType('grabSUV') === true) { 
            totalCost = 9000 + (distance - 1)*8500 + getDelayFee(delayTime);
        }
        if (getCarType('grabBlack') === true) { 
            totalCost = 10000 + (distance - 1)*9500 + getDelayFee(delayTime);
        }
        message = " " + totalCost + " VND";
    } else {
        if (getCarType('grabCar') === true) { 
            totalCost = 8000 + (18*7500) + (distance - 19)*7000 + getDelayFee(delayTime);
        }
        if (getCarType('grabSUV') === true) { 
            totalCost = 9000 + (18*8500) + (distance - 19)*8000 + getDelayFee(delayTime);
        }
        if (getCarType('grabBlack') === true) { 
            totalCost = 10000 + (18*9500) + (distance - 19)*9000 + getDelayFee(delayTime);
        }
        message = " " + totalCost + " VND";
    }
    document.getElementById('divThanhTien').style.display = "block";
    console.log(totalCost);
    document.getElementById('xuatTien').innerHTML = message;
}

function getDelayFee(waitTime) {
    var price = 0;
    if (waitTime < 0) {
        return 0;
    }
    for (var i = waitTime; i >= 3; i--) {
        if (i % 3 === 0) {
            if (getCarType('grabCar') === true) {
                price += 2000;
            }
            if (getCarType('grabSUV') === true) {
                price += 3000;
            }
            if (getCarType('grabBlack') === true) {
                price += 3500;
            }
        }
    }
    return price;
}

function getCarType(id) {
    return document.getElementById(id).checked;
}