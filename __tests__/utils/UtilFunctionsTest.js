import { getRoundedNumber } from "../../src/utils/getRoundedNumber"
import { separator } from "../../src/utils/separator"
import { sortAscending } from "../../src/utils/sort"
import { testMultipleValues } from "../../src/utils/test/testMultipleValues"
import { getArrayLikeString, stringToArray, stringToNumber } from "../../src/utils/typeCasters"

test("소수점 둘째자리 반올림", ()=>{
    const testValues = [
        {
            param:4.24456,
            expectedValue:4.24
        },
        {
            param:5,
            expectedValue:5
        }
        ,{
            param:4.24711,
            expectedValue:4.25
        }
    ]
    testMultipleValues(testValues, getRoundedNumber)
})

test("1000원 단위 쉼표(,) 로 나누기", ()=>{
    const testValues = [
        {
            param:1000,
            expectedValue:"1,000"
        },
        {
            param:10,
            expectedValue:"10"
        }
        ,{
            param:4000000000000,
            expectedValue:"4,000,000,000,000"
        }
    ]
    testMultipleValues(testValues, separator)
})

test("1000원 단위 쉼표(,) 로 나누기", ()=>{
    const testValues = [
        {
            param:1000,
            expectedValue:"1,000"
        },
        {
            param:10,
            expectedValue:"10"
        }
        ,{
            param:4000000000000,
            expectedValue:"4,000,000,000,000"
        }
    ]
    testMultipleValues(testValues, separator)
})

test("오름 차순 정렬", ()=>{
    const testValues = [
        {
            param:[1,2,3,4],
            expectedValue:[1,2,3,4]
        },
        {
            param:[4,3,2,1],
            expectedValue:[1,2,3,4]
        }
        ,{
            param:[5,1,3,4,2,10],
            expectedValue:[1,2,3,4,5,10]
        }
    ]
    testMultipleValues(testValues, sortAscending)
})

describe("타입(형) 변환", ()=>{
    test("문자열 쉼표로 분리해 배열로 만들기", ()=>{
        const testValues = [
            {
                param:"1,2,3,4",
                expectedValue:[1,2,3,4]
            },
            {
                param:"4",
                expectedValue:[4]
            },
            {
                param:"4,3,2",
                expectedValue:[4,3,2]
            },
        ]
        testMultipleValues(testValues, stringToArray)
    })

    test("문자열 을 숫자로 만들기", ()=>{
        const testValues = [
            {
                param:"1",
                expectedValue:1
            },
        ]
        testMultipleValues(testValues, stringToNumber)
    })

    test("배열을 [element, element, element] 과 같은 형식을 가진 문자열 로 만들기", ()=>{
        const testValues = [
            {
                param:[1,2,3,4],
                expectedValue:"[1, 2, 3, 4]"
            },
            {
                param:[10,11,12],
                expectedValue:"[10, 11, 12]"
            },
        ]
        testMultipleValues(testValues, getArrayLikeString)
    })
})