import axios from 'axios'

export class HttpProvider {
  post(url: string, body: any, headers: any): Promise<any> {
    return axios.post(url, body, { headers })
  }
}
