# exchange-service

提供匯率轉換的微服務。


## 匯率轉換 API 使用方式

- **Method**: GET

- **Endpoint**: `/exchange`

- **參數**:
  - `source`: 輸入的原始貨幣代碼（例如：USD）
  - `target`: 目標貨幣代碼（例如：JPY）
  - `amount`: 欲轉換的金額（例如：$1,525）

- **範例**:
  - 輸入：`http://localhost:3000/exchange?source=USD&target=JPY&amount=$1,525`
  - 輸出：`{ "msg": "success", "amount": "$170,496.53" }`

## 安裝與執行

1. 下載此專案:
    ```
    git clone git@github.com:ba40431/AsiaYo.git
    ```

2. 執行專案:
    ```
    npm run start
    ```

3. 執行測試:
    ```
    npm run test
    ```