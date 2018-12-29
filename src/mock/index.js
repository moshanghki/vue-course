import Mock from 'mockjs'
import { getUserInfo } from './response/getuserInfo'

Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)

Mock.setup({
  timeout: 100
})

export default Mock
