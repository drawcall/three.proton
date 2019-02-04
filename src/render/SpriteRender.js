(function(Proton, undefined) {

    function SpriteRender(container) {
        SpriteRender._super_.call(this, container);

        this._body = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0xffffff }));
        this.name = "SpriteRender";
    }

    Proton.Util.inherits(SpriteRender, Proton.MeshRender);

    SpriteRender.prototype.scale = function(particle) {
        particle.target.scale.set(particle.scale * particle.radius, particle.scale * particle.radius, 1);
    };

    SpriteRender.prototype.onParticleUpdate = function(particle) {
        if (particle.target) {
            particle.target.position.copy(particle.p);
            if(particle.target.material.rotation !== undefined) {
                particle.target.material.rotation = particle.rotation.x;
            }
            

            this.scale(particle);

            if (particle.useAlpha) {
                particle.target.material.opacity = particle.alpha;
                particle.target.material.transparent = true;
            }

            if (particle.useColor) {
                particle.target.material.color.copy(particle.color);
            }
        }
    };

    Proton.SpriteRender = SpriteRender;
})(Proton);
