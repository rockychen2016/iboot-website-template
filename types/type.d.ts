/**
 * 表单数据类型
 */
declare type UIFormEntities =  { [k: string]: T; }
/**
 * 表单Submit事件类型
 */
declare type UIFormEvent = React.FormEvent<HTMLFormElement>
/**
 * Select、Table、ListBox 选择事件参数类型
 */
declare type UISelection =  'all' | Set<Key>;
/**
 * 页面路由动态参数类型
 */
declare type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>