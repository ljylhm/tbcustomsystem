// 获取当前的开发环境

const DEVELOP = "development"
const PRODUCTION = "production"

export const getEnv = () => process.env.NODE_ENV
export const isDev = () => getEnv() == DEVELOP
export const isProduction = () => getEnv() == PRODUCTION