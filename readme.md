### Scripts

-   Install: `npm i`
-   Build: `npm run build`
-   Eslint: `npm run lint`
-   Prettier: `npm run prettier`
-   Build and Run Unit Test: `npm run test`
-   Run Unit Test: `npm run jasmine`
-   Start ts server: `npm run start`
-   to Build and start js server: `npm run startjs`

The server will listen on port 3000:

#### server

http://localhost:3000/

Expected query arguments are:

images in this path src/public/images

-   _imagename_: Available imagenames are:
    -   encenadaport
    -   fjord
    -   icelandwaterfall
    -   palmtunnel
    -   santamonica
-   _width_: value > 0
-   _height_: value > 0

#### Example 1

http://localhost:3000/api/images?imagename=fjord
Will display the original fjord image.

#### Example 2

http://localhost:3000/api/images?imagename=fjord&width=200&height=200
Will scale the fjord image to 200 by 200 pixels.

#### Notes

    _resubmit
    - error handling in http://localhost:3000/api/images?imagename=fjord&height=-1
    - test function without sending request src/tests/indexSpec.ts
