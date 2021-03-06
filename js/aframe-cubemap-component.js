! function(e) {
    function t(a) {
        if (r[a]) return r[a].exports;
        var n = r[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.p = "", t(0)
}([function(e, t) {
    if ("undefined" == typeof AFRAME) throw new Error("Component attempted to register before AFRAME was available.");
    AFRAME.registerComponent("cubemap", {
        schema: {
            folder: {
                type: "string"
            },
            edgeLength: {
                type: "int",
                "default": 5e3
            }
        },
        update: function(e) {
            var t = this.el,
                r = this.data,
                a = r.folder,
                n = ["posx.jpg", "negx.jpg", "posy.jpg", "negy.jpg", "posz.jpg", "negz.jpg"],
                o = new THREE.CubeTextureLoader;
            o.setPath(a);
            var d = o.load(n);
            d.format = THREE.RGBFormat;
            var p = THREE.ShaderLib.cube,
                i = new THREE.ShaderMaterial({
                    fragmentShader: p.fragmentShader,
                    vertexShader: p.vertexShader,
                    uniforms: p.uniforms,
                    depthWrite: !1,
                    side: THREE.BackSide
                }),
                s = i.clone();
            s.uniforms.tCube.value = d;
            var u = r.edgeLength,
                f = new THREE.CubeGeometry(u, u, u);
            t.setObject3D("cubemap", new THREE.Mesh(f, s))
        },
        remove: function() {
            this.el.removeObject3D("cubemap")
        }
    })
}]);