
# 実行サンプル

https://bit.ly/3tfgTul

Postman - Private_APIs - local_koa

## 実行結果

```
[ { Name: 'たろう' }, { Name: 'はなこ' } ]
```

## パラメータ1

```json
[
    {
        "FullName": {
            "FirstName": "たろう",
            "LastName": "たなか"
        },
        "Url": "https://www.google.com/",
        "Company": "ほげほげ株式会社",
        "Email": "tanaka.taro@test.example.com"
    },
    {
        "FullName": {
            "FirstName": "はなこ",
            "LastName": "はなやま"
        },
        "Url": "https://www.yahoo.co.jp/",
        "Company": "ぴよぴよ不動産",
        "Email": "hanayama.hanako@test.example.com"
    }
]
```

## パラメータ2

```json
{ "Name": j.FullName.FirstName }
```

```json
{ "Name": j.FullName.FirstName + " " + j.FullName.LastName }
```
