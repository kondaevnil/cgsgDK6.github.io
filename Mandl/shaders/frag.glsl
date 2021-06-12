precision mediump float;

uniform float count;
uniform float zoom;
uniform vec2 offset;
uniform vec2 resolution;

float Mandl(vec2 pos)
{
    vec2 zn = vec2(-0.4, 0);
    pos *= zoom;
    pos += offset;

    for (int i = 0; i < 1000; ++i)
    {
    if (i >= int(count))
    {
        break;
    }

    float x2 = zn.x * zn.x;
    float y2 = zn.y * zn.y;
    if (x2 + y2 > 4.0)
    {
        return float(i + 1) / count;
    }

    zn.y = zn.x * zn.y * 2.0 + pos.y;
    zn.x = (x2 - y2) + pos.x; 
    }
    return 0.0;
}

void main(void)
{
    float aspectRatio = resolution.x / resolution.y;
    vec2 pos = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;
    pos.x *= aspectRatio;

    float n = Mandl(pos);

    if (n == 0.0)
    gl_FragColor = vec4(0.1, 0.2, 0.5, 1);
    else
    gl_FragColor = vec4(0.30, 0.47, 0.1, 0) * n + vec4(0.3, 0.3, 0, 1);
}