import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  console.log('mock getUserInfo:')
  const template = {
    'name|2-4': 'm-haopeng',
    'gender|3': 'fmale',
    'age|+2': 18,
    email: Random.email(),
    ip: Random.ip(),
    img: Random.image()
  }
  let arr = []
  let i = 3
  while (i--) {
    arr.push(template)
  }
  return Mock.mock(arr)
}
