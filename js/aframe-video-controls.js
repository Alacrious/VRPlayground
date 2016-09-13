! function(t) {
    function e(a) {
        if (i[a]) return i[a].exports;
        var s = i[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return t[a].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.p = "", e(0)
}([function(t, e) {
    if ("undefined" == typeof AFRAME) throw new Error("Component attempted to register before AFRAME was available.");
    var i = "Double-click outside player to hide or show it.",
        a = "Look+click on play or bar. Space bar and arrows also work.";
    AFRAME.registerComponent("video-controls", {
        schema: {
            src: {
                type: "string"
            },
            size: {
                type: "number",
                "default": 1
            },
            distance: {
                type: "number",
                "default": 2
            },
            backgroundColor: {
                "default": "black"
            },
            barColor: {
                "default": "red"
            },
            textColor: {
                "default": "yellow"
            },
            infoTextBottom: {
                "default": i
            },
            infoTextTop: {
                "default": a
            },
            infoTextFont: {
                "default": "35px Helvetica Neue"
            },
            statusTextFont: {
                "default": "30px Helvetica Neue"
            },
            timeTextFont: {
                "default": "70px Helvetica Neue"
            }
        },
        position_time_from_steps: function() {
            var t = this.current_step / this.bar_steps;
            this.video_el.readyState > 0 && (this.video_el.currentTime = t * this.video_el.duration)
        },
        position_control_from_camera: function() {
            for (var t = this, e = document.querySelectorAll("a-camera"), i = 0; i < e.length; i++) {
                var a = e[i];
                if (a.getComputedAttribute("camera").active) {
                    var s = a.object3D.getWorldDirection().projectOnPlane(new THREE.Vector3(0, 1, 0)).setLength(t.data.distance);
                    t.el.object3D.position.copy(a.object3D.getWorldPosition().sub(s)), t.el.object3D.lookAt(a.object3D.getWorldPosition())
                }
            }
        },
        init: function() {
            var t = this;
            this.bar_steps = 10, this.current_step = 0, this.el.setAttribute("visible", !0), this.video_selector = this.data.src, this.video_el = document.querySelector(this.video_selector), t.play_image_src = document.getElementById("video-play-image") ? "#video-play-image" : "http://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_10/v1471016296/play_wvmogo.png", t.pause_image_src = document.getElementById("video-pause-image") ? "#video-pause-image" : "http://res.cloudinary.com/dxbh0pppv/image/upload/c_scale,h_512,q_25/v1471016296/pause_ndega5.png", this.play_image = document.createElement("a-image"), this.video_el.paused ? this.play_image.setAttribute("src", t.play_image_src) : this.play_image.setAttribute("src", t.pause_image_src), this.video_el.addEventListener("ended", function() {
                t.play_image.setAttribute("src", t.play_image_src)
            }), this.video_el.addEventListener("pause", function() {
                t.play_image.setAttribute("src", t.play_image_src)
            }), this.video_el.addEventListener("playing", function() {
                t.play_image.setAttribute("src", t.pause_image_src)
            }), this.bar_canvas = document.createElement("canvas"), this.bar_canvas.setAttribute("id", "video_player_canvas"), this.bar_canvas.width = 1024, this.bar_canvas.height = 256, this.bar_canvas.style.display = "none", this.context = this.bar_canvas.getContext("2d"), this.texture = new THREE.Texture(this.bar_canvas), this.play_image.addEventListener("click", function(e) {
                t.video_el.paused ? (this.setAttribute("src", t.pause_image_src), t.video_el.play()) : (this.setAttribute("src", t.play_image_src), t.video_el.pause()), e.stopPropagation(), e.preventDefault()
            }), window.addEventListener("keyup", function(e) {
                switch (e.keyCode) {
                    case 32:
                        t.play_image.dispatchEvent(new Event("click"));
                        break;
                    case 37:
                        t.current_step = 0, t.position_time_from_steps();
                        break;
                    case 39:
                        t.current_step = t.bar_steps, t.position_time_from_steps();
                        break;
                    case 38:
                        t.current_step = t.current_step < t.bar_steps ? t.current_step + 1 : t.current_step, t.position_time_from_steps();
                        break;
                    case 40:
                        t.current_step = t.current_step > 0 ? t.current_step - 1 : t.current_step, t.position_time_from_steps()
                }
            }, !1), this.bar = document.createElement("a-plane"), this.bar.setAttribute("color", "#000"), this.bar.addEventListener("click", function(e) {
                var i = document.querySelector("a-cursor").components.raycaster.raycaster.intersectObject(this.object3D, !0)[0].point,
                    a = this.object3D.worldToLocal(i).x,
                    s = a / t.data.size + .5;
                t.current_step = Math.round(s * t.bar_steps), t.video_el.readyState > 0 && (t.video_el.currentTime = s * t.video_el.duration), e.stopPropagation(), e.preventDefault()
            }), this.el.appendChild(this.bar_canvas), this.el.appendChild(this.play_image), this.el.appendChild(this.bar), this.el.sceneEl.addEventListener("loaded", function() {
                t.position_control_from_camera(), this.addEventListener("dblclick", function() {
                    var e = document.querySelector("a-cursor").components.raycaster.raycaster;
                    0 == e.intersectObject(t.el.object3D, !0).length && (t.el.getAttribute("visible") ? t.el.setAttribute("visible", !1) : (t.el.setAttribute("visible", !0), t.position_control_from_camera()))
                })
            })
        },
        update: function(t) {
            this.position_control_from_camera(), this.bar.setAttribute("height", this.data.size / 4), this.bar.setAttribute("width", this.data.size), this.bar.setAttribute("position", "0.0 0.0 0"), this.play_image.setAttribute("height", this.data.size / 4), this.play_image.setAttribute("width", this.data.size / 4), this.play_image.setAttribute("position", -this.data.size / 2 * 1.4 + " 0 0")
        },
        remove: function() {},
        tick: function(t) {
            if ("undefined" == typeof this.last_time || t - this.last_time > 250) {
                if (this.video_el.readyState > 0) {
                    var e = Math.floor(this.video_el.currentTime / 60),
                        i = Math.floor(this.video_el.currentTime % 60);
                    e = 10 > e ? "0" + e : e, i = 10 > i ? "0" + i : i;
                    var a = Math.floor(this.video_el.duration / 60),
                        s = Math.floor(this.video_el.duration % 60);
                    a = 10 > a ? "0" + a : a, s = 10 > s ? "0" + s : s;
                    var r = e + ":" + i + " / " + a + ":" + s,
                        o = this.bar_canvas.width / this.video_el.duration;
                    if (this.video_el.buffered.length > 0) {
                        this.current_step = Math.round(this.video_el.currentTime / this.video_el.duration * this.bar_steps);
                        var n = this.context;
                        if (n.fillStyle = this.data.backgroundColor, n.fillRect(0, 0, this.bar_canvas.width, this.bar_canvas.height), n.font = this.data.timeTextFont, n.fillStyle = "white", n.textAlign = "center", n.fillText(r, this.bar_canvas.width / 2, .65 * this.bar_canvas.height), this.video_el.seeking) n.font = this.data.statusTextFont, n.fillStyle = this.data.textColor, n.textAlign = "end", n.fillText("Seeking", .95 * this.bar_canvas.width, .6 * this.bar_canvas.height);
                        else {
                            var l = this.video_el.buffered.end(this.video_el.buffered.length - 1) / this.video_el.duration * 100;
                            n.font = this.data.statusTextFont, n.fillStyle = this.data.textColor, n.textAlign = "end", n.fillText(l.toFixed(0) + "% loaded", .95 * this.bar_canvas.width, .6 * this.bar_canvas.height)
                        }
                        n.fillStyle = this.data.textColor, n.font = this.data.infoTextFont, n.textAlign = "center", n.fillText(this.data.infoTextTop, this.bar_canvas.width / 2, .8 * this.bar_canvas.height), n.fillText(this.data.infoTextBottom, this.bar_canvas.width / 2, .95 * this.bar_canvas.height);
                        for (var c = 0; c < this.video_el.buffered.length; c++) {
                            var d = this.video_el.buffered.start(c) * o,
                                h = this.video_el.buffered.end(c) * o,
                                _ = h - d;
                            n.fillStyle = "grey", n.fillRect(d, 0, _, this.bar_canvas.height / 3)
                        }
                        n.fillStyle = this.data.barColor, n.fillRect(0, 0, this.video_el.currentTime / this.video_el.duration * this.bar_canvas.width, this.bar_canvas.height / 3)
                    }
                    this.bar.object3D.children.length > 0 && (null === this.bar.object3D.children[0].material.map && (this.bar.object3D.children[0].material = new THREE.MeshBasicMaterial, this.bar.object3D.children[0].material.map = this.texture), this.texture.needsUpdate = !0)
                }
                this.last_time = t
            }
        },
        pause: function() {},
        play: function() {}
    })
}]);