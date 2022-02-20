import {
  useGlobalConfig,
  useSettingsButton,
  useViewport,
} from '@airtable/blocks/ui';

const ShowSettingsKey = {
  showSettings: 'showSettings',
};

export interface ShowSettingsOptions {
  /**
   * 初始化值
   * 默认为关闭
   */
  initValue?: boolean;
  /**
   * 是否默认打开 Viewport
   */
  openViewport?: boolean;
}
/**
 * 显示 settings 方法
 * 会将 showSettings 方法直接存到 GlobalConfig 中
 * 可以直接在所有组件中调用
 *
 * @param options
 */
export const useShowSettings = (
  options: ShowSettingsOptions = { initValue: false, openViewport: false }
) => {
  const { openViewport, initValue } = options;
  const viewport = useViewport();
  const globalConfig = useGlobalConfig();

  const isShowSettings =
    (globalConfig.get(ShowSettingsKey.showSettings) as boolean) || initValue;

  const setShowSettings = (visible: boolean) => {
    globalConfig.setAsync(ShowSettingsKey.showSettings, visible).finally();
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  useSettingsButton(() => {
    if (openViewport) {
      viewport.enterFullscreenIfPossible();
    }
    setShowSettings(!isShowSettings);
  });

  return {
    isShowSettings,
    closeSettings,
  };
};
