const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')


async function main (){
 await Restaurant.sync({ force: true })
 await Menu.sync({ force: true })


}

main()