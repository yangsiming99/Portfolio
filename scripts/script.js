window.onload = function() {
    picList = ['/images/hillsideWealth/HillSideWealth_1.png', '/images/Other/portfolio.png', '/images/hillsideWealth/Database.png']
    counter = 1
    setInterval(() => {
        if(counter == picList.length-1){
            document.getElementById('headerImg').src = picList[counter]
            counter = 0
        }
        else {
            counter++
        }
    }, 5000)
}