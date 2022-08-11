const {db} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        const testRestaurant = await Restaurant.create(seedRestaurant[0])
        expect(testRestaurant.name).toEqual(seedRestaurant[0].name)
    });

    test('can create a Menu', async () => {
       const testMenu = await Menu.create(seedMenu[0])
        expect(testMenu.title).toEqual(seedMenu[0].title)
    });

    test('can find Restaurants', async () => {
        const findRestaurant = await Restaurant.findAll()
        expect(findRestaurant.length).toEqual(1)
        expect(findRestaurant[0].name).toEqual(seedRestaurant[0].name)
    });

    test('can find Menus', async () => {
    
        const findMenu = await Menu.findAll()
        expect(findMenu.length).toEqual(1)
        expect(findMenu[0].title).toEqual(seedMenu[0].title)
      
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        const findRestaurant2 = await Restaurant.findAll()
        const deletedRestaurant = await findRestaurant2[0].destroy()
    
        expect(deletedRestaurant.name).toEqual(findRestaurant2[0].name)
    });

    test('Restaurant can have many Menus', async () => {
        await db.sync({ force: true });
        
        let newRestaurant =  await Restaurant.create({
        name: 'Wagamamas',
        location: 'Birmingham',
        cuisine: 'Japanese'
         })

        let newMenu = await Menu.create({
        title: 'Gyoza'
         })

        await newRestaurant.addMenu(newMenu);

        const menus = await newRestaurant.getMenus()

        expect(menus[0] instanceof Menu ).toBe(true)
        expect(menus[0] instanceof Menu).toBeTruthy
        exepct(menus[0].title).toEqual(newMenu[0].title)
        expect(menus.length).toBe(1)

    })
})