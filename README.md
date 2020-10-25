English | [简体中文](./README.zh_CN.md)

# AirTable App Template

## How to Use

## Use `block init`

```bash
block init appwfwENHN3Daxd6w/blkNL28deUVyBeaB3  --template=https://github.com/arvinxx/airtable-app-template apps
```

## Manually change BlockId & BaseId

open `.block/remote.json` and change the `blockId` and `baseId` to match AirTable App.
This ID will show below

```
block init appwfwENHN3Daxd6w/blkNL28deUVyBeaB3 --template=xxxxx
```

it looks like below

```json
{
  "blockId": "appwfwENHN3Daxd6w",
  "baseId": "blkNL28deUVyBeaB3"
}
```

## License

[MIT](./LICENSE.md) ® Arvin Xu
