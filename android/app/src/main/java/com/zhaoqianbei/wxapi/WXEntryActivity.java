package com.zhaoqianbei.wxapi;
import android.app.Activity;
import android.os.Bundle;

import com.theweflex.react.WeChatModule;
 
/**
 * Created by admin on 2017/11/1.
 */

public class WXEntryActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WeChatModule.handleIntent(getIntent());
        finish();
    }
}
