/** 
 * api接口的统一出口
 */
import login from '@/api/login';
import file from '@/api/file';
import admin from '@/api/admin';
import userRelated from '@/api/userRelated';
import project from '@/api/project';
import counsel from '@/api/counsel';
// 其他模块的接口……

// 导出接口
export default {    
    login,
    file,
    userRelated,
    admin,
    project,
    counsel
    // ……
}