import { AxiosRequestConfig } from './type'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  xhr(config)
}
export default axios
