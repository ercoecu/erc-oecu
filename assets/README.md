# assetsフォルダ

このフォルダにPDFファイルを配置すると、自動的にサイト上で公開されます。

## 使い方

1. PDFファイルをこのフォルダ（assets）に配置します
2. `pdf-list.json`ファイルを編集して、PDFファイルの情報を追加します

## pdf-list.jsonの形式

```json
[
    {
        "name": "資料の名前",
        "file": "assets/ファイル名.pdf",
        "description": "資料の説明（任意）",
        "size": "ファイルサイズ（任意）",
        "date": "公開日（任意）"
    }
]
```

## 例

```json
[
    {
        "name": "活動報告書2024",
        "file": "assets/report2024.pdf",
        "description": "2024年度の活動報告書です",
        "size": "2.5 MB",
        "date": "2024-12-01"
    },
    {
        "name": "新入部員向けガイド",
        "file": "assets/guide.pdf",
        "description": "新入部員のための活動ガイド",
        "size": "1.8 MB",
        "date": "2024-04-01"
    }
]
```

## 注意事項

- PDFファイルは必ずこのフォルダ（assets）内に配置してください
- `file`フィールドのパスは`assets/ファイル名.pdf`の形式で記述してください
- 新しいPDFを追加したら、`pdf-list.json`を更新してください

