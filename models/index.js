const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

/* In ./models/index.js, after the requires, but before the module.exports, associate the 2 models:

Multiple menus can be added to a Restaurant.

Add a third test to account for the association

Association: Menu Items

Back in ./models/index.js Associate the Menu and Item models

Multiple items can be added to a menu.

Items can be added to many menus


Eager Loading

Add a test or two that eager loads the data.

For example, find all Menus, and include their Item model
*/


Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)


Item.belongsToMany(Menu, {through: 'menu_item'})
Menu.belongsToMany(Item, {through: 'menu_item'})



module.exports = { Restaurant, Menu, Item }
