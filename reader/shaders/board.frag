#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec4 coords;

uniform sampler2D uSampler;
uniform float du;
uniform float dv;
uniform float su;
uniform float sv;
uniform vec4 c1;
uniform vec4 c2;
uniform vec4 c3;

void main() {
		
		vec4 color = texture2D(uSampler,vTextureCoord);
		
		if(coords.x+0.5 >= su*1.0/du && coords.x+0.5 <= su*1.0/du+1.0/du && coords.y+0.5 >= sv*1.0/dv && coords.y+0.5 <= sv*1.0/dv+1.0/dv)
			color *= c3;
		else if(mod(vTextureCoord.s,2.0/du) > 1.0/du && mod(vTextureCoord.t,2.0/dv) > 1.0/dv)
			color *= c1;
		else if(mod(vTextureCoord.s,2.0/du) < 1.0/du && mod(vTextureCoord.t,2.0/dv) < 1.0/dv)
			color *= c1;
		else
			color *=c2;
			
		gl_FragColor = color;
}