let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           this.state = Math.floor(Math.random() * 2)
           
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if (this.state === 1){
            return "Heads"
           }
           else {
               return "Tails"
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 1){
            image.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F121837382673-0-1%2Fs-l1000.jpg&f=1&nofb=1"
        }
        else {
            image.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.libertygames.co.uk%2Fblog%2Fwp-content%2Fuploads%2F2017%2F05%2Fthe-new-pound-coin-tails.jpg&f=1&nofb=1"
        }
        return image;
    }
};
function display20Flips(){
    for (index = 0; index < 20; index ++){
    coin.flip()
    const flipResult = document.createElement("h1")
    flipResult.append(coin.toString())
    document.body.append(flipResult)
}
}
function display20Images(){
    for (index = 0; index < 20; index ++){
    coin.flip()
    document.body.append(coin.toHTML())
}
}
display20Flips()
display20Images()