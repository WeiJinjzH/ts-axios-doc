import { AxiosRequestConfig } from './type'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, method = 'get', url, headers } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true) // 默认异步，设置为true,method要转为大写
  request.send(data)
  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
}
