import { Event } from "./Event";
/**
 * <p><code>KeyBoardManager</code> 是键盘事件管理类。该类从浏览器中接收键盘事件，并派发该事件。</p>
 * <p>派发事件时若 Stage.focus 为空则只从 Stage 上派发该事件，否则将从 Stage.focus 对象开始一直冒泡派发该事件。所以在 Laya.stage 上监听键盘事件一定能够收到，如果在其他地方监听，则必须处在Stage.focus的冒泡链上才能收到该事件。</p>
 * <p>用户可以通过代码 Laya.stage.focus=someNode 的方式来设置focus对象。</p>
 * <p>用户可统一的根据事件对象中 e.keyCode 来判断按键类型，该属性兼容了不同浏览器的实现。</p>
 */
export declare class KeyBoardManager {
    private static _pressKeys;
    /**是否开启键盘事件，默认为true*/
    static enabled: boolean;
    /**@internal */
    static _event: Event;
    /**@internal */
    static __init__(): void;
    private static _addEvent;
    private static _dispatch;
    /**
     * 返回指定键是否被按下。
     * @param	key 键值。
     * @return 是否被按下。
     */
    static hasKeyDown(key: number): boolean;
}
