/*
* @Author: xiaoc
* @Date:   2018-07-28 15:09:20
* @Last Modified by:   xiaoc
* @Last Modified time: 2018-08-05 16:16:53
*/
import originJSONP from 'jsonp'

export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
		 originJSONP(url, option, (err, data) => {
		 	if (!err) {
		 		resolve(data)
		 	} else {
		 		reject(err)
		 	}
		 })
  })
}

function param (data) {
  let url = ''

  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
	url += '&' + k + '=' + encodeURIComponent(value)
  }

	return url ? url.substring(1) : ''
}