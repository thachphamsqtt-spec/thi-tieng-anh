"""Generate the PWA / home-screen icons in icons/ (run: python make_icons.py).

Draws the header badge: white star on the brand blue-cyan gradient.
"""
import math
import os

from PIL import Image, ImageDraw

OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'icons')
SUPERSAMPLE = 4
COLOR_A = (2, 132, 199)   # #0284c7
COLOR_B = (6, 182, 212)   # #06b6d4


def gradient(size):
    """Diagonal 135deg gradient like the CSS badge."""
    img = Image.new('RGB', (size, size))
    px = img.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * (size - 1))
            px[x, y] = tuple(round(a + (b - a) * t) for a, b in zip(COLOR_A, COLOR_B))
    return img


def star_points(cx, cy, r_outer, r_inner):
    pts = []
    for i in range(10):
        r = r_outer if i % 2 == 0 else r_inner
        angle = -math.pi / 2 + i * math.pi / 5
        pts.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    return pts


def make_icon(size, star_ratio, corner_ratio):
    """star_ratio: star outer radius / size. corner_ratio: 0 = full-bleed square."""
    big = size * SUPERSAMPLE
    img = gradient(big).convert('RGBA')
    draw = ImageDraw.Draw(img)
    r = big * star_ratio
    # Optical centering: a 5-point star looks low when centered on its circle
    draw.polygon(star_points(big / 2, big / 2 + r * 0.1, r, r * 0.4), fill=(255, 255, 255, 255))

    if corner_ratio:
        mask = Image.new('L', (big, big), 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, big - 1, big - 1), radius=big * corner_ratio, fill=255)
        img.putalpha(mask)

    return img.resize((size, size), Image.LANCZOS)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    # "any" icons: rounded square
    make_icon(192, 0.32, 0.22).save(os.path.join(OUT_DIR, 'icon-192.png'))
    make_icon(512, 0.32, 0.22).save(os.path.join(OUT_DIR, 'icon-512.png'))
    # Maskable: full-bleed, star kept inside the 80% safe zone
    make_icon(512, 0.26, 0).save(os.path.join(OUT_DIR, 'icon-maskable-512.png'))
    # iOS applies its own rounded mask
    make_icon(180, 0.3, 0).convert('RGB').save(os.path.join(OUT_DIR, 'apple-touch-icon.png'))
    # Path may contain Vietnamese characters the Windows console can't print
    print('Icons written to icons/')


if __name__ == '__main__':
    main()
