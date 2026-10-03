import assert from "node:assert";
import { describe } from "node:test";


describe('test menu week number rotation', function(){
    it('Should rotate from 1 to 8', function(){

        const START_WEEK = 37
        const NUMBER_OF_WEEK_MENUS = 8

        let yearWeeks = 51
        let deltaWeeks = []

        for (let i = START_WEEK; i <= yearWeeks; i++){
            deltaWeeks.push(i - START_WEEK)
        }

        console.log(`Generated deltaWeeks ${deltaWeeks}`)
        let numberDeltaWeeks = deltaWeeks.length;
        let firstExpectedModuleValue = (deltaWeeks[0] + 1) % NUMBER_OF_WEEK_MENUS
        
        assert.equal(firstExpectedModuleValue, 1);
        for (let i = 0; i < numberDeltaWeeks; i++){
            let expectedModuleValue = i % NUMBER_OF_WEEK_MENUS
            let currentModuleValue = deltaWeeks[i] % NUMBER_OF_WEEK_MENUS;
            assert.equal(expectedModuleValue, currentModuleValue)
        }
        


    })
})