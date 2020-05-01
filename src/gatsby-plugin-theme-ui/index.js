import { future } from "@theme-ui/presets"
import merge from "lodash.merge"
// lodash.merge will deeply merge custom values with the
// blog theme's defaults

export default merge({}, future, {
  colors: {
    ...future,
  },
  styles: {
    ...future.styles,
  },
})
