export const isMobileDevice = () => {
    const userAgent = navigator.userAgent;
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent.toLowerCase());

    // 屏幕特性检测
    const isSmallScreen = window.innerWidth <= 768;
    const hasTouch = 'ontouchstart' in window || (navigator as Navigator).maxTouchPoints > 0;

    // 综合考虑多种因素
    return isMobileUA || (hasTouch && isSmallScreen);
}