import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => (
  <input ref={ref} {...props}>
  </input>
))
