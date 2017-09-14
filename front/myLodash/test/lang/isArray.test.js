/* eslint-disable no-undef */
import isArray from '../../src/lang/isArray'

function isArrayTest(){
  test('isArrayFunction', ()=>{
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(document.body.children)).toBe(false)
    expect(isArray('abc')).toBe(false)
  })
}

export default isArrayTest

