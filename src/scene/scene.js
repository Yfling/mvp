import camera from './camera.js'
class Scene {
    constructor () {
        this.instance = null
    }

    init () {
        this.instance = new THREE.Scene()
        const renderer = this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: canvas,
            preserveDrawingBuffer: true,
        })
        this.camera = camera;
        this.camera.init();

        this.axesHelper = THREE.AxisHelper(100);

        this.instance.add(this.axesHelper);
        this.instance.add(this.camera.instance);
    }

    render () {
        this.renderer.render(this.instance, this.camera.instance);
    }
}

export default new Scene();
