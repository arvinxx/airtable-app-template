import React, { FC } from 'react';
import { Button, Drawer } from 'antd';
import { Flexbox } from '@arvinxu/layout-kit';

import { useShowSettings } from './useShowSettings';
import { FormField, TablePickerSynced } from '@airtable/blocks/ui';

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  const { closeSettings, isShowSettings } = useShowSettings();

  return (
    <Drawer
      visible={isShowSettings}
      title={'设置面板'}
      onClose={closeSettings}
      footer={
        <Flexbox direction={'horizontal-reverse'}>
          <Button type={'primary'} onClick={closeSettings}>
            确定
          </Button>
        </Flexbox>
      }
    >
      <Flexbox>
        <FormField label="表格">
          {/*<TablePickerSynced globalConfigKey={GlobalSettingsKeys.tableId} />*/}
        </FormField>
      </Flexbox>
    </Drawer>
  );
};

export default Settings;
