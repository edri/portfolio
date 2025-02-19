uniform float uTime;
uniform sampler2D uPerlinTexture;
uniform bool uWind;

varying vec2 vUv;

#include ../includes/rotate2D.glsl

void main() {
    vec3 newPosition = position;
    
    // Twist
    // We want a value that will change according to the elevation only.
    // For this reason, as the first value of the vec2() we are sending to texture(),
    // we are going to put 0.5 and use uv.y as the second value.
    float twistPerlin = texture(
        uPerlinTexture,
        vec2(0.5, uv.y * 0.2 - uTime * 0.005)
    ).r;
    float angle = twistPerlin * 10.0;
    newPosition.xz = rotate2D(newPosition.xz, angle);

    // Wind
    if (uWind) {
        vec2 windOffset = vec2(
            texture(uPerlinTexture, vec2(0.25, uTime * 0.01)).r - 0.5,
            texture(uPerlinTexture, vec2(0.75, uTime * 0.01)).r - 0.5
        );
        windOffset *= pow(uv.y, 2.0) * 10.0;
        newPosition.xz += windOffset;
    }

    // Final position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

    // Varyings
    vUv = uv;
}