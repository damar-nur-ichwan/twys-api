# Overview Set
This feature is used to set all overview data

## Usage example
- method: ```POST```
- path: ```/api/data/overview```
- body: 
```json
{
    "overview": [
        {
            "average_count_of_buy_per_trade":1,
            "average_income":12.95,
            "average_trade_duration":20,
            "code":"AALI",
            "highest_income":24.87,
            "join_from":"28 January 2022, 16:33 WIB",
            "lowest_income":1.03,
            "notification_date":"01 April 2022, 16:55 WIB",
            "price":12300,
            "strategy_code":88,
            "tomorrow_action":"Sell",
            "total_market_reviewed":51,
            "total_trade":2,
            "win_rate":100
        },
        {
            "average_count_of_buy_per_trade":1,
            "average_income":12.95,
            "average_trade_duration":20,
            "code":"ABBA",
            "highest_income":24.87,
            "join_from":"28 January 2022, 16:33 WIB",
            "lowest_income":1.03,
            "notification_date":"01 April 2022, 16:55 WIB",
            "price":12300,
            "strategy_code":88,
            "tomorrow_action":"Sell",
            "total_market_reviewed":51,
            "total_trade":2,
            "win_rate":100
        }
    ]
}
```
