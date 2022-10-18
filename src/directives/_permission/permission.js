let permissionHideCode = window.gconfig.permissionHideCode;
if (!permissionHideCode) {
    permissionHideCode = '';
}
/*
 * permissionHideCode 隐藏的按钮或模块
 * 参数 [xxx]
 * 'telep-add-btn', 话术添加按钮
 * 'telep-edt-btn', 话术编辑按钮
 */
export default {
    // eslint-disable-next-line no-unused-vars
    inserted(el, binding, vnode) {
        const permission = binding.value;
        const hasPermission = checkPermission(permission);
        if (hasPermission) {
            el.parentNode && el.parentNode.removeChild(el);
        }
    },
};

// 校验权限
export function checkPermission(permission) {
    let permissionCodes = permissionHideCode;

    if (typeof permissionCodes === 'string') {
        permissionCodes = [permissionCodes];
    }
    if (permission && !Array.isArray(permission)) {
        permission = [permission];
    }

    const hasPermission = permission.some((pmCode) => {
        return permissionCodes.includes(pmCode);
    });
    return hasPermission;
}
