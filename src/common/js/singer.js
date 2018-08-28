/*
* @Author: xiaoc
* @Date:   2018-08-05 16:23:45
* @Last Modified by:   xiaoc
* @Last Modified time: 2018-08-05 16:24:42
*/
export default class Singer {
	constructor({id, name}) {
		this.id = id;
		this.name = name;
		this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
	}
}