/** 工具类 */
export declare enum MinProgramInterfaceType {
    /** 微信 */
    Wechat = 1,
    /** 百度  */
    baidu = 2,
    /** 支付宝  */
    alipay = 3,
    /** 头条系 */
    toutiao = 4
}
export declare enum SureType {
    'No' = "0",
    'Yes' = "1"
}
export declare enum ShareViewType {
    /**所有 */
    'All' = "1",
    /**微信卡片 */
    'WechatCard' = "2",
    /**朋友圈 */
    'WechatMoments' = "3",
    /**qq卡片 */
    'QQCard' = "4",
    /**qq空间 */
    'QQZone' = "5",
    /**微信卡片和朋友圈 */
    'WechatAll' = "2,3",
    /**qq卡片和qq空间 */
    'QQAll' = "4,5",
    /**微信卡片和qq卡片 */
    'CardAll' = "2,4",
    /**朋友圈和qq空间 */
    'MonentsZone' = "3,5"
}
export declare enum ShareType {
    /**微信卡片 */
    'WechatCard' = "0",
    /**朋友圈 */
    'WechatMoments' = "1",
    /**qq卡片 */
    'QQCard' = "2",
    /**qq空间 */
    'QQZone' = "3"
}
export declare enum ShareMinProgramType {
    /**小程序 */
    'MinProgram' = "4"
}
export declare enum MinProgramEnvType {
    /**正式 */
    'Prd' = "0",
    /**开发 */
    'Dev' = "1",
    /**体验 */
    'Experience' = "2"
}
export declare enum ResetNavigationBarType {
    'titleText' = "titleText",
    'titleColor' = "titleColor",
    'rightButton' = "rightButton",
    'rightMenu' = "rightMenu",
    'leftBackButton' = "leftBackButton"
}
export declare enum MapIdType {
    'Amap' = "0",
    'Baidu' = "1",
    'Apple' = "2"
}
export declare enum NavigationMethodType {
    'Drive' = "0",
    'Bus' = "1",
    'walk' = "2",
    'Riding' = "3"
}
export declare enum PermissionType {
    /**通知开关 */
    'Notification' = "NOTIFICATION",
    /**读取日历权限 */
    'ReadCalendar' = "READ_CALENDAR",
    /**修改日历权限 */
    'WriteCalendar' = "WRITE_CALENDAR",
    /**相机权限 */
    'Camera' = "CAMERA",
    /**读取联系人 */
    'ReadContacts' = "READ_CONTACTS",
    /**修改联系人 */
    'WriteContacts' = "WRITE_CONTACTS",
    /**访问手机账号权限 */
    'GetAccounts' = "GET_ACCOUNTS",
    /**WIFI定位权限 */
    'AccessCoarseLocation' = "ACCESS_COARSE_LOCATION",
    /**GPS定位权限 */
    'AccessFineLocation' = "ACCESS_FINE_LOCATION",
    /**录音权限  */
    'RecordAudio' = "RECORD_AUDIO",
    /**存储读取权限 */
    'ReadExternalStorage' = "READ_EXTERNAL_STORAGE",
    /**存储写入权限 */
    'WriteExternalStorage' = "WRITE_EXTERNAL_STORAGE",
    /**发送短信 */
    'SendSms' = "SEND_SMS",
    /**接收短信 */
    'ReceiveSms' = "RECEIVE_SMS",
    /**读取短信内容 */
    'ReadSms' = "READ_SMS",
    /**接收彩信 */
    'ReceiveMms' = "RECEIVE_MMS",
    /**访问电话状态 */
    'ReadPhoneState' = "READ_PHONE_STATE",
    /**允许程序从非系统拨号器里输入电话号码 */
    'CallPhone' = "CALL_PHONE"
}
export declare enum AndroidPayType {
    /**华为 */
    'Huawei' = "1"
}
export declare enum IosPayType {
    /**美国运通卡 */
    Expresscard = "1",
    /**中国银联 */
    UnionPay = "2",
    /**发现卡 */
    DiscoveryCard = "3",
    /**加拿大Interac银行卡 */
    InteracCard = "4",
    /**万事达卡 */
    MasterCard = "5",
    /**信用卡和借记卡 */
    CreditCard = "6",
    /**Visa */
    Visa = "7"
}
export declare enum SupportApplyPayType {
    'Support' = "0",
    'NotSupport' = "1"
}
export declare enum PayChannelType {
    /**支付宝 */
    'AliPay' = "1",
    /**微信 */
    'WeChatPay' = "2"
}
export declare enum PayChannelExtendType {
    /**云闪付(未安装app，sdk会调起对应H5， app 3.0.7支持) */
    'UnionPay' = "3",
    /**Apple Pay（app 3.0.7支持） */
    'ApplePay' = "4"
}
export declare enum BridgerPayResultType {
    /**支付成功 */
    'Success' = "0",
    /**支付取消 */
    'Cancel' = "1",
    /**支付失败 */
    'Failure' = "2",
    /**没有安装 */
    'NotInstalled' = "3",
    /**参数错误 */
    'ParamsError' = "4"
}
export declare enum RegisterEventListenerType {
    /** 截屏事件 */
    'SCREEN_SHOT' = "SCREEN_SHOT"
}
export declare enum PageCycleServiceType {
    /** 页面创建完成，仅走一次 */
    'didLoad' = "didLoad",
    /** 页面即将进入 */
    'willAppear' = "willAppear",
    /** 页面已经进入 */
    'didAppear' = "didAppear",
    /** 页面即将退出 */
    'willDisappear' = "willDisappear",
    /** 页面已经退出 */
    'didDisappear' = "didDisappear",
    /** 页面销毁 */
    'dealloc' = "dealloc"
}
