# http-utils

HTTP wrapper for JavaScript libraries

>`ua-parser-js` [(npm)](https://www.npmjs.com/package/ua-parser-js) is a JavaScript library to detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data with relatively small footprint
>`random-word-slugs` [(npm)](https://www.npmjs.com/package/random-word-slugs) A handy utility to create those random word slugs (e.g., generous-pink-biscuit) you see all over the place.
>`uuid` [(npm)](https://www.npmjs.com/package/uuid) is a JavaScript implementation of the full UUID spec ([RFC9562](https://www.rfc-editor.org/rfc/rfc9562.html))

Moving utility functions to API endpoints instead of importing libraries directly can significantly improve cross-language compatibility and provide access to runtimes or languages with less rich community support.


Key benefits:
 - Language-agnostic implementation - use anywhere
 - Centralized updates and maintenance
 - Easy to scale independently of client applications
 - Built-in usage monitoring and access control
 - Consistent behavior across all consuming applications

Main trade-offs to consider when using `http-utils`:
 - Network latency vs direct function calls
 - Infrastructure costs for hosting APIs (for self hosting)
 - Additional complexity for simple utilities which are available in std lib
 - Requires internet connectivity