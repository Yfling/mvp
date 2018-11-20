import blockConf from '../../confs/block-conf'

export default class BaseBlock {
    constructor (type) {
        this.type = type
        this.height = blockConf.height;
        this.width = blockConf.width;
    }
}
