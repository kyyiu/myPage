declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.less'
}

declare module '*.module.scss' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.scss'
}

declare module 'marked'
declare module 'highlight.js'
/// <reference types="react-scripts" />
