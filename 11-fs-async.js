const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Hello here is the result : ${first} , ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('Done with this task')
            }
        )
    })
})
console.log('Starting next task')

/**
 * Dans cette exemple la longue fonction a exécutée n'est pas bloquante
 * Le code continu a s'executer avant que la fonction soit terminée
 */