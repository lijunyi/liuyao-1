/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import { Scene } from "laya/display/Scene";
import { ClassUtils } from "laya/utils/ClassUtils";
var REG: Function = ClassUtils.regClass;
import { Sprite } from "laya/display/Sprite";
export module ui.test {
    export class TestSceneUI extends Scene {
        public referenceClass:Array<any>=[Sprite]; // 强制引用类,防止被编译器忽略
		constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("test/TestScene");
        }
    }
    REG("ui.test.TestSceneUI",TestSceneUI);
}