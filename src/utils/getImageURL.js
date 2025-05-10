// function getImgUrl (){
//     return new URL (`../assets/products/${name}`,import.meta.url).href
// }
//  export {getImgUrl}

function getImgUrl(name) {
    return new URL(`../assets/products/${name}`, import.meta.url).href
 }

 export {getImgUrl};