/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *   List os theme presets that can be imported:
 *
 *    - base: https://theme-ui.com/presets/base
 *    - system: https://theme-ui.com/presets/system
 *    - funk: https://theme-ui.com/presets/funk
 *    - future: https://theme-ui.com/presets/future
 *    - roboto: https://theme-ui.com/presets/roboto
 *    - dark: https://theme-ui.com/presets/dark
 *    - deep: https://theme-ui.com/presets/deep
 *    - swiss: https://theme-ui.com/presets/swiss
 *    - tosh: https://theme-ui.com/presets/tosh
 *    - bootstrap: https://theme-ui.com/presets/bootstrap
 *    - bulma (WIP): https://theme-ui.com/presets/bulma
 *    - tailwind: https://theme-ui.com/presets/tailwind
 *
 *   Just replace preset name in the import statement from
 *   @theme-ui/presets below and enjoy a new look with no brainer.
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { base } from "@theme-ui/presets"
import merge from "lodash.merge"
// lodash.merge will deeply merge custom values with the
// blog theme's defaults

export default merge({}, base, {
  colors: {
    ...base,
    // Here you can add your own theme colors or override existent theme preset colors
    // i.e. let's add theme mode dark (assuming base as preset imported). You'll have to invert mode colors depending on theme preset imported.
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#30c",
        secondary: "#e2e8fe",
      },
    },
  },
  styles: {
    ...base.styles,
    // Here you can add your own styles or override existent preset styles
    // i.e. let's override an element
    a: {
      color: "secondary",
    },
  },
})

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  If you prefer not to import any preset theme styles, comment out
 *  import statements from above, uncomment line below and create your
 *  own object of styles and colors for your site.
 *
 *  You can follow this tutorial to create them: https://www.gatsbyjs.org/docs/theme-ui/#creating-a-theme-object
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// export default {}
