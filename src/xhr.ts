import { AxiosRequestConfig } from './type'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, method = 'get', url } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true) // 默认异步，设置为true,method要转为大写
  request.send(data)
}
