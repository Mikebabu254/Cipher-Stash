function covertToMd5() {
    const input = document.getElementById("text").value;
    const result = document.getElementById("result");

    if (input === "") {
        result.innerText = "Please enter a value!";
        return;
    }

    // MD5 hash function implementation
    // md5.js - pure JS MD5 implementation (no dependencies)
function md5(input) {
  function toUtf8Bytes(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code < 0x80) bytes.push(code);
      else if (code < 0x800) {
        bytes.push(0xc0 | (code >> 6));
        bytes.push(0x80 | (code & 0x3f));
      } else if (code < 0xd800 || code >= 0xe000) {
        bytes.push(0xe0 | (code >> 12));
        bytes.push(0x80 | ((code >> 6) & 0x3f));
        bytes.push(0x80 | (code & 0x3f));
      } else {
        // surrogate pair
        i++;
        const code2 = str.charCodeAt(i);
        const full = 0x10000 + (((code & 0x3ff) << 10) | (code2 & 0x3ff));
        bytes.push(0xf0 | (full >> 18));
        bytes.push(0x80 | ((full >> 12) & 0x3f));
        bytes.push(0x80 | ((full >> 6) & 0x3f));
        bytes.push(0x80 | (full & 0x3f));
      }
    }
    return bytes;
  }

  function leftRotate(x, c) {
    return (x << c) | (x >>> (32 - c));
  }

  function toHexLE(word) {
    let s = '';
    for (let i = 0; i < 4; i++) {
      const byte = (word >>> (i * 8)) & 0xff;
      s += (byte >>> 4).toString(16);
      s += (byte & 0x0f).toString(16);
    }
    return s;
  }

  // Initialize variables:
  const s = [
    7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
    5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
    4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
    6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
  ];

  const K = new Array(64).fill(0).map((_, i) =>
    Math.floor(Math.abs(Math.sin(i + 1)) * 2 ** 32) >>> 0
  );

  // Pre-processing: convert input to bytes (UTF-8)
  const msgBytes = toUtf8Bytes(String(input));
  const originalBitLen = msgBytes.length * 8;

  // append '1' bit (0x80), then pad with zeros until length ≡ 56 mod 64
  msgBytes.push(0x80);
  while ((msgBytes.length % 64) !== 56) msgBytes.push(0);

  // append original length in bits as 64-bit little-endian integer
  for (let i = 0; i < 8; i++) {
    msgBytes.push((originalBitLen >>> (8 * i)) & 0xff);
  }

  // Initialize hash values (little endian)
  let a0 = 0x67452301;
  let b0 = 0xefcdab89;
  let c0 = 0x98badcfe;
  let d0 = 0x10325476;

  // Process the message in successive 512-bit chunks:
  for (let i = 0; i < msgBytes.length; i += 64) {
    // break chunk into sixteen 32-bit little-endian words w[j], 0 ≤ j ≤ 15
    const M = new Array(16);
    for (let j = 0; j < 16; j++) {
      const k = i + j * 4;
      M[j] = (msgBytes[k]) | (msgBytes[k + 1] << 8) | (msgBytes[k + 2] << 16) | (msgBytes[k + 3] << 24);
    }

    let A = a0, B = b0, C = c0, D = d0;

    for (let j = 0; j < 64; j++) {
      let F, g;
      if (j < 16) {
        F = (B & C) | (~B & D);
        g = j;
      } else if (j < 32) {
        F = (D & B) | (~D & C);
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        F = B ^ C ^ D;
        g = (3 * j + 5) % 16;
      } else {
        F = C ^ (B | ~D);
        g = (7 * j) % 16;
      }

      const tmp = D;
      D = C;
      C = B;
      const sum = (A + F + K[j] + M[g]) >>> 0;
      B = (B + leftRotate(sum, s[j])) >>> 0;
      A = tmp;
    }

    a0 = (a0 + A) >>> 0;
    b0 = (b0 + B) >>> 0;
    c0 = (c0 + C) >>> 0;
    d0 = (d0 + D) >>> 0;
  }

  // Produce the final hash value (little-endian) as hex
  return toHexLE(a0) + toHexLE(b0) + toHexLE(c0) + toHexLE(d0);
}
 result.innerText = md5(input);

}