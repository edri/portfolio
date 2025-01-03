uniform float uTime;
uniform sampler2D uPerlinTexture;

varying vec2 vUv;

void main() {
    // Scale and animate
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.5;
    smokeUv.y *= 0.3;
    smokeUv.y -= uTime * 0.03;

    // Smoke (since the Perlin texture is a grayscale image, we need only one channel and we can use the red one).
    float smoke = texture(uPerlinTexture, smokeUv).r;

    // Smooth remap in order to have more transparency: every value below 0.4 will be restricted to 0 and then it’ll go up to 1. 
    smoke = smoothstep(0.4, 1.0, smoke);

    // Edges
    // We want the smoke to be at 0 at the very left edge and to go up very fast to 1. 
    smoke *= smoothstep(0.0, 0.1, vUv.x);
    // Same on the other side.
    smoke *= smoothstep(1.0, 0.9, vUv.x);
    // Same for the top and bottom parts.
    smoke *= smoothstep(0.0, 0.1, vUv.y);
    smoke *= smoothstep(1.0, 0.4, vUv.y);

    // Final color
    gl_FragColor = vec4(1.0, 1.0, 1.0, smoke);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}