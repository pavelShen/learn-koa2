/* eslint-disable no-undef */
import deepClone from '../js/deepClone'

let obj1 = {
  a:1,
  b:{
    c:'d'
  }
}

function deepCloneTest(){
  test('clone', ()=>{
    let result = deepClone(obj1)
    expect(result).toEqual(obj1)
  })
  test('deepClone',()=>{
    let result = deepClone(obj1)
    result.b.c = 'ff'
    expect(result).not.toEqual(obj1)
  })
}

deepCloneTest()