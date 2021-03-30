const crud = require('./index.js')
const assert = require('assert')

describe('Crud', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Read', () => {

        let item = crud.read(1)
        let expected = {id: 1, name: "John", lastname: "Doe"}

        assert.strictEqual(item.id, expected.id)
        assert.strictEqual(item.name, expected.name)
        assert.strictEqual(item.lastname, expected.lastname)
    })

    /**
     * TEST DESCRIPTION
     */
    it('create', () => {
        let item = crud.create({name: "John", lastname: "Rambo"})
        let expected = {id: 3, name: "John", lastname: "Rambo"}

        assert.strictEqual(item.id, expected.id)
        assert.strictEqual(item.name, expected.name)
        assert.strictEqual(item.lastname, expected.lastname)
    })

    /**
     * TEST DESCRIPTION
     */
    it('update', () => {
        let item = crud.update(2, {name: "John", lastname: "Wick"})
        let expected = {id: 2, name: "John", lastname: "Wick"}

        assert.strictEqual(item.id, expected.id)
        assert.strictEqual(item.name, expected.name)
        assert.strictEqual(item.lastname, expected.lastname)
    })

    /**
     * TEST DESCRIPTION
     */
    it('delete ok', () => {
        let result = crud.delete(2)
        assert.strictEqual(result, true)

        let result2 = crud.read(2)
        assert.strictEqual(result2, null)
    })

    /**
     * TEST DESCRIPTION
     */
    it('delete fail', () => {
        let result = crud.delete(56)

        assert.strictEqual(result, false)
    })
})
