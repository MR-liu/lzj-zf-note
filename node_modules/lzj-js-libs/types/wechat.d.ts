/*
 * @Author: your name
 * @Date: 2020-05-22 17:17:59
 * @LastEditTime: 2021-01-05 22:27:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /dm-util/src/types/wechat.d.ts
 */
export interface IWx {
	/**小程序 */
	miniProgram: IMinProgram;
	/**初始化配置 */
	config(params: IConfig): void;
	/**成功回调 */
	ready(func: Function): void;
	/**分享朋友圈 */
	onMenuShareTimeline(params: IShareParams): void;
	/**分享卡片 */
	onMenuShareAppMessage(params: IShareParams): void;
	/**分享qq */
	onMenuShareQQ(params: IShareParams): void;
	/**分享空间 */
	onMenuShareWeibo(params: IShareParams): void;
}

/**小程序sdk */
export interface IMinProgram {
	getEnv: Function;
	navigateBack: Function;
	navigateTo: Function;
	postMessage: Function;
	reLaunch: Function;
	redirectTo: Function;
	switchTab: Function;
}

/**初始化配置 */
export interface IConfig {
	debug: boolean;
	appId: string;
	timestamp: number;
	nonceStr: string;
	signature: string;
	jsApiList: Array<string>;
}

/**
 * 分享参数
 */
export interface IShareParams {
	title: string;
	desc: string;
	link: string;
	imgUrl: string;
	success?: Function;
	cancel?: Function;
}
