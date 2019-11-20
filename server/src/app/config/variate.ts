/**
 * 整个项目的入口变量
 */

// 开发环境: development || testing || production, 默认 development
export const NODE_ENV: string = process.env.NODE_ENV;

// 数据库密码

export const DB_PASSWORD: string = process.env.DB_PASSWORD;
// 启动端口号,默认 8080
export const PORT: string = process.env.PORT || '8080';
