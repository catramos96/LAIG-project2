attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying vec4 coords;

uniform float du;
uniform float dv;
uniform float su;
uniform float sv;

void main() {

	coords = vec4(aVertexPosition, 1.0);

	if((coords.x+0.5 == su*1.0/du || coords.x+0.5 == su*1.0/du+1.0/du) && (coords.y+0.5 == sv*1.0/dv || coords.y+0.5 == sv*1.0/dv+1.0/dv ))
		coords.z = 0.05;

	gl_Position = uPMatrix * uMVMatrix * coords;

	

	vTextureCoord = aTextureCoord;
}

