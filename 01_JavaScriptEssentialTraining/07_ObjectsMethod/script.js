const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: 'gray',
    pocketNum: 15,
    strapLength: {
        left: 26,
        right:26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStarpLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },

};

console.log(backpack)

console.log('Left before:',backpack.strapLength.left)

backpack.newStarpLength (10, 15)

console.log('Left after:',backpack.strapLength.left)
