var fs= require('fs');

function readFilePromis(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding: 'utf8'}, function(error, data){
            if (error){
                reject(error);
            }
            else{
                resolve(data);
            }
        })
    })
}
// readFilePromis('./song1.txt')
//     .then(function(song1){
//         console.log(song1);
//         return readFilePromis('./song2.txt')
//     })
//     .then(function(song2){
//         console.log(song2);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
Promise.all([
    readFilePromis('song1.txt'),
    readFilePromis('song2.txt')
]).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})
