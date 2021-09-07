// const fetch = require('node-fetch')
// const json = require('json')
// async function tagOne(tag1) {
//     try {
//         const result = await fetch('https://api.quotable.io/random?tags=${tag1}')
//         const data = await result.json()
//         console.log(data)
//         const resultToReturn = [data.content, data.author]
//         return resultToReturn
//     } catch (error) {
//         console.log(error)
//     }
// }

// async function tagTwo(tag1, tag2) {
//     try {
//         const result = await fetch('https://api.quotable.io/random?tags=${tag1},${tag2}')
//         const data = await result.json()

//         const resultToReturn = [data.content, data.author]
//         return resultToReturn
//     } catch (error) {
//         console.log(error)
//     }
// }

// module.exports = {
//     name: 'randomquote',
//     aliases: ['rano'],
//     description: 'Roll to win!',
//     cooldown: 2,
//     guildOnly: true,
//     args: true,
//     usage: false,
//     // eslint-disable-next-line no-unused-vars
//     execute(msg, args) {
//         if (args.length == 1) {
//             tagOne(args[0])
//                 .then((result) => msg.reply(result))
//                 .catch((error) => msg.reply(error))
//         } else if (args.length == 2) {
//             console.log(args.length)
//             tagTwo(args[0], args[1])
//                 .then((result) => msg.reply(result))
//                 .catch((error) => msg.reply(error))
//         } else {
//             return msg.reply('previse ili premalo argumenata')
//         }
//     },
// }