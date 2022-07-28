const {readFileSync, writeFileSync} = require('fs')

console.log('start')
//lecture
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//écriture
writeFileSync(
    './content/result-sync.txt', 
    `Hello here is the result : ${first} , ${second}`,
    {flag: 'a'} //permet de ne pas overider et de garder ce que le fichier contient déja
)
console.log('Done with this task')
console.log('Starting the next one')

//Ce code s'execute de manière synchrone (les instructions à la suite)
//Si plusieurs utilisateurs utilisent l'app en même temps
/*
Et que les taches a executé sont gourmandes
Alors l'utilisateur 2 devra attendre que l'utilisateur 1 ait fini ses taches
Cette façon de faire n'est pas optimale pour une application avec beaucup d'utilisateur
*/