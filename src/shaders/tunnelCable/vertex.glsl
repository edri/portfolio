varying vec2 vUv;

void main() {
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    // Remove the projectionMatrix and the modelViewMatrix in order for the plane to always face the camera.
    gl_Position = vec4(position, 1.0);

    vUv = uv;
}
